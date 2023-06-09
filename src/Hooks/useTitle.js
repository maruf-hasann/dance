import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Dance`;
  }, [title]);
};
export default useTitle;
