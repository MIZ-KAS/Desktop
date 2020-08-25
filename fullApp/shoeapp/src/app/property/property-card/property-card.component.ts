import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  // template: `<h1> I am a card to be designed - really </h1>`,
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  property: any = {
    "Id": 1,
    "Name": "Faded Glory Men Shoe",
    "Type": "Shoes",
    "Price": 8000
  }

}

// import { Component } from '@angular/core';

// @Component ({
//     selector: 'app-property-card',
//     template: `<h1> I am a card </h1>`,
//     style: ['h1 {font-weight: normal;}']
// }
// )
// export class propertyCardComponent {
    
// }
