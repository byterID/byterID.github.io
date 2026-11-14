type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  download?: boolean;
};

function linkProps({ href, external, download }: Omit<LinkButtonProps, "children">) {
  return {
    href,
    download: download || undefined,
    ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };
}

/** Main button: dark gradient that slides across (animate-shimmer). */
export function ShimmerButton({ children, ...props }: LinkButtonProps) {
  return (
    <a
      {...linkProps(props)}
      className="bg-shimmer animate-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-md border border-dark-700 px-6 font-medium text-stone-200 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

/** Secondary button: flat card color, same size as the shimmer button. */
export function SecondaryButton({ children, ...props }: LinkButtonProps) {
  return (
    <a
      {...linkProps(props)}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-dark-700 bg-dark-200 px-6 font-medium text-stone-200 transition-colors duration-200 hover:bg-dark-300"
    >
      {children}
    </a>
  );
}

/** Inline text link with an icon, e.g. "Download CV", "All projects". */
export function TextLink({
  children,
  accent = false,
  ...props
}: LinkButtonProps & { accent?: boolean }) {
  return (
    <a
      {...linkProps(props)}
      className={
        accent
          ? "inline-flex items-center gap-2 font-medium text-blue-500 transition-colors hover:text-blue-400"
          : "inline-flex items-center gap-2 font-medium text-stone-200/70 transition-colors hover:text-stone-200"
      }
    >
      {children}
    </a>
  );
}
