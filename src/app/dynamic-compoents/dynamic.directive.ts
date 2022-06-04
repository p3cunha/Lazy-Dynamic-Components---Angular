import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicHost]',
})
export class DynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
