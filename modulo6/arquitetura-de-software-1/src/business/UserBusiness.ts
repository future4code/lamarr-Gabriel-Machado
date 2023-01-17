import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error(
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if(email.indexOf("@") === -1){
        throw new Error("Email Inválido");
    }

      if (password.length < 6) {
        throw new Error("Senha muito curta");
      }

      const id: string = Date.now().toString();

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error:any) {
        throw new Error(error.message)
    }
  };

  getAllUsers = async () : Promise<any>  => {
    return await new UserDatabase().getAllUsers();
    }

  deleteUser = async (id: string): Promise<void> => {
    try {
      await new UserDatabase().deleteUser(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
