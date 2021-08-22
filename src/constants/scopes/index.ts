export type feature = 'USER_MANAGEMENT' | 'TEST';

export type role = 'SUDO' | 'ADMIN' | 'USER';

export type operation = 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';

export interface IScope {
  readonly feature: feature;
  readonly operations: readonly operation[];
}
export type scopes = readonly IScope[];
export interface IRole {
  readonly name: string;
  readonly scopes: IScope;
}
