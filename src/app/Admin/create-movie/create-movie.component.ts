import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../../service/admin-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterLink],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {

  movie: any = {
    name :'',
    description:'',
  }

  MoviesListS: any[] = []

  constructor(private myService: HttpClient,private adService: AdminServiceService){
    this.getM()
  }
  
  // Add movie function

  async addMovieS(){

    try {
      // let body = new FormData();
      const response = await this.myService.post("http://127.0.0.1:8000/addMovies/", this.movie).subscribe((res)=> {
        // alert(res)
        this.movie.name = "";
        this.movie.description = "";
        this.getM();

      })
      console.log('Movie added successfully:', response);
      return response;
    } catch (error) {
      console.error('Error adding movie:', error);
      throw error;
    }
  }

  getM(){
    this.adService.getMoviesS().subscribe((data) => {
      console.log("data GM : ",data);
      this.MoviesListS = data
    });

  }

}
