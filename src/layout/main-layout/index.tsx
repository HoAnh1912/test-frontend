import React from "react";
import { MainLayoutWrapper } from "./styled";

interface MainlayoutProps {
  children: React.ReactNode;
}

const Mainlayout = ({ children }: MainlayoutProps) => {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
};

export default Mainlayout;
