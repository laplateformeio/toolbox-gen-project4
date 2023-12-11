import Image from "next/image";
import Link from "next/link";
import LoginWrapper from "../../components/layouts/LoginWrapper";
import Styles from "../../styles/Login.module.css";
import useUser from "../../hooks/useUser";
import Toast from "../../components/layouts/Toast";
const Signup = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isRevealPwd,
    setIsRevealPwd,
    isRevealCPwd,
    setIsRevealCPwd,
    message,
    messageColor,
    handleCreateUser,
  } = useUser();

  return (
    <LoginWrapper>
      <section className={Styles.form}>
        <Image src="/next.svg" alt="Next Logo" width={100} height={24} />
        <div className={Styles.formContainer}>
          <h1>S'inscrire</h1>
          <form>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <br />
            <span>
              <input
                type={isRevealPwd ? "text" : "password"}
                id="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <Image
                className={Styles.eye}
                alt="afficher/cacher le mot de passe"
                src={isRevealPwd ? "/eye-off.svg" : "/eye.svg"}
                onClick={() => setIsRevealPwd(!isRevealPwd)}
                width={16}
                height={16}
              />
            </span>
            <span>
              <input
                type={isRevealCPwd ? "text" : "password"}
                id="c_password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></input>
              <Image
                className={Styles.eye}
                alt="afficher/cacher le mot de passe"
                src={isRevealCPwd ? "/eye-off.svg" : "/eye.svg"}
                onClick={() => setIsRevealCPwd(!isRevealCPwd)}
                width={16}
                height={16}
              />
            </span>
          </form>
          <button onClick={() => handleCreateUser()}>s’inscrire</button>
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
            Mot de passe oublié ?<Link href="/login/recover"> Réinitialiser</Link>
          </p>
          <p>
            Vous avez un compte ?<Link href="/login"> Se connecter</Link>
          </p>
        </div>
      </section>
    </LoginWrapper>
  );
};

export default Signup;
