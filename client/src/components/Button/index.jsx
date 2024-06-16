import React from "react";
import PropTypes from "prop-types";

const shapes = {
  rounded: "rounded-[5px]",
  circle: "rounded-[50%]",
};

const variants = {
  fill: {
    primary: "bg-primary-100",
  },
  outline: {},
};

const sizes = {
  xs: "p-[5px]",
  sm: "p-[9px]",
  md: "p-[13px]",
  lg: "pr-3.5 py-3.5",
  xl: "p-[18px]",
  "2xl": "pr-5 py-5",
  "3xl": "p-[21px] sm:px-5",
};

function Button({
  size,
  shape = "",
  variant = "fill",
  color,
  leftIcon,
  rightIcon,
  className,
  children,
}) {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      } ${(size && sizes[size]) || ""}`}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
}

Button.prototypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  shape: PropTypes.oneOf(["rounded", "circle"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "accent"
  ]),
};

export { Button }