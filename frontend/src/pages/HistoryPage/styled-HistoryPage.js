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
  grid-template-rows: 60px 60px 1fr;
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 10px 0 rgba(0,0,0,0.15);
`

export const Line1 = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #168ADB;
`

export const Line2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #19FADD;
`

export const Line3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin: 20px 0 0 0;
`

export const ButtonBack = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 0 0 15px;
  &:hover {
		cursor: pointer;
    border: none;
    transform: scale(1.05);
	}
`

export const RegList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px 0;
  background-color: ${props => props.value === 1 ?  "lightgreen" : "lightcoral"};
  &:hover {
		cursor: pointer;
    background-color: gray;
	}
`

export const RegDate = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  flex: 1 0 30%;
  font-size: 16px;
  overflow-wrap: break-word;
  /* color: ${props => props.name === "desafiosharenergy" ? "#0000d8" : "black"}; */
  color: black;
`

export const RegGoal = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  flex: 1 0 30%;
  font-size: 16px;
  overflow-wrap: break-word;
`

export const RegSum = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  flex: 1 0 40%;
  font-size: 16px;
  overflow-wrap: break-word;
`

export const Titles = styled.div`
  display: flex;
  width: 100%;
  overflow-wrap: break-word;
`

export const TitleDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 30%;
  font-size: 20px;
  font-weight: bold;
  overflow-wrap: break-word;
`

export const TitleGoal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 30%;
  font-size: 20px;
  font-weight: bold;
  overflow-wrap: break-word;
`

export const TitleSum = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0 40%;
  font-size: 20px;
  font-weight: bold;
  overflow-wrap: break-word;
`