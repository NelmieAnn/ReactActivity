import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Activity1</Link>
          </li>
          <li>
            <Link to="Activity2">Activity2</Link>
          </li>
          <li>
          <Link to="Activity3">Activity3</Link>
          </li>
          <li>
          <Link to="Activity4">Activity4</Link>
          </li>
          <li>
          <Link to="Activity5">Activity5</Link>
          </li>
          <li>
          <Link to="Activity6">Activity6</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;