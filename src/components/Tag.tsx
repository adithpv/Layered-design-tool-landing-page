import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex border border-[#FFFF00] gap-2 text-[#FFFF00] px-3 py-1 rounded-full uppercase items-center",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
