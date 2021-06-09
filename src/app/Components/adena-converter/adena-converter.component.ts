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
  today: any = new Date();

  constructor() { }

  ngOnInit() {
    this.getDate();
    this.adenaPrice = 0.25;
  }

  public usdToAdena(usd: any){
    console.log(usd);
    this.adenaAmount = Number((usd * 1000000 / 0.3).toFixed(0)).toLocaleString();
    console.log(this.adenaAmount);
  }

  public adenaToUsd(adena: any){
    this.usdAmount = Number((adena / 1000000 * 0.3).toFixed(1)).toLocaleString();
  }

  public getDate(){
    let dd = String(this.today.getDate()).padStart(2, '0');
    let mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = this.today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;
  }
}





