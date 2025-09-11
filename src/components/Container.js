import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-4 md:px-8 lg:px-5 ${className}`}>
      {children}
    </div>
  );
}
