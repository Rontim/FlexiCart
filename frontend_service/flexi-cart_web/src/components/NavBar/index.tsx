import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logoutUser } from "../../redux/services/userSlice";
import profile_image from "../../assets/profile_pic.png";
import SearchBar from "../Home/SearchBar";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Button, DarkThemeToggle, Dropdown } from "flowbite-react";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const accountDropdown = () => (
    <button
      type="button"
      className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium dark:text-white    rounded-lg focus:ring-0 focus:outline-none "
    >
      {authenticated ? (
        <Avatar alt="User settings" img={profile_image} rounded />
      ) : (
        <svg
          className="w-[32px] h-[32px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2.6"
            d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      )}
      Account
    </button>
  );

  const servicesDropdown = () => (
    <button
      type="button"
      className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-primary  rounded-lg focus:ring-0 focus:outline-none "
    >
      <svg
        className="w-[28px] h-[28px] text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.6"
          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"
        />
      </svg>
      Shop
    </button>
  );

  const dispatch = useAppDispatch();

  const { authenticated, user } = useAppSelector((state) => state.user);

  const logout = () => {
    dispatch(logoutUser());
    window.location.reload;
  };

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center px-10 py-2 ${
        sticky
          ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <NavLink to="/" className="-m-1.5 p-1.5 ps-5">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FlexiCart
              </span>
            </NavLink>
          </div>

          <div className="hidden md:block w-1/2">
            <SearchBar />
          </div>

          <div className="hidden max-[1023px]:block">
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="block rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[7px] rotate-45" : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0 " : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[-8px] -rotate-45" : " "
                }`}
              />
            </button>
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:space-x-12">
                <li>
                  <Dropdown inline label={accountDropdown()}>
                    {authenticated && (
                      <Dropdown.Header>
                        <span className="block text-sm">{`${user.first_name} ${user.last_name}`}</span>
                        <span className="block truncate text-sm font-medium">
                          {user.email}
                        </span>
                      </Dropdown.Header>
                    )}
                    {!authenticated && (
                      <Dropdown.Header>
                        <span className="block text-sm">Hello, there</span>
                        <span className="block truncate text-sm font-medium">
                          Welcome to FlexiCart
                        </span>
                      </Dropdown.Header>
                    )}
                    {!authenticated && (
                      <Dropdown.Item>
                        <NavLink
                          to="/auth/login"
                          className="flex text-base lg:mr-0 lg:inline-flex"
                        >
                          Sign in
                        </NavLink>
                      </Dropdown.Item>
                    )}
                    {!authenticated && (
                      <Dropdown.Item>
                        <NavLink
                          to="/auth/register"
                          className="flex  text-base lg:mr-0 lg:inline-flex "
                        >
                          Sign up
                        </NavLink>
                      </Dropdown.Item>
                    )}
                    {authenticated && (
                      <Dropdown.Item>
                        <NavLink to="/user/profile">Profile</NavLink>
                      </Dropdown.Item>
                    )}
                    {authenticated && (
                      <Dropdown.Item>
                        <Button
                          className="w-full"
                          size="sm"
                          onClick={() => logout()}
                        >
                          Sign out
                        </Button>
                      </Dropdown.Item>
                    )}
                  </Dropdown>
                </li>
                <li>
                  <Dropdown label={servicesDropdown()} size="sm">
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                  </Dropdown>
                </li>
              </ul>
            </nav>
          </div>

          <div className="hidden min-[1023px]:flex items-center space-x-3 justify-end pr-16 lg:pr-0">
            <Dropdown inline label={accountDropdown()} arrowIcon={false}>
              {authenticated && (
                <Dropdown.Header>
                  <span className="block text-sm">{`${user.first_name} ${user.last_name}`}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
              )}
              {!authenticated && (
                <Dropdown.Header>
                  <span className="block text-sm">Hello, there</span>
                  <span className="block truncate text-sm font-medium">
                    Welcome to FlexiCart
                  </span>
                </Dropdown.Header>
              )}
              {!authenticated && (
                <Dropdown.Item>
                  <NavLink
                    to="/auth/login"
                    className="flex text-base lg:mr-0 lg:inline-flex"
                  >
                    Sign in
                  </NavLink>
                </Dropdown.Item>
              )}
              {!authenticated && (
                <Dropdown.Item>
                  <NavLink
                    to="/auth/register"
                    className="flex  text-base lg:mr-0 lg:inline-flex "
                  >
                    Sign up
                  </NavLink>
                </Dropdown.Item>
              )}
              {authenticated && (
                <Dropdown.Item>
                  <NavLink to="/user/profile">Profile</NavLink>
                </Dropdown.Item>
              )}
              {authenticated && (
                <Dropdown.Item>
                  <Button className="w-full" size="sm" onClick={() => logout()}>
                    Sign out
                  </Button>
                </Dropdown.Item>
              )}
            </Dropdown>
            <Dropdown label={servicesDropdown()} inline arrowIcon={false}>
              <Dropdown.Item>Cart </Dropdown.Item>
              <Dropdown.Item>Orders </Dropdown.Item>
              <Dropdown.Item>Wishlist </Dropdown.Item>
              <Dropdown.Item>Settings </Dropdown.Item>
            </Dropdown>
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
