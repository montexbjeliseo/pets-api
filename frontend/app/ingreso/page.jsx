'use client';

import React, { useEffect, useState } from "react";
import Formularioingreso from "@/components/formularioingreso";
import { useRouter } from "next/navigation";
import { signIn } from "@/services/actions/sign-in";
import { ReduxProvider } from "@/providers/redux-provider";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "@/slices/authSlice";
import { Loader } from "@/components/Loader";
import { MessageAlert } from "@/components/MessageAlert";

const Page = ({ searchParams }) => {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const router = useRouter();

  const nextPath = searchParams.next;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const payload = Object.fromEntries(new FormData(event.target));

    try {
      const response = await signIn(payload);

      if (response.status === 200) {

        const data = await response.json();

        dispatch(setToken(data.token));


        if (nextPath) {
          router.push(nextPath);
        } else {
          router.push("/");
        }

        setLoading(false);

      } else {
        setError("Credenciales incorrectas");
        setLoading(false);
      }
    } catch (error) {
      setError('Compruebe su conexion a internet');
      setLoading(false);
    }
    
  }

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);

  return (
    <div>
      <div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <Formularioingreso handleSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <MessageAlert message={error} title="Error" handleClose={() => setError(null)} />}
    </div>
  );
};

export default function (props) {
  return (
    <ReduxProvider>
      <Page {...props} />
    </ReduxProvider>
  );
}