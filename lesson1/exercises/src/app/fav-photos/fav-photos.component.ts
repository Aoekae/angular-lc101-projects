import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = '../../assets/images/image0.jpg';
  image2 = '../../assets/images/image1.jpg';
  image3 = '../../assets/images/image2.jpg';

  constructor() { }

  ngOnInit() {
  }

}