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
  // @Input() selectedAntiHero: AntiHero | null = null;
  // @Output() action = new EventEmitter();
  // form: FormGroup;
  title = 'OpenRestaurant';
  restaurantName: string = 'TexasMexas';
  restaurantCapacity: number = 142;
  currentOccupancy: number = 65;
  currentOccupancyPercentaage: number = (this.currentOccupancy / this.restaurantCapacity) * 100
  // isFull: boolean = false;
  isFullString: string = "Not Yet";
  constructor() {
    
  }

  ngOnInit(): void{
    this.checkCapacity();
  }

  checkCapacity() {
    if (this.currentOccupancy >= this.restaurantCapacity) {
      // this.isFull = true;
      this.isFullString = "We've hit capacity";
    }
    // if(this.isFull){
    //   this.isFullString = "We've hit capacity";
    // }
  }

}
