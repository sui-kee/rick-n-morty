import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

function MyLink({
  href,
  text = "",
  children,
  className = "",
}: {
  href: string;
  className?: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      to={href}
      className={clsx(" text-center px-3 ", {
        [className]: className,
      })}
    >
      {text}
      {children}
    </Link>
  );
}

export default MyLink;
