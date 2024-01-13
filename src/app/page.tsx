import { NextPage } from "next";

import { LoginContainer } from "@/lib/containers/login-container";

const LoginPage: NextPage = () => (
  <section className="h-screen flex justify-center items-center">
    <LoginContainer />
  </section>
);

export default LoginPage;
