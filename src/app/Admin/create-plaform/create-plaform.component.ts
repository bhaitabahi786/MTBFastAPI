import { Component } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-plaform',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterLink],
  templateUrl: './create-plaform.component.html',
  styleUrl: './create-plaform.component.css'
})
export class CreatePlaformComponent {

  place: any = {
    name :'',
    address:'',
  }

  PlaceListS: any[] = []

  constructor(private adService: AdminServiceService){
    this.getPlaces()
  }
  
  // Add platform function

  async addPlace(){

    try {
      const data = this.adService.addPlaceS(this.place);
      console.log("place added ");
      this.place.name = "";
      this.place.address = "";
      this.getPlaces();
      
    } catch(error){
      console.log("add place error ",error)
    }
  }

  getPlaces(){
    this.adService.getPlacesS().subscribe((data) => {
      console.log("data GM : ",data);
      this.PlaceListS = data
    });

  }

}
