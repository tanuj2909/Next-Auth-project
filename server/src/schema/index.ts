import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
});

export const RegisterSchema = z.object({
    username: z.string().min(1, {
        message: "Username required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().refine((password) => {
        const PasswordTest =
          /^[a-zA-Z0-9](?!.*?[ _-]{2})[a-zA-Z0-9_ -]{1,18}[a-zA-Z0-9]$/
        return PasswordTest.test(password)
    }),
});


