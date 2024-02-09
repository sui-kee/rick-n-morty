import React from "react";

function BodyWarper({
  heading,
  children = null,
}: {
  heading: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="flex justify-start flex-col">
      <header className=" text-2xl font-mono p-5">{heading}</header>
      {children}
    </section>
  );
}

export default BodyWarper;
