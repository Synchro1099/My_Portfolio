import React, { useEffect, useMemo, useRef, useState } from "react";

// Illustrative snippets based on the S-Villa booking platform.
const SNIPPETS = [
  {
    file: "booking.ts",
    lang: "ts",
    status: "✓ build passed · deployed to Vercel",
    code: [
      "// Server-authoritative booking",
      "export async function book(input: BookingInput) {",
      "  const { data, error } = await db.rpc(\"book_slot\", {",
      "    service_id: input.serviceId,",
      "    starts_at: input.startsAt,",
      "  });",
      "",
      "  if (error?.code === \"23P01\") {",
      "    throw new SlotTakenError(); // slot already taken",
      "  }",
      "  return data; // price computed in Postgres",
      "}",
    ],
  },
  {
    file: "no_overlap.sql",
    lang: "sql",
    status: "✓ migration applied · 0 conflicts possible",
    code: [
      "-- Double-bookings blocked by the database",
      "alter table bookings",
      "  add constraint no_overlap",
      "  exclude using gist (",
      "    resource_id with =,",
      "    tstzrange(starts_at, ends_at) with &&",
      "  )",
      "  where (status <> 'rejected');",
    ],
  },
  {
    file: "policies.sql",
    lang: "sql",
    status: "✓ row level security enabled",
    code: [
      "-- Customers only ever see their own bookings",
      "create policy \"own bookings\"",
      "  on bookings for select",
      "  using (auth.uid() = customer_id);",
      "",
      "-- Only the owner can read payment proofs",
      "create policy \"owner reads proofs\"",
      "  on payment_proofs for select",
      "  using (is_owner(auth.uid()));",
    ],
  },
];

const KEYWORDS = {
  ts: new Set([
    "export", "async", "function", "const", "await", "if", "throw", "new", "return",
    "let", "import", "from", "type", "interface",
  ]),
  sql: new Set([
    "alter", "table", "add", "constraint", "exclude", "using", "gist", "with", "where",
    "create", "policy", "on", "for", "select", "and", "or", "not",
  ]),
};

const TOKEN_RE = /(\/\/.*$|--.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b\d[\w]*\b)|([A-Za-z_]\w*)(?=\s*\()|([A-Za-z_]\w*)|(\s+)|([^\sA-Za-z_\d"']+)/g;

// Splits one line of code into [{ cls, text }] tokens for syntax colouring.
const tokenize = (line, lang) => {
  const tokens = [];
  let match;
  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(line)) !== null) {
    const [text, comment, string, number, fn, word] = match;
    let cls = "tok-plain";
    if (comment) {
      const isComment = lang === "sql" ? comment.startsWith("--") : comment.startsWith("//");
      cls = isComment ? "tok-comment" : "tok-plain";
    } else if (string) cls = "tok-string";
    else if (number) cls = "tok-number";
    else if (fn) cls = KEYWORDS[lang].has(fn.toLowerCase()) ? "tok-keyword" : "tok-fn";
    else if (word) {
      if (KEYWORDS[lang].has(lang === "sql" ? word.toLowerCase() : word)) cls = "tok-keyword";
      else if (/^[A-Z]/.test(word)) cls = "tok-type";
    }
    tokens.push({ cls, text });
  }
  return tokens;
};

const CodeWindow = () => {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [inView, setInView] = useState(true);
  const [reducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const snippet = SNIPPETS[index];
  const lines = useMemo(
    () => snippet.code.map((line) => ({ line, tokens: tokenize(line, snippet.lang) })),
    [snippet]
  );
  // Each line's characters plus its newline.
  const total = useMemo(() => snippet.code.reduce((sum, line) => sum + line.length + 1, 0), [snippet]);
  const shown = reducedMotion ? total : typed;
  const done = shown >= total;

  // Pause the animation while the window is scrolled out of view.
  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || !inView) return undefined;
    if (typed < total) {
      const id = window.setTimeout(() => setTyped((count) => count + 1), 24);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % SNIPPETS.length);
      setTyped(0);
    }, 3800);
    return () => window.clearTimeout(id);
  }, [typed, total, inView, reducedMotion]);

  const selectTab = (tabIndex) => {
    setIndex(tabIndex);
    setTyped(0);
  };

  // Render only the characters typed so far, keeping token colours.
  let remaining = shown;
  let caretPlaced = false;

  return (
    <div className="code-window" ref={ref}>
      <div className="code-window-bar">
        <div className="code-window-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="code-window-tabs" role="tablist" aria-label="Code samples">
          {SNIPPETS.map((item, tabIndex) => (
            <button
              key={item.file}
              type="button"
              role="tab"
              aria-selected={tabIndex === index}
              className={tabIndex === index ? "code-tab active" : "code-tab"}
              onClick={() => selectTab(tabIndex)}
            >
              {item.file}
            </button>
          ))}
        </div>
      </div>

      <pre className="code-window-body" aria-label={`${snippet.file} code sample`}>
        <code>
          {lines.map(({ line, tokens }, lineIndex) => {
            const lineBudget = Math.max(Math.min(remaining, line.length), 0);
            const lineStarted = remaining > 0;
            remaining -= line.length + 1;
            const showCaret = !caretPlaced && (remaining < 0 || lineIndex === lines.length - 1);
            if (showCaret) caretPlaced = true;

            let budget = lineBudget;
            return (
              <div className="code-line" key={lineIndex}>
                <span className="code-line-number" aria-hidden="true">{lineIndex + 1}</span>
                <span className="code-line-text">
                  {lineStarted && tokens.map((token, tokenIndex) => {
                    if (budget <= 0) return null;
                    const text = token.text.slice(0, budget);
                    budget -= text.length;
                    return <span className={token.cls} key={tokenIndex}>{text}</span>;
                  })}
                  {showCaret && <span className="code-caret" aria-hidden="true"></span>}
                </span>
              </div>
            );
          })}
        </code>
      </pre>

      <div className="code-window-status">
        <span className="code-status-branch">● main</span>
        <span className={done ? "code-status-result is-visible" : "code-status-result"}>
          {snippet.status}
        </span>
      </div>
    </div>
  );
};

export default CodeWindow;
