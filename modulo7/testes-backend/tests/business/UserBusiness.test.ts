import { UserBusiness } from "../../src/business/UserBusiness"
import { CustomError } from "../../src/errors/CustomError"
import { USER_ROLES } from "../../src/model/User"
import { HashGeneratorMock } from "../mocks/HashGeneratorMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenGeneratorMock } from "../mocks/TokenGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new HashGeneratorMock(),
    new IdGeneratorMock(),
    new TokenGeneratorMock()
)

describe("Testes signup", ()=>{
    test("Teste 1: Erro que deve retornar quando o nome está vazio",async () => {
      expect.assertions(3)
      try {
            await userBusiness.signup("", "email@email.com", "123456", USER_ROLES.NORMAL )
      } catch (error:any) {  
          expect(error).toBeInstanceOf(CustomError)
          expect(error.statusCode).toBe(422)
          expect(error.message).toBe("Missing input")   
      }
    })

    test("Teste 2: Erro que deve retornar quando o email é inválido",async () => {
        expect.assertions(3)
        try {
              await userBusiness.signup("Mockinho", "email", "123456", USER_ROLES.NORMAL )
        } catch (error:any) {  
            expect(error).toBeInstanceOf(CustomError)
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe("Invalid email")   
        }
    })

    test("Teste 3: Erro que deve retornar quando a senha é inválida",async () => {
        expect.assertions(3)
        try {
              await userBusiness.signup("Mockinho", "email@email", "123", USER_ROLES.NORMAL )
        } catch (error:any) {  
            expect(error).toBeInstanceOf(CustomError)
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe("Invalid password")   
        }
    })
    
    test("Teste 4: Erro que deve retornar quando o tipo de usuário é inválido",async () => {
        expect.assertions(3)
        try {
              await userBusiness.signup("Mockinho", "email@email", "123456", "" )
        } catch (error:any) {  
            expect(error).toBeInstanceOf(CustomError)
            expect(error.statusCode).toBe(422)
            expect(error.message).toBe("Missing input")   
        }
    })

    test("Teste 5: Sucesso no cadastro e verificação do token de acesso ",async () => {
        const result =  await userBusiness.signup("Mockinho", "email@email", "123456", USER_ROLES.NORMAL )
        expect(result).toBeDefined()
        expect(result).toEqual({accessToken: "token"})
    })

})

describe("Teste no Login", ()=>{
    test("Teste 1: Erro que deve retornar quando o email fornecido não existe", async()=>{
      expect.assertions(3)
      try {
          await userBusiness.login("nãoEmail", "123456")
      } catch (error:any) {
        expect(error).toBeInstanceOf(CustomError)
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Invalid credentials") 
      }
    })

    test("Teste 2: Erro que deve retornar quando a senha está errada", async()=>{
        expect.assertions(3)
        try {
            await userBusiness.login("email", "123")
        } catch (error:any) {
          expect(error).toBeInstanceOf(CustomError)
          expect(error.statusCode).toBe(401)
          expect(error.message).toBe("Invalid credentials") 
        }
    })

    test("Teste 3: Sucesso no login e verificação do token de acesso ", async()=>{

        const result =  await userBusiness.login( "email",  "123456" )
        expect(result).toBeDefined()
        expect(result).toEqual({accessToken: "token"})
    })

})

describe("Teste no getUserById", ()=>{
    test("Teste 1: Erro que deve retornar quando o usuário não existe", async()=>{
      expect.assertions(2)
      try {
          await userBusiness.getUserById("abc")
      } catch (error:any) {
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("User not found") 
      }
    })

    test("Teste 2: Sucesso deve reornar o respectivo id, quando esse for registrado", async()=>{
        expect.assertions(2)

        try{
            const getUserById = jest.fn(
                (id: string) => userBusiness.getUserById(id)
              )

            const result = await getUserById("id")

            expect(getUserById).toHaveBeenCalledWith("id")
            expect(result).toEqual({
                id: "id", 
                name: "Mockinho, o seu testinho",
                email: "email", 
                role: USER_ROLES.NORMAL})
        } catch (error:any) {
            console.log(error)
        }
    })

})