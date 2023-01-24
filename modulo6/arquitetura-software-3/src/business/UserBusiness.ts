import { UserDatabase } from "../data/UserDatabase";
import { UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";
import { user } from "../model/user";
import { CustomError } from "../error/CustomError";
import { InvalidEmail, InvalidPassword } from "../error/UserErrors";

export class UserBusiness {
  create = async(input: UserInputDTO): Promise<void> => {
    try {
      const { email, name, password } = input;

      if (!email || !name || !password) {
        throw new CustomError(400, "Dados inválidos (email, name, password)");
      }

      if (email.indexOf("@") === -1) {
        throw new InvalidEmail()
      }

      if (password.length < 6) {
        throw new InvalidPassword()
      }

      const id: string = generateId();

      const userDatabase = new UserDatabase();

      const user: user = {
        id,
        name,
        email,
        password,
      };

      await userDatabase.create(user);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

  getAllUsers = async () => {
    try {
      const userDatabase = new UserDatabase();

      return await userDatabase.getAllUsers();

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
