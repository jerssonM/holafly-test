import { z } from "zod";

export const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export type LoginPayload = z.infer<typeof schema>;
