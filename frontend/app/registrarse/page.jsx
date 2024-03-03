'use client';

import React, { useEffect, useState } from "react";
import Formularioregistro from "@/components/formularioregistro";
import { ReduxProvider } from "@/providers/redux-provider";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signUp } from "@/services/actions/sign-up";
import { MessageAlert } from "@/components/MessageAlert";

const Page = () => {

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(null);

  const token = useSelector((state) => state.auth.token);

  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    setError(null);
    setSuccess(false);
    event.preventDefault();

    const payload = Object.fromEntries(new FormData(event.target));

    try {
      const response = await signUp(payload);

      if (response.ok || response.status == 201) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError(error.toString());
    }

  }

  const goLogin = () => {
    router.push("/ingreso");
    setSuccess(false);
  }

  return (
    <div>
      <Formularioregistro handleSubmit={handleSubmit} />
      {success && (
        <MessageAlert
          message={<span className="text-green-500">Cuenta creada, se redirigirá al login</span>}
          title="Cuenta creada"
          handleClose={goLogin}
        />
      )}
      {error && (
        <MessageAlert
          message={error}
          title="Error"
          handleClose={() => setError(null)} />
      )}
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