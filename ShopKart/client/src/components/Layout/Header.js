import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();
    const handleLogout = () => {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      toast.success("Logout Successfully");
    };
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-shopping-cart mr-2" /> PrimePicks!
        </Link>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <i className="fas fa-home mr-1" /> Home
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to={"/categories"}
              data-bs-toggle="dropdown"
            >
              Categories
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to={"/categories"}>
                  All Categories
                </Link>
              </li>
              {categories?.map((c) => (
                <li key={c.slug}>
                  <Link
                    className="dropdown-item"
                    to={`/category/${c.slug}`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
  
          {!auth?.user ? (
            <>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  <i className="fas fa-user-plus mr-1" /> Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  <i className="fas fa-sign-in-alt mr-1" /> Login
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ border: "none" }}
                >
                  {auth?.user?.name}
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="dropdown-item"
                    >
                      <i className="fas fa-tachometer-alt mr-1" /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="dropdown-item"
                    >
                      <i className="fas fa-sign-out-alt mr-1" /> Logout
                    </NavLink>
                  </li>
                  
                </ul>
                
              </li>
              
                  
                 
            </>
            
          )}
          <div className="px-4">
          <SearchInput />
          </div>
        </ul>
        <NavLink to="/cart" className="mr-1">
            <Badge count={cart?.length} showZero offset={[10, -5]}>
              Cart
            </Badge>
          </NavLink>

          </div>
  </div>
</nav>



    </>
  );
};

export default Header;
  