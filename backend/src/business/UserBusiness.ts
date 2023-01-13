import { UserDatabase } from "../database/UserDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { ILoginInputDTO, ILoginOutputDTO, ISignupInputDTO, ISignupOutputDTO, 
         IGetDataUserOutputDTO, IRegisterHistoricDTO, IRegisterHistoricDB,
         IGetUserDataByTokenOutputDTO, IGetUserHistoricByIdAndActualDateInputDTO } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { AuthenticationError } from "../errors/AuthenticationError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) { }

  public signup = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
    const { username, weigth, password, repitPassword } = input

    if (!username || !weigth || !password || !repitPassword) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof username !== "string") {
      throw new ParamsError("Parâmetro 'username' inválido: deve ser uma string")
    }

    if (typeof weigth !== "number") {
      throw new ParamsError("Parâmetro 'peso' inválido: deve ser do tipo number")
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido: deve ser do tipo number")
    }

    if (typeof repitPassword !== "string") {
      throw new ParamsError("Parâmetro 'repitPassword' inválido: deve ser do tipo number")
    }

    const isUsernameAlreadyExists = await this.userDatabase.findByUsername(username)
    if (isUsernameAlreadyExists) {
      throw new ConflictError("Usuário já cadastrado.")
    }

    const id = this.idGenerator.generate();

    if (password !== repitPassword) {
      throw new ParamsError("Os campos senha e confirmar senha devem ser iguais.")
    }

    const hashedPassword = await this.hashManager.hash(password);

    const goal = weigth * 35;

    const user = {
      id,
      username,
      weigth,
      goal,
      password: hashedPassword
    }

    await this.userDatabase.createUser(user)

    const payload: ITokenPayload = {
      id,
    }

    const token = this.authenticator.generateToken(payload)

    const response: ISignupOutputDTO = {
      message: "Usuário cadastrado com sucesso!",
      token
    }

    return response
  }

  public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
    const { username, password } = input

    if (!username || !password) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof username !== "string") {
      throw new ParamsError("Parâmetro 'Esername' inválido.")
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'Senha' inválido.")
    }

    const userDB = await this.userDatabase.findByUsername(username)

    if (!userDB) {
      throw new NotFoundError("Username e/ou Senha inválidos.")
    }

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      userDB.password
    )

    if (!isPasswordCorrect) {
      throw new AuthenticationError("Username e/ou Senha inválidos.")
    }

    const payload: ITokenPayload = {
      id: userDB.id
    }

    const token = this.authenticator.generateToken(payload)

    const response: ILoginOutputDTO = {
      message: "Login realizado com sucesso.",
      token
    }

    return response
  }

  public addRegisterHistoric = async (input: IRegisterHistoricDTO, token: string): Promise<any> => {
    const { id_user, date, time, goal, MLregister, checkGoal } = input

    if (!id_user || !date || !time || !goal || !MLregister || checkGoal===undefined || !token) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof id_user !== "string") {
      throw new ParamsError("Parâmetro 'ID' inválido: deve ser uma string")
    }

    if (typeof date !== "string") {
      throw new ParamsError("Parâmetro 'Data' inválido: deve ser uma string")
    }

    if (typeof time !== "string") {
      throw new ParamsError("Parâmetro 'Hora' inválido: deve ser uma string")
    }

    if (typeof goal !== "number") {
      throw new ParamsError("Parâmetro 'Goal' inválido: deve ser um number")
    }

    if (typeof MLregister !== "number") {
      throw new ParamsError("Parâmetro 'MLregister' inválido: deve ser uma string")
    }

    if (typeof checkGoal !== "boolean") {
      throw new ParamsError("Parâmetro 'checkGoal' inválido: deve ser uma string")
    }

    if (typeof token !== "string") {
      throw new ParamsError("Parâmetro 'Token' inválido: deve ser uma string")
    }

    const userExist = await this.userDatabase.findByID(id_user);
    if (!userExist) {
      throw new ParamsError("Usuário não encontrado")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    const id = this.idGenerator.generate()

    const register:IRegisterHistoricDB = {
      id,
      id_user,
      date,
      goal,
      time,
      mlRegister: MLregister,
      checkGoal
    }

    await this.userDatabase.addRegisterHistoric(register)

    const response: any = {
      message: "Registro realizado com sucesso!",
    }

    return response
  }

  public getUserDataByToken = async (token: string): Promise<IGetDataUserOutputDTO | undefined> => {
    if (!token) {
      throw new ParamsError("Parâmetro 'Token' faltante.")
    }

    if (typeof token !== "string") {
      throw new ParamsError("Parâmetro 'Token' inválido: deve ser uma string.")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    const data = await this.userDatabase.findByID(payload.id)
    if (!data) {
      throw new ParamsError("Dados não encontrados para este ID.")
    }

    const response:IGetUserDataByTokenOutputDTO = {
      id: payload.id,
      username: data.username,
      goal: data.goal
    }
    return response
  }


  public getUserHistoricByIdAndActualDate = async (body: IGetUserHistoricByIdAndActualDateInputDTO): Promise<any | undefined> => {
    const { id, date, token } = body

    if (!id || !date || !token) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof id !== "string") {
      throw new ParamsError("Parâmetro 'ID' inválido: deve ser uma string.")
    }

    if (typeof date !== "string") {
      throw new ParamsError("Parâmetro 'Data' inválido: deve ser uma string.")
    }

    if (typeof token !== "string") {
      throw new ParamsError("Parâmetro 'Token' inválido: deve ser uma string.")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    const data = await this.userDatabase.findHistoricByIdAndActualDate(id, date)
    if (!data) {
      throw new ParamsError("Dados não encontrados para este ID.")
    }

    const response = {
      data
    }
    return response
  }

  public getUserHistory = async (id: string, token: string): Promise<any | undefined> => {
    if (!id || !token) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof id !== "string") {
      throw new ParamsError("Parâmetro 'ID' inválido: deve ser uma string.")
    }

    if (typeof token !== "string") {
      throw new ParamsError("Parâmetro 'Token' inválido: deve ser uma string.")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    const data = await this.userDatabase.findHistory(id)
    if (!data) {
      throw new ParamsError("Dados não encontrados para este ID.")
    }

    const response = {
      data
    }
    return response
  }

  public getDetailDate = async (input: any, token: string): Promise<any | undefined> => {
    const { id, date } = input

    if (!id || !date || !token) {
      throw new ParamsError("Um ou mais parâmetros estão faltando.")
    }

    if (typeof id !== "string") {
      throw new ParamsError("Parâmetro 'ID' inválido: deve ser uma string.")
    }

    if (typeof date !== "string") {
      throw new ParamsError("Parâmetro 'Data' inválido: deve ser uma string.")
    }

    if (typeof token !== "string") {
      throw new ParamsError("Parâmetro 'Token' inválido: deve ser uma string.")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido.");
    }

    const data = await this.userDatabase.findDateById(id, date)
    if (!data) {
      throw new ParamsError("Dados não encontrados para este ID.")
    }

    const response = {
      data
    }
    return response
  }
}