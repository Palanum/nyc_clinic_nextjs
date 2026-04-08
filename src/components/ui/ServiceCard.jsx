"use client";

import { forwardRef, Children, cloneElement, isValidElement } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── cn utility ───────────────────────────────────────────────────────────────
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ─── Variant / Size class maps ────────────────────────────────────────────────

const variantStyles = {
  default:
    "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.1)]",
  accent:
    "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.1)] border-t-[3px] border-t-primary",
  dark: "bg-bg-soft shadow-[0_2px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.25)]",
  outline:
    "bg-transparent border border-cream-dark shadow-none hover:border-primary hover:shadow-[0_12px_40px_rgba(196,149,106,0.1)]",
};

const sizeMap = {
  sm: {
    imgH: "h-40",
    bodyPad: "p-5",
    titleText: "text-[17px]",
    descText: "text-xs",
  },
  default: {
    imgH: "h-[220px]",
    bodyPad: "p-7",
    titleText: "text-xl",
    descText: "text-[13px]",
  },
  lg: {
    imgH: "h-[280px]",
    bodyPad: "p-9",
    titleText: "text-2xl",
    descText: "text-[13px]",
  },
};

const imageVariantBg = {
  default: "bg-bg-soft",
  alt1: "bg-navy-light",
  alt2: "bg-linear-to-br from-bg-main to-navy-light",
  alt3: "bg-linear-to-br from-bg-soft to-[#2a2f4d]",
  alt4: "bg-linear-to-b from-bg-main to-bg-soft",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceCardImage({
  src,
  alt,
  icon,
  className,
  imageVariant = "default",
  size = "default",
  children,
}) {
  const bg = imageVariantBg[imageVariant] || imageVariantBg.default;
  const h = sizeMap[size]?.imgH || sizeMap.default.imgH;

  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center shrink-0",
        bg,
        h,
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/15 to-transparent pointer-events-none" />

      {src ? (
        <Image
          src={src}
          alt={alt || ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      ) : icon ? (
        <span className="font-display text-[56px] text-primary opacity-15 relative z-[1] leading-none">
          {icon}
        </span>
      ) : null}

      {children}
    </div>
  );
}

function ServiceCardBody({ children, className, size = "default" }) {
  const pad = sizeMap[size]?.bodyPad || sizeMap.default.bodyPad;
  return (
    <div className={cn("flex flex-col grow", pad, className)}>{children}</div>
  );
}

function ServiceCardCategory({ children, className }) {
  return (
    <div
      className={cn(
        "font-sans text-[9px] font-semibold tracking-[3px] uppercase text-primary mb-2.5 leading-none",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ServiceCardTitle({ children, thTitle, className, size = "default" }) {
  const titleSize = sizeMap[size]?.titleText || sizeMap.default.titleText;

  return (
    <div className={cn("mb-2.5", className)}>
      <h3
        className={cn(
          "font-display font-normal text-[var(--nyc-card-title-color)] mb-1 leading-tight",
          titleSize,
        )}
      >
        {children}
      </h3>
      {thTitle && (
        <p className="font-thai-display text-sm font-light text-[var(--nyc-card-title-color)] opacity-50 m-0 leading-snug">
          {thTitle}
        </p>
      )}
    </div>
  );
}

function ServiceCardDescription({ children, className, size = "default" }) {
  const descSize = sizeMap[size]?.descText || sizeMap.default.descText;

  return (
    <p
      className={cn(
        "font-sans font-light text-text-muted leading-relaxed mb-5 grow",
        descSize,
        className,
      )}
    >
      {children}
    </p>
  );
}

function ServiceCardLink({
  href = "#",
  children = "Explore →",
  className,
  onClick,
  _parentIsLink = false,
}) {
  const classes = cn(
    "self-start font-sans text-[10px] font-medium tracking-[3px] uppercase",
    "text-[var(--nyc-card-link-color)] border-b border-[var(--nyc-card-link-color)]",
    "pb-1 cursor-pointer transition-colors duration-300",
    "hover:text-primary-dark hover:border-primary-dark",
    "bg-transparent no-underline",
    className,
  );

  // When parent ServiceCard is already an <a>, render as <span> to avoid nested <a>
  if (_parentIsLink) {
    return <span className={classes}>{children}</span>;
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function ServiceCardBadge({ children = "SIGNATURE", className }) {
  return (
    <span
      className={cn(
        "absolute top-3 right-3 z-[2]",
        "font-sans text-[8px] font-semibold tracking-[2px] uppercase",
        "text-text-light bg-linear-to-br from-primary to-primary-dark",
        "px-3 py-[5px] leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}

// ─── Helper: inject props into sub-components ────────────────────────────────

function injectChildProps(children, size, parentIsLink) {
  if (!children) return children;
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    // ServiceCardBody: inject size AND recurse into its children
    if (child.type === ServiceCardBody) {
      return cloneElement(child, {
        size,
        children: injectChildProps(child.props.children, size, parentIsLink),
      });
    }

    // Inject size into size-aware sub-components
    if (
      [ServiceCardImage, ServiceCardTitle, ServiceCardDescription].includes(
        child.type,
      )
    ) {
      return cloneElement(child, { size });
    }

    // Inject _parentIsLink into ServiceCardLink so it renders as <span> not <a>
    if (child.type === ServiceCardLink) {
      return cloneElement(child, { _parentIsLink: parentIsLink });
    }

    return child;
  });
}

// ─── Main component ───────────────────────────────────────────────────────────

const ServiceCard = forwardRef(function ServiceCard(
  {
    variant = "default",
    size = "default",
    badge,
    className,
    href,
    onClick,
    children,
    ...props
  },
  ref,
) {
  const isDark = variant === "dark";

  const baseClasses = cn(
    "relative overflow-hidden flex flex-col cursor-pointer",
    "transition-all duration-400 ease-[cubic-bezier(0.25,0,0,1)]",
    "hover:-translate-y-2",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
    "text-inherit no-underline",
    variantStyles[variant] || variantStyles.default,
    className,
  );

  const style = {
    "--nyc-card-title-color": isDark
      ? "var(--color-primary-light)"
      : "var(--color-navy)",
    "--nyc-card-link-color": isDark
      ? "var(--color-primary-light)"
      : "var(--color-primary)",
  };

  const parentIsLink = !!href;

  const content = (
    <>
      {badge && <ServiceCardBadge>{badge}</ServiceCardBadge>}
      {injectChildProps(children, size, parentIsLink)}
    </>
  );

  if (href) {
    return (
      <Link
        ref={ref}
        href={href}
        className={baseClasses}
        style={style}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        onClick={onClick}
        className={baseClasses}
        style={style}
        {...props}
      >
        {content}
      </div>
    );
  }

  return (
    <div ref={ref} className={baseClasses} style={style} {...props}>
      {content}
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

// ─── Attach sub-components ────────────────────────────────────────────────────

ServiceCard.Image = ServiceCardImage;
ServiceCard.Body = ServiceCardBody;
ServiceCard.Category = ServiceCardCategory;
ServiceCard.Title = ServiceCardTitle;
ServiceCard.Description = ServiceCardDescription;
ServiceCard.Link = ServiceCardLink;
ServiceCard.Badge = ServiceCardBadge;

export {
  ServiceCard,
  ServiceCardImage,
  ServiceCardBody,
  ServiceCardCategory,
  ServiceCardTitle,
  ServiceCardDescription,
  ServiceCardLink,
  ServiceCardBadge,
};

export default ServiceCard;
