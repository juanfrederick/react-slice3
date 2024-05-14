import React from "react";
import { memo } from "react";

const Span = ({ classname, children }) => {
  return <span className={classname}>{children}</span>;
};

export default memo(Span);
