import styled from "styled-components";

export const MainListCard = styled.main`
  background-color: white;
  height: 65vh;
  width: 100%;
`;
export const ListDIv = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 309px;
  margin: 5px;
  margin-left: 3px;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const FooterList = styled.footer`
  background-color: white;
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
  button {
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    color: rgb(231, 38, 38);
    background: transparent;
    border: 1px solid rgb(231, 38, 38);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
      background-color: rgb(231, 38, 38);
      color: white;
    }
  }
`;
export const ImagemMatch = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
`;
export const MatchRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: flex-start;
  margin-right: -180px;
`;
