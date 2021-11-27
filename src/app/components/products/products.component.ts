import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public chair1= "/assets/img/chair1.png";
  public chair2= "/assets/img/chair2.png";
  public chair3 ="/assets/img/chair3.png";
  public couch= "/assets/img/couch.png";
  public lamp= "/assets/img/lamp.png";
  public waredrobe= "/assets/img/waredrobe.png";
  constructor() { }

  ngOnInit(): void {
  }

}
