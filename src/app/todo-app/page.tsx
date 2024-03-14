import React from "react";
import AddToDOComponent from "./components/AddToDo";
import SignOutButton from "../components/signout/signout";
const ToDOAppComponent = () => {
  return (
    <div className="flex flex-col pt-12">
      <SignOutButton />
      <h1 className="text-center">Welcom to my TODO App</h1>
      <AddToDOComponent />
    </div>
  );
};

export default ToDOAppComponent;
