import React from "react";

export function GradientHeading({
  variant = "default",
  size = "default",
  weight = "bold",
  className = "",
  children,
  ...props
}) {
  const variantStyles = {
    default: "bg-gradient-to-r from-slate-100 via-[#00E5FF] to-white",
    secondary: "bg-gradient-to-r from-[#00E5FF] via-sky-400 to-[#F2A623]",
    cyan: "bg-gradient-to-r from-[#00E5FF] to-sky-500",
  };

  const sizeStyles = {
    default: "text-2xl sm:text-3xl lg:text-4xl",
    sm: "text-xl sm:text-2xl lg:text-3xl",
    lg: "text-3xl sm:text-4xl lg:text-5xl",
    xl: "text-4xl sm:text-5xl lg:text-6xl",
  };

  const weightStyles = {
    bold: "font-bold",
    extrabold: "font-extrabold",
    semibold: "font-semibold",
  };

  return (
    <h3
      className={`tracking-tight pb-2 bg-clip-text text-transparent ${variantStyles[variant] || variantStyles.default} ${sizeStyles[size] || sizeStyles.default} ${weightStyles[weight] || weightStyles.bold} ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}
