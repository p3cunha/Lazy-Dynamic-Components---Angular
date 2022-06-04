import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicService } from './dynamic.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  selectedComponent = new BehaviorSubject('');
  lazyImports = this.adService.getLazyImports();

  constructor(private adService: DynamicService) {}
}
