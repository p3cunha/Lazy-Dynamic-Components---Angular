import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Goodbye {{data}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class GoodByeComponent {
  @Input() data: string;
}

@NgModule({
  imports: [CommonModule],
  exports: [GoodByeComponent],
  declarations: [GoodByeComponent],
})
export class GoodbyeModule {
  constructor() {
    console.log('module lazy loaded: ', this);
  }
}
