import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as s from './styled-HistoryPage';
import useProtectedPage from './../../hooks/useProtectedPage';
import { BASE_URL } from "./../../constants/BASE_URL";
import img_buttonBack from "./../../assets/img/buttonBack.png";
import { goToMainPage, goToDetailPage } from "./../../routes/coordinator.js"

export default function MainPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [user, setUser] = useState();
  const [list, setList] = useState();

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
        getUserHistory(res.data.id);
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
  }, [])

  const getUserHistory = async (id) => {
    await axios
      .get(`${BASE_URL}/users/getdata/${id}`,
      {
        headers:
        {
          authorization: token
        }
      })
      .then(res => {
        setList(res.data.data);
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

  return (
    <s.General>
      <s.Container>

        <s.Line1>
          <s.ButtonBack src={img_buttonBack} onClick={()=>goToMainPage(navigate)} />
        </s.Line1>

        <s.Line2>
          {
            user && <>Histórico {user.username}</>
          }
        </s.Line2>

        <s.Line3>
          <s.Titles>
            <s.TitleDate>Data</s.TitleDate>
            <s.TitleGoal>Meta (ml)</s.TitleGoal>
            <s.TitleSum>Consumo (ml)</s.TitleSum>
          </s.Titles>
          {
            list && list.map( reg => {
              const cor = reg.sum >= reg.goal ? 1 : 2;
              return (
                <s.RegList name={reg.date} onClick={() => goToDetailPage(navigate, reg.date)} value={cor}>
                  <s.RegDate> {reg.date.split('T')[0].split('-').reverse().join('/')} </s.RegDate>
                  <s.RegGoal> {reg.goal} </s.RegGoal>
                  <s.RegSum> {reg.sum} </s.RegSum>
                </s.RegList>
              )
            })
          }
        </s.Line3>

      </s.Container>
    </s.General>
  )
}