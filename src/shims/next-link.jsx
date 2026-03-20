import React from "react";

const Link = React.forwardRef(({ href, children, className, style, onClick, ...rest }, ref) => {
  return (
    <a href={href} className={className} style={style} onClick={onClick} ref={ref} {...rest}>
      {children}
    </a>
  );
});

Link.displayName = "Link";
export default Link;
