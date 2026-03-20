import { useEffect } from "react";

const useWow = () => {
  useEffect(() => {
    const initWow = () => {
      import("wowjs")
        .then((module) => {
          const WOW = module.default;

          // Add error handling to the WOW library
          const originalResetAnimation = WOW.WOW.prototype.resetAnimation;
          WOW.WOW.prototype.resetAnimation = function (element) {
            try {
              // Ensure element exists and has className property
              if (
                element &&
                element.className &&
                typeof element.className === "string"
              ) {
                return originalResetAnimation.call(this, element);
              }
            } catch (error) {
              console.warn("WOW.js animation error:", error);
            }
          };

          const wow = new WOW.WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 80,
            mobile: true,
            live: true,
          });

          try {
            wow.init();
          } catch (error) {
            console.warn("WOW.js initialization error:", error);
          }
        })
        .catch((error) => {
          console.warn("Failed to load WOW.js:", error);
        });
    };

    if (typeof window !== "undefined") {
      // Add a small delay to ensure DOM is fully ready
      const timer = setTimeout(() => {
        initWow();
      }, 100);

      const handleRouteChange = () => {
        if (typeof window.WOW !== "undefined") {
          try {
            window.WOW.sync();
          } catch (error) {
            console.warn("WOW.js sync error:", error);
          }
        }
      };

      // Listen for route changes
      document.addEventListener("routeChangeComplete", handleRouteChange);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("routeChangeComplete", handleRouteChange);
      };
    }
  }, []);
};

export default useWow;
