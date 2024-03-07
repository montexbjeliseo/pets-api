'use client';

import React, { useEffect, useState } from "react";
import Formularioregistro from "@/components/formularioregistro";
import { ReduxProvider } from "@/providers/redux-provider";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signUp } from "@/services/actions/sign-up";
import { MessageAlert } from "@/components/MessageAlert";
import { Loader } from "@/components/Loader";

const Page = () => {

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    event.preventDefault();

    const payload = Object.fromEntries(new FormData(event.target));

    try {
      const response = await signUp(payload);

      if (response.ok || response.status == 201) {
        setSuccess(true);
        setLoading(false);
      } else {
        const data = await response.json();
        setError(data.message);
        setLoading(false);
      }
    } catch (error) {
      setError(error.toString());
      setLoading(false);
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
      {loading && <Loader />}
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