"use client";
import React, { use } from "react";
import { auth } from "../../lib/firebase/clientApp";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
const SignOutButton = () => {
  const router = useRouter();
  const handleSinOut = async () => {
    await signOut(auth);
    router.push('/');
  };
  return <button onClick={handleSinOut}>Sign Out</button>;
};
export default SignOutButton;
