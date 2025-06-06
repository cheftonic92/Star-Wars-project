import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-transparent">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://wallpapers.com/images/featured/logo-de-star-wars-xcw4lfbj6xjx2qvm.jpg"
              alt=""
              style={{ width: '200px', height: '110px' }}
            />
          </span>
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <i className="fa-regular fa-heart"></i>
          </button>
          <ul className="dropdown-menu">
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
