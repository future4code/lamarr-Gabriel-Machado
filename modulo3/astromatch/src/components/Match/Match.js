import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MainListCard,
  ListDIv,
  FooterList,
  ImagemMatch,
  MatchRow,
} from "./styles";

export const Match = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julia-ailton/matches"
      )
      .then((res) => {
        console.log(res.data.matches);
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julia-ailton/clear"
      )
      .then((res) => {
        console.log(res);
        getMatches();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainListCard>
      <ListDIv>
        {matches &&
          matches?.map((dado) => {
            return (
              <div key={dado.id}>
                <MatchRow>
                  <ImagemMatch src={dado.photo} alt={dado.name} />
                  <p>{dado.name}</p>
                </MatchRow>
              </div>
            );
          })}
      </ListDIv>
      <FooterList>
        <button onClick={clear}>Limpar Matchs</button>
      </FooterList>
    </MainListCard>
  );
};
