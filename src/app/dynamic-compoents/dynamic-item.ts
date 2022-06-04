export class LazyImport {
  constructor(public id: string, public src: Promise<any>, public data?: any) {}
}

export interface LazyImports {
  getLazyImports: () => Array<LazyImport>;
}
