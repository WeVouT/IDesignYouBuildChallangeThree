import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() public Price: string;
  @Input() public ImgPath: string;
  constructor() { }

  ngOnInit(): void {
  }

}
