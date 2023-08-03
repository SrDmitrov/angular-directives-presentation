import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ClassComponent,
  CustomComponent,
  ForComponent,
  IfComponent,
  ModelComponent,
  StyleComponent,
  SwitchComponent,
} from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'if' },
  { path: 'if', component: IfComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'for', component: ForComponent },
  { path: 'style', component: StyleComponent },
  { path: 'class', component: ClassComponent },
  { path: 'model', component: ModelComponent },
  { path: 'custom', component: CustomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
