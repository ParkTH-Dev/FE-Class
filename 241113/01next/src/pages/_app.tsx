import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
  };
  return (
    <>
      <header>
        <Link href={"/"}>Index</Link> <Link href={"/search"}>Search</Link>{" "}
        <Link href={"/book/1"}>Book</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
