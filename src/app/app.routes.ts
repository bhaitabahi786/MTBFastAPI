import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminHomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

  