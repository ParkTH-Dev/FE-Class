import React, { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <div>{new Date().toLocaleString()}</div>44 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
