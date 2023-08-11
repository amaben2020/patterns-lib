// smiley-face.js
import * as React from "react";
const SmileyFace = React.lazy(() => import("./smiley-face"));

function CodeSplitting() {
  return (
    <div>
      <React.Suspense fallback={<div>loading...</div>}>
        <SmileyFace />
      </React.Suspense>
    </div>
  );
}

export default CodeSplitting;
