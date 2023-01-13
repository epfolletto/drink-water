import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as s from './styled-SignUpPage';
import useForm from "./../../hooks/useForm";
import useUnprotectedPage from './../../hooks/useUnprotectedPage';
import img_buttonBack from "./../../assets/img/buttonBack.png";
import { goToLoginPage, goToMainPage } from "./../../routes/coordinator.js";
import { BASE_URL } from "./../../constants/BASE_URL";

export default function SignUpPage() {
  useUnprotectedPage();
  const navigate = useNavigate();

  const { form, onChange } = useForm({
    username: "",
    weigth: "",
    password: "",
    repitPassword: "",
  })

  const onSubmitSignUp = () => {
    form.weigth = Number(form.weigth)
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then( res => {
        localStorage.setItem('token', res.data.token);
        alert("Cadastro realizado com sucesso!");
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

        <s.Line1>
          <s.ButtonBack src={img_buttonBack} onClick={()=>goToLoginPage(navigate)} />
        </s.Line1>

        <s.Main>
          <s.Apresentation>
            <s.Title>Cadastrar</s.Title>
          </s.Apresentation>
          <s.Form onSubmit={onSubmitSignUp}>
            <s.Input
              type="text"
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder="Username"
              required
            />

            <s.Input
              type="number"
              name="weigth"
              value={form.weigth}
              onChange={onChange}
              placeholder="Peso (kg)"
              required
            />

            <s.Input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="Senha"
              required
              pattern={"^.{8,}"}
              title={"A senha deve ter no mínimo 8 e no máximo 30 caracters"}
            />

            <s.Input
              type="password"
              name="repitPassword"
              value={form.repitPassword}
              onChange={onChange}
              placeholder="Repetir senha"
              required
              pattern={"^.{8,}"}
              title={"A senha deve ter no mínimo 8 e no máximo 30 caracters"}
            />

            <s.ButtonSignUp type={'submit'}>Cadastrar</s.ButtonSignUp>
          </s.Form>
        </s.Main>

      </s.Container>
    </s.General>
  )
}