import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{data}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() data: string;
}

@NgModule({
  imports: [CommonModule],
  exports: [HelloComponent],
  declarations: [HelloComponent],
})
export class HelloModule {
  constructor() {
    console.log('module lazy loaded: ', this);
  }
}
