import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   constructor() { }

   ngOnInit() { }

   activate() {


      if (this.inactiveCopper){
         this.inactiveCopper = !this.inactiveCopper
      }
      if (this.inactiveSilver) {
         this.inactiveSilver = !this.inactiveSilver
      }
      if (this.inactiveGold) {
         this.inactiveGold = !this.inactiveGold
      }
   }

}
