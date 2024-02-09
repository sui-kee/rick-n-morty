import React from "react";
import NavBar from "../components/navBar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" w-[100vw] h-[100vh] relative flex justify-start flex-col">
      <NavBar />
      {children}
    </main>
  );
}

export default MainLayout;
