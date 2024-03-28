import { useEffect, useState } from "react";

type resultType = {} | null | undefined;

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
