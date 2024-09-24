import { Link } from "react-router-dom";
// import { useState } from "react";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Apply dark mode by toggling a class on the body element
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="container">
      <div className="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Where in the world?</Link>
            </li>
            <li>
              <a onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
