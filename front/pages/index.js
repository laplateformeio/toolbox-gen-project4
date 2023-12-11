import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  let button;

  console.log("session", session);
  if (session) {
    button = (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  } else {
    button = (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <h1 className="flex justify-center items-center p-5 text-green-500 text-lg font-bold">
      This Is The Home Page! Everyone can see it.
      {button}
    </h1>
  );
};

export default Home;
