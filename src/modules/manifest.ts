export interface RouteMeta {
  layout: string
}

export interface Route {
  path: string;
  name: string;
  meta?: RouteMeta;
  component: string;
}

export interface Argument {
  name: string;
  type: string;
  description: string;
  isPrivate: boolean
}

export interface Content {
  matchRegex: string;
  replace: string;
}

export interface File {
  source: string;
  target: string;
  content: Array<Content>;
}

export interface Package {
  dependencies: string[];
  devDependencies: string[];
}

export interface Manifest {
  version: number;
  name: string;
  description: string;
  sourceDirectory: string;
  installDirectory: string;
  arguments: Array<Argument>;
  files: Array<File>;
  packages?: Partial<Package>;
  moduleImports: string[];
  installWithinFolder: boolean;
}
