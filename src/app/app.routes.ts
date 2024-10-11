import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { CreateMovieComponent } from './Admin/create-movie/create-movie.component';
import { CreatePlaformComponent } from './Admin/create-plaform/create-plaform.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminHomeComponent },
    { path: 'admin/CM', component: CreateMovieComponent },
    { path: 'admin/CP', component: CreatePlaformComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

  