'use client';

import React, { useEffect, useState } from "react";
import Formularioingreso from "@/components/formularioingreso";
import { useRouter } from "next/navigation";
import { signIn } from "@/services/actions/sign-in";
import { ReduxProvider } from "@/providers/redux-provider";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "@/slices/authSlice";

const Page = () => {

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = Object.fromEntries(new FormData(event.target));

    const response = await signIn(payload);

    if (response.status === 200) {

      const data = await response.json();

      dispatch(setToken(data.token));

      router.push("/");
    } else {
      setError("Credenciales incorrectas");
    }
  }

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <Formularioingreso handleSubmit={handleSubmit} />
    </div>
  );
};

export default function () {
  return (
    <ReduxProvider>
      <Page />
    </ReduxProvider>
  );
}