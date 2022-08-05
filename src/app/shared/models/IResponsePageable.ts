import { IRepository } from "./IRepository"

export interface IResponsePageable {
    total_count: number
    incomplete_results: boolean
    items: IRepository[]
  }