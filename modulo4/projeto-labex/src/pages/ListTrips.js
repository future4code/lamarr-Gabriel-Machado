import { useNavigate } from "react-router-dom";
import { useGetTrips } from "../services/RequestsApi";
import {
  ListaDeViagens,
  Buttons,
  Textoh1,
  Container,
  Conteudo
} from "../styles/globalStyles";

export const ListTrips = () => {
  const navigate = useNavigate();

  const trips = useGetTrips();

  const mapear = trips.map((trips) => {
    return (
      <ListaDeViagens key={trips.id}>
        <p>{trips.name}</p>
        <p>{trips.planet}</p>
        <p>{trips.date}</p>
        <p>{trips.description}</p>
      </ListaDeViagens>
    );
  });

  return (
    <Container>
      <Conteudo>
        <Buttons onClick={() => navigate(-1)}>voltar</Buttons>
        <Buttons onClick={() => navigate("/trips/application")}>
          inscrever-se
        </Buttons>
      </Conteudo>
      <Textoh1>lista de viagens</Textoh1>
      {mapear}
    </Container>
  );
};
