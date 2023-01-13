import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as s from './styled-MainPage';
import useProtectedPage from '../../hooks/useProtectedPage';
import { BASE_URL } from "../../constants/BASE_URL";
import { goToHistoryPage, goToLoginPage } from "../../routes/coordinator.js";

export default function FeedPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [actualDate, setActualDate] = useState('');
  const [recipient, setRecipient] = useState();
  const [valueML, setValueML] = useState();
  const [user, setUser] = useState();
  const [actualML, setActualML] = useState(0);
  const [atualizar, setAtualizar] = useState(false);

  const getUserDataByToken = async () => {
    await axios
      .get(`${BASE_URL}/users/getdata/`,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        setUser(res.data);
        getUserHistoricByIdAndActualDate(res.data.id);
      })
      .catch(error => {
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }
  useEffect(() => {
    getUserDataByToken();
  }, [atualizar])

  const getUserHistoricByIdAndActualDate = async (id) => {
    const body = { 
      date: new Date().toLocaleDateString().split('/').reverse().join('-')
    }
    await axios
      .post(`${BASE_URL}/users/getdata/${id}`, body,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        setActualML(res.data.data[0].sum);
      })
      .catch(error => {
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }

  useEffect(() => {
    setActualDate(new Date().toLocaleDateString());
  }, [])

  const changeContainer = (event) => {
    setRecipient(event.target.value)
  }

  const changeOtherML = (event) => {
    setValueML(event.target.value)
  }

  const insertNewRegister = async () => {
    if(!recipient || (recipient === "other" && !valueML)){
      alert('Selecione algum item ou digite um valor.')
    } else {
      const body = {
        id_user: user.id,
        date: new Date().toLocaleDateString().split('/').reverse().join('-'),
        time: new Date().toLocaleTimeString(),
        goal: user.goal
      }

      if(recipient === "smallCup"){
        body.MLregister = 250;
      } else if (recipient === "mediumCup") {
        body.MLregister = 350;
      } else if (recipient === "mediumBottle") {
        body.MLregister = 500;
      } else if (recipient === "other") {
        body.MLregister = Number(valueML);
      } else{}

      body.checkGoal = (actualML+body.MLregister) >= user.goal ? true : false

      await axios
        .post(`${BASE_URL}/users/insert`, body,
        {
          headers:
          {
            authorization: token
          }
        })
        .then(res => {
          setRecipient('smallCup');
          setValueML();
          setAtualizar(!atualizar);
          alert('Registro efetuado com sucesso!')
        })
        .catch(error => {
          const errorCode = error.response.status;
          if (errorCode >= 400 && errorCode < 500) {
            alert(`Erro ${errorCode}: ${error.response.data.message}`)
          } else {
            alert(`Erro no servidor, tente novamente mais tarde!`)
          }
        })
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  }

  return (
    <s.General>
      <s.Container>

        <s.Line1>
          <s.Left>
            Data de hoje: {actualDate}
          </s.Left>
          <s.Rigth>
            <s.RigthU>{ user && <>Olá, {user.username}</> }</s.RigthU>
            <s.RigthD onClick={() => logout()}>logout</s.RigthD>
          </s.Rigth>
        </s.Line1>

        <s.Line2>
          <s.Select>
            <s.Option>
              <input type="radio" name="recipient" value="smallCup" onChange={changeContainer}></input> Copo pequeno 250ml
            </s.Option>
            <s.Option>
              <input type="radio" name="recipient" value="mediumCup" onChange={changeContainer}></input> Copo médio 350ml
            </s.Option>
            <s.Option>
              <input type="radio" name="recipient" value="mediumBottle" onChange={changeContainer}></input> Garrafa média 500ml
            </s.Option>
            <s.Option>
              <input type="radio" name="recipient" value="other" onChange={changeContainer}></input> Outro
            </s.Option>
          </s.Select>
          {
            recipient === "other" ? 
              <s.Input type="number" value={valueML} placeholder="Quantidade (ml)" onChange={changeOtherML}></s.Input>
            :
              null
          }
            <s.Button onClick={() => insertNewRegister()} alt="Atualizar">Consumir</s.Button>
        </s.Line2>

        <s.Line3>
          {
            user ?
            <>
              <s.LineMeta> <b>Meta do dia:</b>  {user.goal} ml</s.LineMeta>
              <s.LineMeta> <b>Meta restante:</b> {actualML >= user.goal ? 0 : user.goal - actualML} ml</s.LineMeta>
              <s.LineMeta> <b>Já consumido:</b>  {actualML} ml</s.LineMeta>
              <s.LineMeta> <b>Já consumido:</b>  { Math.round(100*actualML/user.goal) }%</s.LineMeta>
            </>
            :
              null
          }
        </s.Line3>

        <s.Line4>
          {
            user ?
            <>
              <s.LineMetaDay>
                Meta atingida?
                {
                  actualML >= user.goal ? 
                    <s.YesOrNo value={true}>SIM!</s.YesOrNo>
                  :
                    <s.YesOrNo value={false}>NÃO!</s.YesOrNo>
                }
              </s.LineMetaDay>
            </>
            :
              null
          }
        </s.Line4>

        <s.Line5>
          <s.ButtonHistory onClick={() => goToHistoryPage(navigate)} alt="Histórico">Histórico</s.ButtonHistory>
        </s.Line5>
      </s.Container>
    </s.General>
  )
}