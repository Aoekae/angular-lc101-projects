import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinksTitle: string = "My favorite Links:"
  favLinks: string [] = ["https://www.w3schools.com/", "https://education.launchcode.org/"]

  constructor() { }

  ngOnInit() {
  }

}
