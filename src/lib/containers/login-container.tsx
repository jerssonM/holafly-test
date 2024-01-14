"use client";
import { useState } from "react";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Credentials } from "@/lib/services/models";
import { LoginForm } from "@/lib/components/login-form";

import { ROUTES } from "../constants";

export const LoginContainer: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLogin = async (credentials: Credentials) => {
    setIsLoading(true);
    setShowErrorMessage(false);

    const response = await signIn("credentials", {
      redirect: false,
      ...credentials,
    });
    setIsLoading(false);

    if (response?.error) {
      setShowErrorMessage(true);
      return;
    }

    router.push(ROUTES.HOME);
  };

  return (
    <div className="md:w-1/2">
      <LoginForm
        onLogin={handleLogin}
        isLoading={isLoading}
        hasError={showErrorMessage}
      />
    </div>
  );
};
