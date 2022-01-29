const Button = {
  baseStyle: {
    borderRadius: '10px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    _focus: {
      boxShadow: 'none',
    },
  },
  variants: {
    blue: {
      bg: '#3182CE',
    },
    red: {
      bg: '#E53E3E',
    },
    green: {
      bg: '#38A169',
    },
    pink: {
      bg: "#885809",
    },

    gradient: {
      bg: 'linear-gradient(88.21deg, #F72A80 9.41%, rgba(173, 11, 230, 0.5) 120.3%);',
      textTransform: 'uppercase',
    },

    transparent: {
      fontWeight: "bold",
      height: "unset",
      color: "#000",
    },
  },
  sizes: {
    sm: { fontSize: "0.875rem", height: "30px" },
    md: { height: "50px", fontSize: "1rem" },
    lg: {height: "35px", fontSize: "18px"},
    xl: {height: "40px", fontSize: "16px", width:"220px"},
  },
  defaultProps: {
    size: 'md',
    variant: 'transparent',
  },
};

export default Button;
