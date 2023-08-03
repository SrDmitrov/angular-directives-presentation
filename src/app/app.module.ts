import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, ClassComponent, CustomComponent, ForComponent, IfComponent, ModelComponent, StyleComponent, SwitchComponent } from './app.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    IfComponent,
    SwitchComponent,
    ForComponent,
    StyleComponent,
    ClassComponent,
    ModelComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
