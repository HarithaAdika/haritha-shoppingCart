import { Component, OnInit } from '@angular/core';
import {IElectronic} from './electronic';
import {ELECTRONICS} from '../ElectronicsData';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
pageTitle="Electronics List";
Electronics=ELECTRONICS;
imageWidth:number=150;
         imageMargin:number=20;
  constructor() { }

  ngOnInit() {
  }

}
