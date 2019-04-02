export type ObjectContainerFetcher<T> = (id: number) => Promise<T>;
export enum ObjectContainerState {
  None,
  Error,
  Loading,
  Done
}
export interface Item {
  id: number;
  name: string;
}
