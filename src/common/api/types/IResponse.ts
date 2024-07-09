import { IFault } from "../../types/Fault";
import { IHeaders } from "../../types/Headers";

export interface IResponse<T, E extends IFault, H extends IHeaders = {}> {
  data: T;
  error?: E;
  headers?: H;
}
