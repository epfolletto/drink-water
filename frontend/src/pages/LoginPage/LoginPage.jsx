import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as s from './styled-LoginPage';
import useForm from "./../../hooks/useForm";
import { goToSignUpPage, goToMainPage } from "./../../routes/coordinator.js";
import { BASE_URL } from "./../../constants/BASE_URL";
import useUnprotectedPage from './../../hooks/useUnprotectedPage';

export default function LoginPage() {
  useUnprotectedPage();
  const navigate = useNavigate();

  const { form, onChange } = useForm({
    username: "",
    password: "",
  })

  const onSubmitLogin = (event) => {
    event.preventDefault();
    axios
    .post(`${BASE_URL}/users/login`, form)
    .then( res => {
      localStorage.setItem('token', res.data.token)
      goToMainPage(navigate);
    })
    .catch(error => {
      const errorCode = error.response.status
      if(errorCode >= 400 && errorCode <= 500){
        alert(`Erro ${errorCode}: ${error.response.data.message}`)
      } else if(errorCode >= 500 && errorCode <= 600){
        alert("Ocorreu um erro no servidor, tente novamente mais tarde")
      } else if (errorCode >= 500 && errorCode < 600)
        alert("Ocorreu um erro no servidor, tente novamente mais tarde");
    })
  }

  return (
    <s.General>
      <s.Container>

        <s.Apresentation>
          <s.Title1>Drink</s.Title1>
          <s.Title2><u>Water</u></s.Title2>
        </s.Apresentation>

        <s.Form onSubmit={onSubmitLogin}>
          <s.Input
            name={"username"}
            value={form.username}
            onChange={onChange}
            placeholder="Username"
            required
            type={"text"}
          />
          <s.Input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
            type={"password"}
          />
          <s.Buttons>
            <s.ButtonLogin type={'submit'}>Continuar</s.ButtonLogin>
            <s.ButtonSignUp onClick={()=>goToSignUpPage(navigate)}>Crie uma conta!</s.ButtonSignUp>
          </s.Buttons>
        </s.Form>

      </s.Container>
    </s.General>
  )
}