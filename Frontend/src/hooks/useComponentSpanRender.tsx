import React, { useEffect, useState } from "react";

interface resultType {}

function useComponentSpanRender(result: resultType) {
  const [componentRender, setComponentRender] = useState(false);
  useEffect(() => {
    setComponentRender(true);
    setTimeout(() => {
      setComponentRender(false);
    }, 3000);
  }, [result]);

  return componentRender;
}

export default useComponentSpanRender;
