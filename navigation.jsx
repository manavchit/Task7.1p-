import { Link } from "react-router-dom";
import "./navigation.css";

const TopBar = () => {
  return (
    <div className="Top">
      <Link to="/" className="Home">
        DEV@Deakin
      </Link>

      <div className="searchBar">
        <input type="search" placeholder="Search..." />
      </div>

      <div className="nav-links">
        <Link to="/post" className="nav-link">
          Post
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
