export interface IFault {
  message: string;
  args?: unknown;
  type?: string;
  contents?: Array<IFault>;
}
