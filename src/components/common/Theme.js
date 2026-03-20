import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      // Remove 'dark' class to body on initial load if light mode is enabled
      document.body.classList.remove("dark");
    } else {
      // Default to dark mode if no preference is saved or if dark mode is saved
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    // Toggle 'dark' class based on updated value of isDarkMode
    document.body.classList.toggle("dark", !isDarkMode);
  };

  // Don't render anything until component is mounted on client
  if (!isMounted) {
    return (
      <div className="tt-style-switch">
        <i className="bi bi-moon-fill" />
      </div>
    );
  }

  return (
    <div
      className={`tt-style-switch ${isDarkMode ? "index-dark" : ""}`}
      onClick={toggleTheme}
    >
      <i
        className={`bi ${
          isDarkMode ? "bi-moon-fill" : " bi-brightness-low-fill"
        }`}
      />
    </div>
  );
};

export default ThemeSwitch;
