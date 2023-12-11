import Image from "next/image";
import Styles from "../../styles/Login.module.css";
const Toast = ({ message, messageColor }) => {
  return (
    <div className={Styles.toastSection}>
      <div
        className={Styles.leftSideColor}
        style={{ backgroundColor: messageColor }}
      ></div>
      <div
        className={Styles.ToastIcon}
        style={{ backgroundColor: messageColor }}
      >
        {/* <Image
          src="/alert-triangle.svg"
          alt="Alert icon"
          width={24}
          height={24}
        /> */}
        !
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
