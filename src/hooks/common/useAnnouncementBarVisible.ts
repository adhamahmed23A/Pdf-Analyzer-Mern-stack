import { useEffect, useState } from "react";
const useAnnouncementBarVisible = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY === 0 || currentY < lastY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
};

export default useAnnouncementBarVisible;
