import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-aislogo',
  templateUrl: './aislogo.component.html',
  styleUrls: ['./aislogo.component.css']
})
export class AislogoComponent implements OnInit {

  baseUrl = environment.baseUrl;

  logoPath = '../../' + this.baseUrl + 'assets/images/logo.png'
  // logoPath = require('../../assets/images/logo.png')

  constructor() { }

  ngOnInit() {
  }

}
