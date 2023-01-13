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
  grid-template-rows: 67px 250px 175px 125px 50px;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Line1 = styled.div`
  display: flex;
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 70%;
  font-size: 20px;
  font-weight: bold;
  border-top-left-radius: 20px;
  background-color: #168ADB;
`

export const Rigth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
  border-top-right-radius: 20px;
  background-color: #168ADB;
`

export const RigthU = styled.div`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: bold;
`

export const RigthD = styled.div`
  margin: 4px 0 0 0;
  font-size: 16px;
  text-decoration: underline;
  font-weight: bold;
  color: #ddd9ce;
  &:hover {
    cursor: pointer;
  }
`

export const Line2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Line3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  background-color: #168ADB;
`

export const Line4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Line5 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #168ADB;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const LineMeta = styled.div`
  margin: 5px;
`

export const LineMetaDay = styled.div`
  font-size: 18px;
`

export const YesOrNo = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin: 7px 0 0 0;
  color: ${props => props.value ? "green" : "red"};
`

export const Select = styled.div`
  display: flex;
  flex-direction: column;
`

export const Option = styled.div`
  font-size: 20px;
  margin: 4px;
`

export const Button = styled.button`
  font-size: 22px;
  height: 40px;
  width: 210px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #19BFF0;
  &:hover {
    cursor: pointer;
    background-color: #1978FF;
  }
`

export const Input = styled.input`
  width: 210px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: solid 1px black;
  padding: 0 0 0 5px;
  &:focus {
    border: solid 2px #168ADB;
    outline: 0;
  }
`

export const ButtonHistory = styled.button`
  font-size: 22px;
  color: #ddd9ce;
  height: 35px;
  width: 125px;
  margin: 0 10px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #16324f;
  &:hover {
    cursor: pointer;
    background-color: #18435a;
  }
`