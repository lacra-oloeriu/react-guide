import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  //const events = useLoaderData();
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
