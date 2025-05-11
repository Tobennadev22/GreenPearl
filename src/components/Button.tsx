import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  onClick,
}: ButtonProps) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out rounded-full",

    // Variants
    variant === "primary" &&
      "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
    variant === "secondary" &&
      "bg-neutral-100 text-black hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
    variant === "outline" &&
      "border border-neutral-200 hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-600",
    variant === "ghost" && "hover:bg-neutral-100 dark:hover:bg-neutral-800",

    // Sizes
    size === "sm" && "text-xs px-3 py-2",
    size === "md" && "text-sm px-5 py-2.5",
    size === "lg" && "text-base px-6 py-3",

    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={baseStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
