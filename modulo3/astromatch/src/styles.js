import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardHome = styled.div`
  padding: 15px;
  width: 378px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid black;
  border-radius: 12px;
  background-color: white;
  margin: 48px auto 0;
  @media (min-width: 374px) and (max-width: 425px){
   width: 331px;
  }
`;
export const HeaderCard = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 60px;
    padding: 5px;
    height: 60px;
    margin-right: 25px;
    margin-left: 25px;
    cursor: pointer;
  }
`;
