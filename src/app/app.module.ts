import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  ClassComponent,
  CustomComponent,
  ForComponent,
  IfComponent,
  ModelComponent,
  StyleComponent,
  SwitchComponent,
} from './app.component';
import { CustomDirective } from './directives/custom-directive.directive';
import { FormsModule } from '@angular/forms';
import { CsButton } from './directives/custom-host-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    StyleComponent,
    ClassComponent,
    ModelComponent,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomDirective,
    CsButton,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
