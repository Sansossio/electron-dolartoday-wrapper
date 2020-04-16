export interface ICurrency {
  data: {
    price: number
    transfer: number
    cash: number
    average: number
    cencoex?: number
    sicad1: number
    sicad2: number
    bitcoin: number
  }
  name: string
  rate?: number
}
