import { useEffect } from "react";

const PageMeta = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Company Name`;

    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);

  return null;
};

export default PageMeta;
