import Link from "next/link";
import Image from "next/image";
import LoginWrapper from "../../components/layouts/LoginWrapper";
import Toast from "../../components/layouts/Toast";
import Styles from "../../styles/Login.module.css";
import useUser from "../../hooks/useUser";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isRevealPwd,
    setIsRevealPwd,
    handleLogin,
    message,
    messageColor,
  } = useUser();

  return (
    <LoginWrapper>
      <section className={Styles.form}>
        <Image
          className={Styles.logo}
          src="/next.svg"
          alt="Next Logo"
          width={100}
          height={24}
        />
        <div className={Styles.formContainer}>
          <h1>Se connecter</h1>
          <form>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="Entrez votre email"
              required
            ></input>
            <br />
            <span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={isRevealPwd ? "text" : "password"}
                id="password"
                placeholder="Mot de passe"
                required
              ></input>
              <Image
                alt="afficher/cacher le mot de passe"
                className={Styles.eye}
                src={isRevealPwd ? "/eye-off.svg" : "/eye.svg"}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
                width={16}
                height={16}
              />
            </span>
          </form>
          <button onClick={() => handleLogin()}>se connecter</button>
        </div>
        <div className={Styles.toastContainer}>
          {message && (
            <div className={Styles.toastShadow}>
              <Toast message={message} messageColor={messageColor} />
            </div>
          )}
        </div>
        <div className={Styles.footer}>
          <p>
            Mot de passe oublié ?
            <Link href="/login/recover"> Réinitialiser</Link>
          </p>
          <p>
            Vous n’avez pas de compte ?
            <Link href="/login/signup"> S’inscrire</Link>
          </p>
        </div>
      </section>
    </LoginWrapper>
  );
};

export default Login;
