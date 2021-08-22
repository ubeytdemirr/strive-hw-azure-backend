export type feature =
  // MANAGEMENT FEATURES
  'USER_MANAGEMENT' | 'TEST';
// USER FEATURES

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
