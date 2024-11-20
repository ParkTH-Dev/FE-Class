"use client";
import { ReactNode } from "react";

const ClientComponent = ({ children }: { children: ReactNode }) => {
  console.log("client component");
  return <div>{children}</div>;
};

export default ClientComponent;
