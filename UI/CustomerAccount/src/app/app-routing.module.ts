import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './Components/addcustomer/addcustomer.component';
import { DisplayComponentsComponent } from './Components/display-components/display-components.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'create', component: AddcustomerComponent },
  { path: 'display', component: DisplayComponentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
