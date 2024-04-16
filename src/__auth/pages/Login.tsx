import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Form } from "../../components/ui/FormStyles";
import { SigninValidation } from "../../libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = (value: z.infer<typeof SigninValidation>) => {
    console.log(value);
  };

  return (
    <Form onSubmit={handleSubmit(onLogin)}>
      <H1>
        <img src="/logo.svg" alt="logo" />
        ДЕБИЛГРАММ
      </H1>
      <h2 className="form__title">Войдите в свою учётную запись</h2>

      <p className="form__subtitle">
        Добро пожаловать! Пожалуйста, введите свои данные.
      </p>

      <div className="form__wrapper">
        <label className="form__label">Email</label>
        <input type="text" {...register("email")} className="form__input" />
        {errors.email && errors.email.message && (
          <p className="form__error">{errors.email.message}</p>
        )}
      </div>

      <div className="form__wrapper">
        <label className="form__label">Пароль</label>
        <input
          type="password"
          {...register("password")}
          className="form__input"
        />

        {errors.password && errors.password.message && (
          <p className="form__error">{errors.password.message}</p>
        )}
      </div>

      <button className="form__button" type="submit">
        Войти
      </button>
      <p className="form__link">
        У вас нет учетной записи?{" "}
        <Link to="/signup" className="form__link--violet">
          Создать
        </Link>
      </p>
    </Form>
  );
}

const H1 = styled.h1`
  display: flex;
  column-gap: 35px;
  color: var(--violet-color);
  font-size: 50px;
`;

export default Login;
