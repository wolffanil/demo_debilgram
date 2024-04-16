import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { InputHTMLAttributes } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import ProfileUploader from "../../components/forms/ProfileUploader";
import { ProfileValidation } from "../../libs/validation";

function UpdateProfile() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof ProfileValidation>>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      file: [],
      name: "",
      username: "",
      bio: "",
    },
  });

  const handleUpdateProfile = (value: z.infer<typeof ProfileValidation>) => {
    console.log(value);
  };

  return (
    <Form>
      <FormTitle>Редактировать профиль</FormTitle>

      <FormBlock onSubmit={handleSubmit(handleUpdateProfile)}>
        <ProfileUploader
          fieldChange={(file) => setValue("file", file)}
          mediaUrl=""
        />
        {errors.file && errors.file.message && (
          <FormError>{errors.file.message}</FormError>
        )}

        <FormWrapper className="form__wrapper">
          <FormLabel>Имя</FormLabel>
          <FormInput type="text" {...register("name")} />

          {errors.name && errors.name.message && (
            <FormError>{errors.name.message}</FormError>
          )}
        </FormWrapper>

        <FormWrapper>
          <FormLabel>Ник</FormLabel>
          <FormInput type="text" {...register("name")} />

          {errors.username && errors.username.message && (
            <FormError>{errors.username.message}</FormError>
          )}
        </FormWrapper>

        <FormWrapper>
          <FormLabel>Описание</FormLabel>
          <FormInput type="text" isbio={true} {...register("bio")} />

          {errors.bio && errors.bio.message && (
            <FormError>{errors.bio.message}</FormError>
          )}
        </FormWrapper>

        <FormButton className="form__button" type="submit">
          Редактировать
        </FormButton>
      </FormBlock>
    </Form>
  );
}

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isbio?: boolean;
}

const FormLabel = styled.label`
  font-size: 45px;
  font-weight: 400;
  margin-left: 45px;
  color: var(--text-color);
`;

const FormTitle = styled.h1`
  font-size: 45px;
  font-weight: 400;
  color: var(--violet-color);
  font-family: "redoctober";
`;

const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 44px;
  width: 100%;
`;

const FormInput = styled.input<FormInputProps>`
  width: 100%;
  height: 74px;
  padding: 10px 15px;
  font-size: 25px;
  background-color: var(--grey-color);
  margin-top: 5px;
  border-radius: 20px;
  margin-bottom: 10px;

  color: var(--text-color);

  ${({ isbio }) =>
    isbio &&
    css`
      height: 214px;
    `}
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-top: 50px;
`;

const Form = styled.div`
  max-width: 804px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FormError = styled.p`
  color: red;
  font-size: 25px;
  font-weight: 400;
`;

const FormButton = styled.button`
  background-color: var(--violet-color);
  padding: 32px 56px;
  border-radius: 20px;
  color: #212121;
  font-size: 45px;
  font-weight: 400;
  display: block;
  margin-left: auto;
  margin-top: 54px;
`;

export default UpdateProfile;
