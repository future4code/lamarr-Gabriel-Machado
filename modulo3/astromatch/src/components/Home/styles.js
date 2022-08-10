import styled from "styled-components";

export const MainCard = styled.main`
  display: flex;
  flex-direction: column;
  padding-right: 32px;
  padding-left: 32px;
  width: 370px;
  margin: 5px;
`;
export const ProfileDiv = styled.div`
  margin: 20px;
  div{
    border: 1px solid black;
    margin-top: -30px;
    backdrop-filter: blur(24px);
    border-radius: 0px 0px 12px 12px;
    padding: 5px;
    border: none;
  }
  h1{
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
    margin-bottom: 10px;
  }
  p{
      font-size: 0.75rem;
      font-weight: 700;
      color: black;
      margin-top: 10px;
    }
`;
export const ProfileImg = styled.img`
  width: 100%;
  height: 40vh;
  border-radius: 12px;
`;
export const FooterCard = styled.footer`
  background-color: white;
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  img{
    cursor: pointer;
    width: 60px;
    height: 60px;
    padding: 5px;
    margin-right: 25px;
    margin-left: 25px;
    &:hover{
      opacity: 0.5;
    }
    &:active {
    transform: scale(0.93);
/*   diminui a imagem */
    transition: transform .3s;
/*   velocidade do transform */
}
  }
`;