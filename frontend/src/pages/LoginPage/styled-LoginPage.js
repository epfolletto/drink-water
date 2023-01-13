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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Apresentation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
`

export const Title1 = styled.h1`
  font-size: 32px;
`

export const Title2 = styled.h1`
  color: #1978FF;
  font-size: 32px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0 0 0;
`

export const ButtonLogin = styled.button`
  font-size: 18px;
  height: 40px;
  width: 75%;
  margin: 0 0 10px 0;
  text-align: center;
  border: none;
  border-radius: 20px;
  background-color: #19BFF0;
  color: #fffafa;
  &:hover {
		cursor: pointer;
		background-color: #1978FF;
    border: none;
	}
`

export const ButtonSignUp = styled.button`
  font-size: 18px;
  height: 40px;
  width: 75%;
  text-align: center;
  border: solid 1px black;
  border-radius: 20px;
  &:hover {
		cursor: pointer;
		background-color: #1978FF;
	}
` 