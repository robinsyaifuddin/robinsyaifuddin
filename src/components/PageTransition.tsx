"use client";

import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return <div className="relative w-full">{children}</div>;
};

export default PageTransition;
