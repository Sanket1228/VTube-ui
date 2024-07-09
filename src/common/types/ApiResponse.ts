import { IResponse } from "../api/types/IResponse";
import { IFault } from "./Fault";
import { IHeaders } from "./Headers";
import { IServerResponse } from "./ServerResponse";

export type ApiResponse<
  T,
  E extends IFault,
  H extends IHeaders = {}
> = IResponse<IServerResponse<T>, E, H>;
