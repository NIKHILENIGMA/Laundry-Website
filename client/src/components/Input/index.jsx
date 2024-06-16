import React from "react";
import PropTypes from "prop-types";

const shapes = { 
    round: "rounded-[5px]", 
    circle: "rounded-[50%]" 
};

const variants = {
  fill: {
    
  },
  outline: {},
};

const sizes = {
  xs: "p-[21px] sm:px-5",
  sm: "pb-[25px] pl-[23px] pr-[25px] pt-[26px] sm:px-5",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      size = "xs",
      variant = "outline",
      color = "",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };
    return (
      <>
        <div
          className={`${(shape && shapes[shape]) || ""} ${
            (variant && variants[variant]?.[color]) || ""
          } ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["", ""]),
};

export { Input };
