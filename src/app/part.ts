import {Model} from "./model";

export interface Part{
  id: number;
  addDate: Date;
  description: string;
  disable: boolean;
  minimumPrice: number;
  publicPrice: number;
  reference: string;
  serialNumber: string;
  stock: number;
  model: Model;
 }
