import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="navBar">
        <nav>
          <ul>
            <li>
              <a>Where in the world?</a>
            </li>
            <li>
              <a>Dark Mode</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
