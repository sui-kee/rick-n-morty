import { useLocation } from "react-router-dom";
import Link from "./link";
import clsx from "clsx";

function NavBar() {
  const location = useLocation();
  console.log("location is :", location.pathname);

  return (
    <nav className=" bg-white sticky z-[10] top-0 left-0 text-xl w-full flex justify-start gap-4 items-center">
      <Link
        href="/"
        text="Intro"
        className={clsx(" capitalize py-3", {
          " border-b-4 border-red-500": location.pathname === "/home",
        })}
      />
      <Link
        href="/characters"
        text="characters"
        className={clsx(" capitalize py-3", {
          " border-b-4 border-red-500": location.pathname === "/characters",
        })}
      />
      {/* <Link
        href="/locations"
        text="locations"
        className={clsx(" capitalize py-3", {
          " border-b-4 border-red-500": location.pathname === "/locations",
        })}
      />
      <Link
        href="/episodes"
        text="episode"
        className={clsx(" capitalize py-3", {
          " border-b-4 border-red-500": location.pathname === "/episodes",
        })}
      /> */}
    </nav>
  );
}

export default NavBar;
