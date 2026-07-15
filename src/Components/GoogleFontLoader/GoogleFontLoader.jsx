import { useEffect } from "react";

const GoogleFontLoader = ({ fonts = [] }) => {
  useEffect(() => {
    fonts.forEach(({ font, weights = [400] }) => {
      const id = `google-font-${font.replace(/\s+/g, "-").toLowerCase()}`;
      if (document.getElementById(id)) {
        return;
      }

      const weightParam = weights.join(";");
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
        font
      )}:wght@${weightParam}&display=swap`;
      document.head.appendChild(link);
    });
  }, [fonts]);

  return null;
};

export default GoogleFontLoader;
