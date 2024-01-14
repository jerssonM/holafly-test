"use client";
import {
  Button,
  Card,
  Label,
  Tag,
  TextInput,
  TextInputProps,
} from "keep-react";
import Image from "next/image";
import { FC, useCallback } from "react";
import { Envelope } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputPassword } from "../input-password";
import { Credentials } from "../../services/models";
import { LoginPayload, schema } from "./login-form-schema";

interface LoginFormProps {
  showErrorMessage: boolean;
  onLogin: (credentials: Credentials) => void;
}

export const LoginForm: FC<LoginFormProps> = ({
  onLogin,
  showErrorMessage,
}) => {
  const form = useForm<LoginPayload>({
    mode: "onTouched",
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const inputProps = useCallback(
    (key: keyof LoginPayload): TextInputProps => ({
      id: key,
      addonPosition: "left",
      color: form.formState.errors[key]?.message ? "error" : "default",
      withBg: !!form.formState.errors[key]?.message,
    }),
    [form.formState.errors]
  );

  const handleSave = () => {
    form.trigger();
    if (form.formState.isValid) {
      onLogin(form.getValues());
    }
  };
  console.log(form.getValues(), "values");

  return (
    <Card className="p-4">
      <Card.Title className="flex justify-center">
        <Image
          src="/images/holafly-logo.svg"
          alt="keep"
          width="100"
          height="60"
        />
      </Card.Title>
      <Card.Container className="flex flex-col gap-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Controller
            name="email"
            control={form.control}
            render={({ field: { onChange, ...field } }) => (
              <TextInput
                color={
                  form.formState.errors.email?.message ? "error" : "default"
                }
                data-testid="login-form__email-input"
                placeholder="email@domain.com"
                addon={<Envelope size={20} className="text-gray-400" />}
                handleOnChange={onChange}
                helperText={form.formState.errors.email?.message}
                {...field}
                {...inputProps("email")}
              />
            )}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Controller
            name="password"
            control={form.control}
            render={({ field: { onChange, ...field } }) => (
              <InputPassword
                data-testid="login-form__password-input"
                placeholder="********"
                handleOnChange={onChange}
                helperText={form.formState.errors.password?.message}
                {...field}
                {...inputProps("password")}
              />
            )}
          />
        </div>
        {showErrorMessage && (
          <Tag color="error">
            Your email or password is incorrect. Please check your credentials
            and try again.
          </Tag>
        )}
        <Button
          width="full"
          type="outlinePrimary"
          onClick={handleSave}
          disabled={!form.formState.isValid}
        >
          Login
        </Button>
      </Card.Container>
    </Card>
  );
};
