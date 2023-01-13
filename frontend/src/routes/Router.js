import React from 'react';
import LoginPage from "./../pages/LoginPage/LoginPage"
import SignUpPage from "./../pages/SignUpPage/SignUpPage"
import MainPage from "./../pages/MainPage/MainPage"
import HistoryPage from "./../pages/HistoryPage/HistoryPage"
import DetailPage from "./../pages/DetailPage/DetailPage"
import ErrorPage from "./../pages/ErrorPage/ErrorPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="main" element={<MainPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        <Route path="history" element={<HistoryPage/>}/>
        <Route path="detail/:date" element={<DetailPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
} 