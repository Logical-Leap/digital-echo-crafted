import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = React.forwardRef(({ href, children, className, style, onClick, ...rest }, ref) => {
  return (
    <RouterLink to={href || "/"} className={className} style={style} onClick={onClick} ref={ref} {...rest}>
      {children}
    </RouterLink>
  );
});

Link.displayName = "Link";
export default Link;
