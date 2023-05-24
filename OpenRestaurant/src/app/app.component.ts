import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { AntiHero } from '../../models/anti-hero.interface';

type Restaurant = 'Texas Mex-as' | 'Boston' | 'New York' | 'Philly';
enum RestaurantCoreFood {
  bigTexasSteak,
  bigSalad,
  bigPhilly,
  bigBostonCreamPie,
  bigNewYorkPizza,
}
enum RestaurantPricing {
  water = 0,
  bigTexasSteak = 5,
  bigSalad = 3,
  bigPhilly = 4,
  bigBostonCreamPie = 2,
  bigNewYorkPizza = 1.99,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  @Input() selectedId = '';
  @Input() actionButtonLabel: string = 'Check Capacity';
  // @Output() action = new EventEmitter();
  // form: FormGroup;
  title = 'OpenRestaurant';
  myCoreFood: RestaurantCoreFood = RestaurantCoreFood.bigTexasSteak;
  myPricing: RestaurantPricing = RestaurantPricing.bigTexasSteak;
  restaurantType: Restaurant = 'Texas Mex-as';
  restaurantName: string = 'Texas Mex-as';
  restaurantCapacity: number = 142;
  currentOccupancy: number = 65;
  currentOccupancyPercentage: number = Math.abs(
    Math.round((this.currentOccupancy / this.restaurantCapacity) * 100)
  );
  isFullString: string = 'Not Yet';

  constructor() {}

  ngOnInit(): void {
    this.checkCapacity();
  }

  checkCapacity() {
    if (this.currentOccupancy >= this.restaurantCapacity) {
      this.isFullString = "We've hit capacity";
    }
  }
}

// export
function RestaurantPricingCalculator(
  RestaurantPricing1: any,
  RestaurantPricing2: any,
  tax: any,
  // ..._fees: any,
  tip?: any
): any {
  // throw new Error('Function not implemented.');
  return RestaurantPricing1 + RestaurantPricing2 + tax + tip;
}
