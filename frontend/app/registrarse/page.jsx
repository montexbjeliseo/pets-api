'use client';

import React, { useEffect, useState } from "react";
import Formularioregistro from "@/components/formularioregistro";
import { ReduxProvider } from "@/providers/redux-provider";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signUp } from "@/services/actions/sign-up";

const Page = () => {

  const [message, setMessage] = useState(null);

  const [error, setError] = useState(null);

  const token = useSelector((state) => state.auth.token);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = Object.fromEntries(new FormData(event.target));

    try {
      const response = await signUp(payload);

      if (response.ok || response.status === 201) {
        setMessage("Cuenta creada! Inicia sesión para acceder");
      } else {
        const data = await response.json();
        setError("Ocurrió un error al registrar: " + data.message);
      }
    } catch (error) {
      setError("Error de red");
    }

  }

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <div className="text-green-500">{message}</div>
      <div className="text-red-500">{error}</div>
      <Formularioregistro handleSubmit={handleSubmit} />
    </div>
  );
};

export default function () {
  return (
    <ReduxProvider>
      <Page />
    </ReduxProvider>
  )
};