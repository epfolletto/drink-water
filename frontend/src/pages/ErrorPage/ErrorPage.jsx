import React from "react";
import * as s from './styled-ErrorPage';
import useUnprotectedPage from './../../hooks/useUnprotectedPage';

export default function ErrorPage() {
  useUnprotectedPage();

  return (
    <s.General>
      <s.Container>
        <s.Alert>Página não encontrada :(</s.Alert>
      </s.Container>
    </s.General>
  )
}