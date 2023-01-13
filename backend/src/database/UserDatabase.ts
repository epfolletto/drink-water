import { IRegisterHistoricDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "users";
  public static TABLE_HISTORIC = "historic";

  public findByUsername = async (username: string): Promise<any> => {
    const result: any = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ username })

    return result[0]
  }

  public findByDate = async (data: any): Promise<any> => {
    const result: any = await BaseDatabase
      .connection(UserDatabase.TABLE_HISTORIC)
      .select()
      .where({ Date })

    return result[0]
  }

  public findByID = async (id: string): Promise<any> => {
    const result: any = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ id })

    return result[0]
  }

  public createUser = async (user: any): Promise<void> => {
    await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .insert(user)
  }

  public addRegisterHistoric = async (register: IRegisterHistoricDB): Promise<void> => {
    await BaseDatabase
      .connection(UserDatabase.TABLE_HISTORIC)
      .insert(register)
  }

  public findHistoricByIdAndActualDate = async (id: string, date: string): Promise<any> => {
    const result = await BaseDatabase
      .connection.raw(`
        SELECT ${UserDatabase.TABLE_HISTORIC}.id_user, ${UserDatabase.TABLE_HISTORIC}.mlRegister, SUM(${UserDatabase.TABLE_HISTORIC}.mlRegister) as sum
        FROM ${UserDatabase.TABLE_HISTORIC}
        WHERE (${UserDatabase.TABLE_HISTORIC}.id_user = '${id}' AND ${UserDatabase.TABLE_HISTORIC}.date = '${date}')
        GROUP BY ${UserDatabase.TABLE_HISTORIC}.id_user;
      `)
    return result[0]
  }

  public findHistory = async (id: string): Promise<any> => {
    const result = await BaseDatabase
      .connection.raw(`
        SELECT ${UserDatabase.TABLE_HISTORIC}.date, ${UserDatabase.TABLE_HISTORIC}.goal, SUM(${UserDatabase.TABLE_HISTORIC}.mlRegister) as sum
        FROM ${UserDatabase.TABLE_HISTORIC}
        WHERE ${UserDatabase.TABLE_HISTORIC}.id_user = '${id}'
        GROUP BY ${UserDatabase.TABLE_HISTORIC}.date
        ORDER BY ${UserDatabase.TABLE_HISTORIC}.date ASC;
      `)
    return result[0]
  }

  public findDateById = async (id: string, date: string): Promise<any> => {
    const result = await BaseDatabase
      .connection(UserDatabase.TABLE_HISTORIC)
      .select()
      .where({ id_user: id })
      .andWhere({ date: date })

      console.log(result)
    return result
  }
}