import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LazyImport, LazyImports } from './dynamic-compoents/dynamic-item';
import { DynamicService } from './dynamic.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements LazyImports {
  name = 'Angular ' + VERSION.major;
  selectedComponent = new BehaviorSubject('');
  lazyImports = this.adService.getLazyImports();
  getLazyImports() {
    return [
      new LazyImport('goodbye', import('./good-bye.component'), 'Arlequim'),
      new LazyImport('hello', import('./hello.component'), 'Anastácia'),
    ];
  }

  constructor(private adService: DynamicService) {}
}
