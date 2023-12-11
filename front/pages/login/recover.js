import Image from "next/image";
import Link from "next/link";
import LoginWrapper from "../../components/layouts/LoginWrapper";
import Styles from "../../styles/Login.module.css";
const Signup = () => {
  return (
    <LoginWrapper>
      <section className={Styles.form}>
        <Image src="/next.svg" alt="Next Logo" width={100} height={24} />
        <div className={Styles.formContainer}>
          <h1>Récupérer votre mot de passe</h1>
          <p>
            <b>Saisissez l'adresse électronique</b> que vous avez utilisée lors
            de votre inscription pour récupérer votre mot de passe. Vous
            recevrez un lien de <b>réinitialisation du mot de passe.</b>
          </p>
          <form>
            <input type="email" id="email" placeholder="Email" required></input>
          </form>
          <button>réinitialiser</button>
        </div>
        <div className={Styles.footer}>
          <p>
            Vous avez un compte ?<Link href="/login"> Se connecter</Link>
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

export default Signup;
