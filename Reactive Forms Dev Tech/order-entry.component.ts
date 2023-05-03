import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'order-entry',
    templateUrl: './order-entry.component.html',
    styleUrls: ['./order-entry.component.sass'],
})
export class OrderEntry implements OnInit {
    powerForArray: FormArray;
    constructor() {
        this.powerFormArray =
            this.foodForm.get("entry") as FormArray;
    }

    ngOnInit() {
        foodForm = new FormGroup({
            // reference from food component
            /*
            foodForm = new FormGroup({
                firstName: new FormControl(''),
                lastName: new FormControl(''),
                knownAs: new FormControl(''),
                address: new FormControl({
                    street: new FormControl(''),
                    city: new FormControl(''),
                    country: new FormControl('')

                })
            });
            */
            entry: new FormArray([])
        })
    }
    // now a method to add and remove an instance of a form control in the form array
    addOrder() {
        (this.form.get("order") as FormArray).push(new FormControl());
    }
    deleteOrder(i: number) {
        (this.form.get("order") as FormArray).removeAt(i);
    }
}