import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebaseConfig";
import { toast } from "react-toastify";
export const Signup = () => {
  const auth = getAuth(app);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    // await onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log("User signed in:", user);
    //     toast.success("Sign Up successfully");
    //   } else {
    //     toast.error("User signed out");
    //     console.log("User signed out");
    //   }
    // });
  };
  return (
    <div className="text-xl w-full h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center px-5 py-5 gap-4 w-[50%] lg:w-[30%] border border-black">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Username"
            onChange={handleChange}
            name="email"
            value={formData.email}
            className="border border-black px-2 py-1 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            className="border border-black px-2 py-1 rounded-lg"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full border bg-blue-500 text-white p-2 rounded-lg cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
