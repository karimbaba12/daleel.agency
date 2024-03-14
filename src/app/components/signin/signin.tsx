"use client";
import { auth } from "../../lib/firebase/clientApp";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
const SignInComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let email = e.currentTarget.email.value;
    let password = e.currentTarget.password.value;
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleSignUp = () => {
    let email = document.getElementsByName("email")[0] as HTMLInputElement;
    let password = document.getElementsByName(
      "password"
    )[0] as HTMLInputElement;
    setLoading(true);

    //   createUserWithEmailAndPassword(auth, email.value, password.value)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       console.log(user);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log(errorCode, errorMessage);
    //       setLoading(false);
    //     });

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSignIn}
        className="grid grid-cols-1 gap-2 w-[250px] min-w-fit items-center justify-content"
      >
        <h1 className="text-center">Sign In</h1>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit" className="bg-blue-500 rounded-md text-white">
          Login
        </button>

        <button
          type="button"
          className="bg-yellow-500 rounded-md text-white"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p>{loading ? "Signing in..." : ""}</p>

        <button>Sign out</button>
      </form>
    </div>
  );
};
export default SignInComponent;
