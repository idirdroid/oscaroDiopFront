import {Brand} from "./brand";

export interface Model{
  id: number;
  name: string;
  addDate : Date;
  disable: boolean;
  year: number;
  brand: Brand;


}
