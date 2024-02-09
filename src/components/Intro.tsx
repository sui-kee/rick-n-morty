import Link from "./link";

function Intro() {
  return (
    <main className="w-[100vw] h-[100vh] flex gap-4 justify-center flex-col items-center">
      <h1 className=" text-[60px] text-black">
        Welcome to rick and morty graph
      </h1>
      <Link
        className=" hover:bg-black rounded-md p-3 px-4 bg-slate-800 text-white text-xl"
        href="/characters"
        text="Characters"
      />
    </main>
  );
}

export default Intro;
