import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-add-price-and-time',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-price-and-time.component.html',
  styleUrl: './add-price-and-time.component.css'
})
export class AddPriceAndTimeComponent {

  @Input() movieIdData: any = []

  priceTimeD: any = {
    "movieID": 0,
    "placeID": 0,
    "price": 0,
    "time": "",
    "date": ""  // format 2024-10-11
  }

  placeListS: any[] = []

  constructor(private myService: HttpClient,private adService: AdminServiceService){
    this.getP()
  }

  // code to get places from service

  getP(){
    this.adService.getPlacesS().subscribe((data) => {
      console.log("data GP : ",data);
      this.placeListS = data
    });

  }

  // function to add price time data

  async addPTData(){

    try{

      this.priceTimeD.movieID = this.movieIdData.id;
      var pN = Number(this.priceTimeD.placeID)
      this.priceTimeD.placeID = pN
      // console.log("Addpt : ",typeof this.priceTimeD.placeID);
      
      const data = this.adService.addPTDataS(this.priceTimeD)
      this.priceTimeD.movieID = "";
      this.priceTimeD.placeID = "";
      this.priceTimeD.price = "";
      this.priceTimeD.time = "";
      this.priceTimeD.date = "";

      console.log("Data added ");

    }catch(error){
      console.log("addPTData error ",error)
    }
  }

}
