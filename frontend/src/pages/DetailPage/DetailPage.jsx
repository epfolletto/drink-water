import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as s from './styled-DetailPage';
import useProtectedPage from './../../hooks/useProtectedPage';
import { BASE_URL } from "./../../constants/BASE_URL";
import img_buttonBack from "./../../assets/img/buttonBack.png";
import { goToHistoryPage, goToDetailPage } from "./../../routes/coordinator.js"

export default function MainPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const params = useParams();

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
        getDetailDateByIdAndDate(res.data.id);
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

  const getDetailDateByIdAndDate = async (id) => {
    const body = {
      id,
      date: params.date.split('T')[0],
    }
    await axios
      .post(`${BASE_URL}/users/getdetail`, body,
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
          <s.ButtonBack src={img_buttonBack} onClick={()=>goToHistoryPage(navigate)} />
        </s.Line1>

        <s.Line2>
          {
            user && <>Detalhes {params.date.split('T')[0].split('-').reverse().join('/')}</>
          }
        </s.Line2>

        <s.Line3>
          <s.Titles>
            <s.TitleDate>Data</s.TitleDate>
            <s.TitleGoal>Hora</s.TitleGoal>
            <s.TitleSum>Consumo (ml)</s.TitleSum>
          </s.Titles>
          {
            list && list.map( reg => {
              const cor = reg.sum >= reg.goal ? 1 : 2;
              return (
                <s.RegList name={reg.date} onClick={() => goToDetailPage(navigate, reg.date)} value={cor}>
                  <s.RegDate> {reg.date.split('T')[0].split('-').reverse().join('/')} </s.RegDate>
                  <s.RegTime> {reg.time} </s.RegTime>
                  <s.RegSum> {reg.mlRegister} </s.RegSum>
                </s.RegList>
              )
            })
          }
        </s.Line3>

      </s.Container>
    </s.General>
  )
}