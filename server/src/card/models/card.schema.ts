export interface ICardInput {
  face: string;
  backface: string;
}

export interface ICardDB extends ICardInput {
  id: number;
}
