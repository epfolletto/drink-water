//
export interface ISignupInputDTO {
  username: string,
  weigth: number,
  password: string,
  repitPassword: string
}

//
export interface ISignupOutputDTO {
  message: string,
  token: string
}

//
export interface IRegisterHistoricDTO {
  id_user: string,
  date: Date,
  time: string,
  goal: number,
  MLregister: number,
  checkGoal: boolean,
}

//
export interface IRegisterHistoricDB {
  id: string,
  id_user: string,
  date: Date,
  goal: number,
  time: string,
  mlRegister: number,
  checkGoal: boolean
}

//
export interface ILoginInputDTO {
  username: string,
  password: string
}

export interface ILoginOutputDTO {
  message: string,
  token: string
}

//
export interface IGetUserDataByTokenOutputDTO {
  id: string,
  username: string,
  goal: number
}

//
export interface IGetUserHistoricByIdAndActualDateInputDTO {
  id: string,
  date: Date,
  token: string
}

export interface IGetDataUserOutputDTO {
  id: String,
  username: string,
  goal: number
}