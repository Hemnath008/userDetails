import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <NavBar />
       <Outlet />
    </>
  );
}

export default MainLayout;
