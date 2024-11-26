import React, { ReactNode } from "react";
import Searchbar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <div>{new Date().toLocaleString()}</div>44 */}
      <Searchbar />
      {children}
    </div>
  );
};

export default Layout;
