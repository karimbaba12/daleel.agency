"use client";
import React from "react";
import SignInComponent from "../components/signin/signin";
import useAuth from "../hooks/useAuth";
const ToDOAppLayoutComponent = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const isAuthanticated = useAuth();

  return isAuthanticated ? <div> {children}</div> : <SignInComponent />;
};

export default ToDOAppLayoutComponent;
