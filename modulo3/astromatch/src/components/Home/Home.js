import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MainCard, ProfileDiv, ProfileImg, FooterCard } from "./styles";

export const Home = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfileToChoose();
  }, []);

  // Retorna um perfil que ainda não foi visto
  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julia-ailton/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
        console.log(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const chooseProfile = (choice) => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julia-ailton/choose-person";
    const body = {
      id: profile.id,
      choice: choice,
    };
    axios.post(url, body).then((res) => {
      console.log(res.data);
      getProfileToChoose();
    });
  };
  const onClickUnlike = () => {
    chooseProfile(false);
  };
  const onClickLike = () => {
    chooseProfile(true);
  };

  return (
    <MainCard>
      <ProfileDiv>
        <ProfileImg src={profile.photo} />
        <h1>
          {profile.name}, {profile.age}
        </h1>
        <p>{profile.bio}</p>
      </ProfileDiv>
      <FooterCard>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgdROg0b0Y5jZkOSOjEnZK1_VyZ9QEUQ03Vi5AP5IHeFqvSf5Qn9TKtogOGF2VRrVb9U&usqp=CAU"
          onClick={onClickUnlike}
          alt="deslike"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/7950/7950400.png"
          alt="like"
          onClick={onClickLike}
        />
      </FooterCard>
    </MainCard>
  );
};
