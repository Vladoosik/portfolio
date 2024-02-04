// modules
import { animateScroll as scroll } from "react-scroll/modules";
import { NavigateFunction } from "react-router/dist/lib/hooks";

export const handleNavigation = (navigate: NavigateFunction, path: string) => {
  const options = {
    duration: 200,
    smooth: true,
  };
  scroll.scrollToTop(options);
  setTimeout(() => navigate(path), 300);
};
