import { ReactNode } from "react";
import SearchBar from "../components/searchBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SearchBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
