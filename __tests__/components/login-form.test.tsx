import { expect, it, vi, describe } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { LoginForm } from "@/lib/components/login-form";

describe("<LoginForm />", () => {
  it("Should call login method", async () => {
    const spyOnLogin = vi.fn();
    render(<LoginForm onLogin={spyOnLogin} />);

    const inputEmail = screen.getByTestId("login-form__email-input");
    const inputPassword = screen.getByTestId("login-form__password-input");
    const buttonLogin = screen.getByText("Login");

    fireEvent.change(inputEmail, {
      target: { name: "email", value: "test@test.com" },
    });
    fireEvent.change(inputPassword, {
      target: { name: "password", value: "123" },
    });

    await waitFor(() => {
      fireEvent.click(buttonLogin);
      expect(spyOnLogin).toBeCalled();
    });
  });

  it("Should show error message", () => {
    render(<LoginForm hasError onLogin={vi.fn()} />);

    expect(
      screen.getAllByText(
        "Your email or password is incorrect. Please check your credentials and try again."
      )
    ).toBeDefined();
  });
});
