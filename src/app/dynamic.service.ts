import { Injectable } from '@angular/core';
import { LazyImport } from './dynamic-compoents/dynamic-item';

@Injectable()
export class DynamicService {
  getLazyImports() {
    return [
      new LazyImport('goodbye', import('./good-bye.component'), 'Arlequim'),
      new LazyImport('hello', import('./hello.component'), 'Anastácia'),
    ];
  }
}
