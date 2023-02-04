import { MovieDatabase } from "../data/MovieDatabase";
import { MovieInputDTO } from "../model/movieDTO";
import { generateId } from "../services/idGenerator";
import { movie } from "../model/movie";
import { CustomError } from "../error/CustomError";

export class MovieBusiness {
  create = async (input: MovieInputDTO) => {
    try {
      const { title, description, duration_in_minutes, year_of_release } =
        input;

      if (!title || !description || !duration_in_minutes || !year_of_release) {
        throw new CustomError(400, "Dados inválidos");
      }

      const id = generateId();

      const movieDatabase = new MovieDatabase();

      const movie: movie = {
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release,
      };

      await movieDatabase.create(movie);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
