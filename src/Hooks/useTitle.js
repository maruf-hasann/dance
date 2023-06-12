import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -FLAIRE `;
  }, [title]);
};
export default useTitle;
