import styles from "./page.module.css";
import ClientComponent from "../components/client-component";
import ServerComponent from "../components/server-component";

export default function Home() {
  console.log("컴포넌트 실행");

  return (
    <div className={styles.page}>
      Index page
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
