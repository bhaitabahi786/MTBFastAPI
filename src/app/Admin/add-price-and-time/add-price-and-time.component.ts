import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    "time": "string",
    "date": "2024-10-11"  // format 
  }



}
