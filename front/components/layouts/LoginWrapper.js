import Image from "next/image";
import styles from "../../styles/Login.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
      <div className={styles.background}>
        {/*Random images from https://picsum.photos/*/}
        <Image src="/next.svg" alt="Vercel Logo" width={200} height={48} />
      </div>
    </div>
  );
};

export default Layout;
