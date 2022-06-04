import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicModule } from './dynamic-compoents/dynamic.component';
import { DynamicService } from './dynamic.service';

@NgModule({
  imports: [BrowserModule, FormsModule, DynamicModule],
  declarations: [AppComponent],
  providers: [DynamicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
