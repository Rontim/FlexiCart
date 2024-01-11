import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logoutUser } from "../../redux/services/userSlice";
import { NavLink } from "react-router-dom";
import profile_image from "../../assets/profile_pic.png";

function NavBar() {
  const dispatch = useAppDispatch();

  const { authenticated, user } = useAppSelector((state) => state.user);

  const logout = () => {
    dispatch(logoutUser());
    window.location.reload;
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FlexiCart
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        {!authenticated && <Navbar.Link href="/auth/login">Login</Navbar.Link>}
        {!authenticated && (
          <Navbar.Link href="/auth/register">Register</Navbar.Link>
        )}
        {authenticated && <Navbar.Link href="/cart">Cart</Navbar.Link>}
        {authenticated && <Navbar.Link href="/orders">Orders</Navbar.Link>}
      </Navbar.Collapse>

      <div className="flex md:order-2 space-x-3 space-y-3">
        {authenticated && (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={profile_image} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{`${user.first_name} ${user.last_name}`}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <NavLink to="/profile">Profile</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/settings">Settings</NavLink>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown>
        )}
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default NavBar;
