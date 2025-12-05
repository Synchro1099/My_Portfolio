import React from "react";

function PreLoader({ load }) {
  if (!load) return null; // render nothing when load is false

  return <div id="preloader"></div>; // only show when loading
}

export default PreLoader;
