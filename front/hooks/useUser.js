import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { actions } from "../services/userService";

const useUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealCPwd, setIsRevealCPwd] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const router = useRouter();

  // La fonction pour connecter un utilisateur
  async function handleLogin() {
    const user = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });
    if (user.ok) {
      router.push("/");
    } else {
      setMessage("Votre identifiant ou votre mot de passe sont incorrects");
      setMessageColor("red");
    }
  }
  // La fonction pour créer un utilisateur
  async function handleCreateUser() {
    await actions
      .createUser({
        username,
        email,
        password,
        role: "1",
      })
      .then((response) => {
        // si le user est créé, le connecter automatiquement
        if (response?.data) handleLogin();
        if (response?.error) {
          if (Object.keys(response.error.details).length) {
            setMessage(response.error.details.errors[0].message);
          } else {
            setMessage(response.error.message);
          }
          setMessageColor("red");
        }
      });
    // }
  }

  return {
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
    handleLogin,
    handleCreateUser,
  };
};

export default useUser;
