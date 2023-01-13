import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { IRegisterHistoricDTO, ISignupInputDTO, ILoginInputDTO,
         IGetUserHistoricByIdAndActualDateInputDTO } from "../models/User";

export class UserController {
  constructor(
    private userBusiness: UserBusiness
  ) { }

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        username: req.body.username,
        weigth: req.body.weigth,
        password: req.body.password,
        repitPassword: req.body.repitPassword
      }

      const response = await this.userBusiness.signup(input)
      res.status(201).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
    }
  }

  public addRegisterHistoric = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string

      const input: IRegisterHistoricDTO = {
        id_user: req.body.id_user,
        date: req.body.date,
        time: req.body.time,
        goal: req.body.goal,
        MLregister: req.body.MLregister,
        checkGoal: req.body.checkGoal,
      }

      const response = await this.userBusiness.addRegisterHistoric(input, token)
      res.status(201).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
    }
  }

  public login = async (req: Request, res: Response) => {
    try {
      const input: ILoginInputDTO = {
        username: req.body.username,
        password: req.body.password
      }

      const response = await this.userBusiness.login(input)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
    }
  }

  public getUserDataByToken = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const response = await this.userBusiness.getUserDataByToken(token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário" })
    }
  }

  public getUserHistoricByIdAndActualDate = async (req: Request, res: Response) => {
    try {
      const body: IGetUserHistoricByIdAndActualDateInputDTO = {
        id: req.params.id,
        date: req.body.date,
        token: req.headers.authorization as string
      }

      const response = await this.userBusiness.getUserHistoricByIdAndActualDate(body)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário" })
    }
  }

  public getUserHistory = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string

      const response = await this.userBusiness.getUserHistory(id, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário" })
    }
  }

  public getDetailDate = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string
      const input: any = {
        id: req.body.id,
        date: req.body.date
      }

      const response = await this.userBusiness.getDetailDate(input, token)
      res.status(200).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro ao buscar o usuário" })
    }
  }
}