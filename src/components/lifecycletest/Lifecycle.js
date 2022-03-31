import React, { useEffect, useMemo, useState } from "react";
const useComponentWillMount = (func) => useMemo(func, [func]);
const useComponentDidMount = (func) => useEffect(func, [func]);

export default function LifeCycle() {
  const [count, setCount] = useState(0);
  //// first to run
  useComponentWillMount(() => {
    console.log("will mount");
  });
  //// second to run
  (() => {
    console.log("test");
  })();
  //// third to run
  useComponentDidMount(() => {
    console.log("did mount");
  });
  //// fourth to run
  useEffect(() => {
    console.log("update");
  });
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>update count</button>
    </div>
  );
}
