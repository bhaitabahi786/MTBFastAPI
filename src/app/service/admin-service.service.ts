import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient ) { 

  }

  // Add movie function

  async addMovieS(MovieData: any){

    try {
      const response = await this.http.post("http://127.0.0.1:8000/addMovies/", MovieData)
      console.log('Movie added successfully:', response);
      return response;
    } catch (error) {
      console.error('Error adding movie:', error);
      throw error;
    }
  }


  async addPlaceS(placeData: any){

    try {
      
      const response = await this.http.post("http://127.0.0.1:8000/addPlatform/", placeData).subscribe((res)=> {
        // alert(res)

      })
      // console.log('place added successfully:', response);
      // return response;
    } catch (error) {
      console.error('Error adding place:', error);
      throw error;
    }
  }

  // getMoviesS(){
  //   this.http.get("http://127.0.0.1:8000/allMovies/").subscribe((result:any)=>{
  //     this.MoviesListS = result;
  //     console.log(this.MoviesListS)
  //   })
  //   return this.MoviesListS
  // }

  //  making the data of the function as observable so that in the function we are calling it will be on time updated.
  
  getMoviesS(): Observable<any[]> {
    return this.http.get<any[]>("http://127.0.0.1:8000/allMovies/");
  }
  
  getPlacesS(): Observable<any[]> {
    return this.http.get<any[]>("http://127.0.0.1:8000/allPlaces/");
  }
  
}


