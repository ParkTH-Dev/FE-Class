import { ReactNode } from "react";
import SearchBar from "./searchBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SearchBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
