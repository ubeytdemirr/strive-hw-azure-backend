 
import { IScope } from "./scopes";
export interface IUser  {
  email: string;
  password: string;
  scopes: IScope[];
}
