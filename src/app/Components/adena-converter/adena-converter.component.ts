import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adena-converter',
  templateUrl: './adena-converter.component.html',
  styleUrls: ['./adena-converter.component.css']
})
export class AdenaConverterComponent implements OnInit {

  usdAmount: any;
  adenaAmount: any;
  adenaPrice: any;

  constructor() { }

  ngOnInit() {
    this.adenaPrice = 0.3;
  }

  public usdToAdena(usd: any){
    console.log(usd);
    this.adenaAmount = Number((usd * 1000000 / 0.3).toFixed(0)).toLocaleString();
    console.log(this.adenaAmount);
  }

  public adenaToUsd(adena: any){
    this.usdAmount = Number((adena / 1000000 * 0.3).toFixed(1)).toLocaleString();
  }
}
