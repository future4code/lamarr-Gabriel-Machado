import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MainCard, ProfileDiv, ProfileImg, FooterCard } from "./styles";

export const Home = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-machado";

  const headers = {
    "Content-Type": "application/json",
  };

  // Retorna um perfil que ainda não foi visto
  const getProfileToChoose = () => {
    axios
      .get(url + '/person')
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch(() => {
        alert("Erro ao buscar perfil");
      });
  };
  //Recebe um id e uma escolha (choice). A escolha é a opção do usuário no momento do swipe. Deve ser true ou false.
  const chooseProfile = (choice) => {
    const body = {
      id: profile.id,
      choice: choice,
    };
    axios
      .post(url + '/choose-person', body, headers)
      .then((res) => {
        if (res.data.isMatch === true) {
          alert("Vocês são compatíveis!");
          getProfileToChoose();
        }
        getProfileToChoose();
      })
      .catch(() => {
        alert("Erro ao escolher perfil");
      });
  };

  return (
    <MainCard>
      <ProfileDiv>
        <ProfileImg src={profile.photo} />
        <div>
          <h1>
            {profile.name}, {profile.age}
          </h1>
          <p>{profile.bio}</p>
        </div>
      </ProfileDiv>
      <FooterCard>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgdROg0b0Y5jZkOSOjEnZK1_VyZ9QEUQ03Vi5AP5IHeFqvSf5Qn9TKtogOGF2VRrVb9U&usqp=CAU"
          alt="deslike"
          onClick={() => chooseProfile(false)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/7950/7950400.png"
          alt="like"
          onClick={() => chooseProfile(true)}
        />
      </FooterCard>
    </MainCard>
  );
};
