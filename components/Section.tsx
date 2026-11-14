/** Page container from the reference: max-w-7xl, px-5 sm:px-10. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-10 ${className}`}>{children}</div>;
}

/** Section heading size from the reference: text-3xl, 430px+ 4xl, md+ 5xl. */
export const headingClass = "text-3xl font-bold xs:text-4xl md:text-5xl";

export const mutedClass = "text-stone-200/70";
