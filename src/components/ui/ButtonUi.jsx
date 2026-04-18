import cn from "@/utils/cn";


export default function ButtonUi({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center tracking-[0.2em] leading-none transition-all duration-300";

  const sizes = {
    sm: "px-4 py-2 text-[0.65rem] md:text-[0.7rem]",
    md: "px-7 py-3 text-[0.75rem] md:text-[0.85rem]",
    lg: "px-10 py-4 text-[0.9rem] md:text-[1rem]",
  };

  const variants = {
    primary: `
      bg-[var(--color-bg-soft)]
      text-[var(--color-primary-light)]
      border border-[var(--color-primary)/30]
      hover:bg-[var(--color-bg-soft)]
      hover:-translate-y-1
      hover:shadow-[0_10px_30px_rgba(196,149,106,0.25)]
    `,

    rose: `
      bg-[var(--color-primary)]
      text-[var(--color-text-light)]
      hover:bg-[var(--color-primary-dark)]
      hover:-translate-y-1
      hover:shadow-[0_10px_30px_rgba(196,149,106,0.35)]
    `,

    outline: `
      border border-[var(--color-primary)/40]
      text-[var(--color-primary)]
      bg-transparent
      hover:bg-[var(--color-bg-soft)]
      hover:text-[var(--color-primary-light)]
      hover:border-[var(--color-primary)]
    `,

    ghost: `
      px-0 py-1
      text-[var(--color-primary)]
      border-b border-[var(--color-primary)/40]
      hover:text-[var(--color-primary-dark)]
    `,

    ghostBd: `
      relative px-0 py-1
      text-[var(--color-primary)]

      after:absolute
      after:left-0
      after:bottom-0
      after:h-[1px]
      after:w-0
      after:bg-[var(--color-primary)]
      after:transition-all
      after:duration-300

      hover:after:w-full
      hover:text-[var(--color-primary-dark)]
    `,

    gold: `
      bg-[var(--color-primary)]
      text-white
      hover:shadow-[0_10px_30px_rgba(196,149,106,0.4)]
      hover:-translate-y-1
    `,

    pill: `
      relative overflow-hidden
      tracking-[0.15em]
      text-[var(--color-text-light)]
      rounded-full

      bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-dark))]

      before:absolute
      before:inset-0
      before:rounded-full
      before:bg-[linear-gradient(135deg,var(--color-primary-light),transparent)]
      before:opacity-0
      before:transition-opacity
      before:duration-300

      hover:before:opacity-20

      shadow-[0_8px_30px_rgba(196,149,106,0.25)]
      transition-all duration-300 ease-in-out

      hover:-translate-y-[3px]
      hover:shadow-[0_15px_50px_rgba(196,149,106,0.5)]
    `,
  };

  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {/* Fix layering + multilingual */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}