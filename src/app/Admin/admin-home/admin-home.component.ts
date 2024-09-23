import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  MoviesList: any[] = []

  constructor(private http: HttpClient){

  }

  getMovies(){
    this.http.get("http://127.0.0.1:8000/allMovies/").subscribe((result:any)=>{
      this.MoviesList = result;
      console.log(this.MoviesList)
    })
  }



}
