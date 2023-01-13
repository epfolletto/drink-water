import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const Line1 = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #168ADB;
`

export const ButtonBack = styled.img`
  width: 35px;
  margin: 0 0 0 15px;
  &:hover {
		cursor: pointer;
    border: none;
    transform: scale(1.05);
	}
`

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 32px;
  margin: 0 0 20px 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
`

export const Input = styled.input`
  width: 75%;
  height: 50px;
  font-size: 18px;
  border: solid 1px;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0 0 0 5px;
  &:focus {
    border: solid 2px #168ADB;
    outline: 0;
  }
`

export const ButtonSignUp = styled.button`
  font-size: 18px;
  height: 40px;
  width: 75%;
  margin: 20px 0 10px 0;
  text-align: center;
  border: none;
  border-radius: 20px;
  background-color: #19BFF0;
  color: #fffafa;
  &:hover {
		cursor: pointer;
		background-color: #1978FF;
    border: none;
    transform: scale(1.02);
    transition: transform .2s;
	}
`