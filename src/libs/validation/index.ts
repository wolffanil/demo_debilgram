import * as z from "zod";

export const ProfileValidation = z.object({
  name: z.string().min(2, { message: "Слишком кароткий" }),
  username: z.string().min(2, { message: "Слишком кароткий" }),
  bio: z
    .string()
    .min(5, { message: "Слишком кароткий" })
    .max(1024, { message: "Текст должен быть кароче чем 1024 символа" }),
  file: z.custom<File[]>(),
});

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Слишком кароткий" }),
  email: z.string().email({ message: "Введите коректный email" }),
  password: z
    .string()
    .min(8, { message: "Пароль должен быть не меньше 8 символов" }),
});

export const SigninValidation = z.object({
  email: z.string().email({ message: "Введите коректный email" }),
  password: z
    .string()
    .min(8, { message: "Пароль должен быть не меньше 8 символов" }),
});
