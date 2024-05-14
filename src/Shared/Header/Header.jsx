import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ThemeChange from "../../ThemeChange/ThemeChange";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import "../../Componets/SignUp/SignUp.css";
import { CgProfile } from "react-icons/cg";
function Header() {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const navigate = useNavigate();
  const { users } = useContext(AuthContext);
  const auth = getAuth(app);
  const handleLogOut = () => {
    signOut(auth);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navItems = (
    <>
      <li className="mr-3">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={"/allfoods"}>All Foods</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>

      <li className="mr-3">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li className="mr-3">
        <NavLink to={"/review"}>Review</NavLink>
      </li>
      {users ? (
        <li className="mr-3">
          <button onClick={handleLogOut}>LogOut</button>
        </li>
      ) : (
        <li className="mr-3">
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-4 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown" onClick={toggleDropdown}>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          )}
        </div>
        <Link to="/">
          <img src={logo} alt="" className="w-16" />
        </Link>
        <h2 className="text-green-700 text-2xl">Food Mahal</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <ThemeChange></ThemeChange>
      </div>
      <div className="text-right text-4xl">
        {users ? (
          <>
            <div className="dropdown dropdown-end" onClick={toggleDropdown}>
              <div tabIndex={0} className="m-1">
                {users.photoURL ? (
                  <img
                    src={users?.photoURL}
                    alt=""
                    className="rounded-full w-3/4 whirl"
                  />
                ) : (
                  <CgProfile></CgProfile>
                )}
              </div>

              {dropdownOpen && (
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <h2 className="text-center my-2 font-semibold">
                    {users?.displayName ? users?.displayName : "Profile"}
                  </h2>
                  <li>
                    <Link to={"/myaddeditem"}>My added food items</Link>
                  </li>
                  <li>
                    <Link to={"/addfooditem"}>Add a food item</Link>
                  </li>
                  <li>
                    <Link to={"/bookings"}>My ordered food items</Link>
                  </li>
                  {users && (
                    <li className="mr-3">
                      <button onClick={handleLogOut}>LogOut</button>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </>
        ) : (
          <CgProfile />
        )}
      </div>
    </div>
  );
}
export default Header;
