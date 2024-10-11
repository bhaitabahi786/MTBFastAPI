import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CreateMovieComponent } from "../create-movie/create-movie.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AddPriceAndTimeComponent } from '../add-price-and-time/add-price-and-time.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [HttpClientModule, CreateMovieComponent,RouterLink,RouterLinkActive,AddPriceAndTimeComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  MoviesList: any[] = []

  constructor(private http: HttpClient){
    this.getMovies();
  }

  getMovies(){
    this.http.get("http://127.0.0.1:8000/allMovies/").subscribe((result:any)=>{
      this.MoviesList = result;
      console.log(this.MoviesList)
    })
  }

  // sending movie data to add price time 

  movieId: any[] = []

  addPriceTimeData(mID: any){
    this.movieId = mID
  }

}
