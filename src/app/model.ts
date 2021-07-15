import {Brand} from "./brand";

export interface Model{
  id: number;
  name: String;
  addDate : Date;
  disable: boolean;
  year: number;
  brand: Brand;


}
