import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { AntiHero } from '../../models/anti-hero.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @Input() selectedId = '';
  @Input() actionButtonLabel: string = 'Check Capacity';
  // @Output() action = new EventEmitter();
  // form: FormGroup;
  title = 'OpenRestaurant';
  restaurantName: string = 'Texas Mexas';
  restaurantCapacity: number = 142;
  currentOccupancy: number = 65;
  currentOccupancyPercentaage: number = (this.currentOccupancy / this.restaurantCapacity) * 100
  isFullString: string = "Not Yet";

  constructor() {
    
  }

  ngOnInit(): void{
    this.checkCapacity();
  }

  checkCapacity() {
    if (this.currentOccupancy >= this.restaurantCapacity) {
      this.isFullString = "We've hit capacity";
    }
  }

}
