import { useForm } from "react-hook-form";
import { Form } from "../../components/ui/FormStyles";
import * as z from "zod";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupValidation } from "../../libs/validation";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onRegister = (value: z.infer<typeof SignupValidation>) => {
    console.log(value);
  };

  return (
    <Form onSubmit={handleSubmit(onRegister)}>
      <h1 className="form__title form__title--mt0">
        CОЗДАЙТЕ НОВУЮ УЧЕТНУЮ ЗАПИСЬ
      </h1>

      <h2 className="form__subtitle">
        Чтобы воспользоваться <span className="form__title">ДЕБИЛОГРАММ</span> ,
        <br /> пожалуйста, введите свои данные.
      </h2>

      <div className="form__wrapper">
        <label className="form__label">Имя</label>
        <input type="text" {...register("name")} className="form__input" />
        {errors.name && errors.name.message && (
          <p className="form__error">{errors.name.message}</p>
        )}
      </div>

      <div className="form__wrapper">
        <label className="form__label">E-mail</label>
        <input type="email" {...register("email")} className="form__input" />
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
        Создать
      </button>

      <p className="form__link">
        Ecть аккаунт?{" "}
        <Link to="/signin" className="form__link--violet">
          Войти
        </Link>
      </p>
    </Form>
  );
}

export default Register;
