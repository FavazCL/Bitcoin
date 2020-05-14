import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-main-cover-right',
  templateUrl: './main-cover-right.component.html',
  styleUrls: ['./main-cover-right.component.scss']
})

/** 
 * A class that defines the current value of bitcoin in different currencies,
 * This web application allows you to convert a bitcoin amount to different currencies,
 * @author Felipe Vergara
 * @version 1.0, 09/02/2019
 */
export class MainCoverRightComponent implements OnInit {

  public prices: any;
  public priceUSD: string;
  public priceCLP: string;
  public priceEUR: string;
  public priceBRL: string;
  public priceCNY: string;
  public selectedCurrency: string = '';
  public selectedBitcoins: string = '';
  public result: number = 0;
  public showAlert: boolean = false;
  public objCLP: any = [];
  public objUSD: any = [];
  public objEUR: any = [];
  public objBRL: any = [];
  public objCNY: any = [];
  public dataCurrencies: Array<any> = [];

  //Constructor that uses the application service.
  constructor(public service: DataService) {
    this.service.record(this.dataCurrencies);
  }

  /**
    * Makes a call to a service method to obtain API information,
    * Iterate the object to find out its size and then get,
    * id, code, price and lastUpdate of each of the currencies.
    * Finally the obtained values are assigned to the global variables and are inserted in their respective object.
    */
  public getInfo(): void {
    this.service.getCurrencies().subscribe((data: any) => {

      let id: string;
      let code: string;
      let price: string;
      let lastUpdate: string;

      for (let key in data) {

        let value = data[key];

        for (let i = 0; i < value.length; i++) {

          if (value[i].code === 'USD') {
            code = value[i].code;
            id = value[i].id;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;

            this.objUSD.push({ id: id, code: code, price: price, lastUpdate: lastUpdate });

          } else if (value[i].code === 'CLP') {
            code = value[i].code;
            id = value[i].id;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;

            this.objCLP.push({ id: id, code: code, price: price, lastUpdate: lastUpdate });

          } else if (value[i].code === 'EUR') {
            code = value[i].code;
            id = value[i].id;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;

            this.objEUR.push({ id: id, code: code, price: price, lastUpdate: lastUpdate });
            
          } else if (value[i].code === 'BRL') {
            code = value[i].code;
            id = value[i].id;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;

            this.objBRL.push({ id: id, code: code, price: price, lastUpdate: lastUpdate });

          } else if (value[i].code === 'CNY') {
            code = value[i].code;
            id = value[i].id;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;

            this.objCNY.push({ id: id, code: code, price: price, lastUpdate: lastUpdate });
            
          }
        }
      }
    });
  }

  /**
   * Gets the selected currency.
   * @param event Manipulate and obtain the selected currency.
   */
  public selectCurrency(event: Event): void {
    this.selectedCurrency = (<HTMLSelectElement>event.target).value;
    this.prices = '';
  }

  /**
   * Get the amount of bitcoins from the input.
   * @param event Manipulate and get the amount of bitcoins to convert.
   */
  public selectBitcoin(event: Event): void {
    this.selectedBitcoins = (<HTMLInputElement>event.target).value;
  }

  /**
   * Get the last value of each currency and make the conversion.
   */
  public conversion(): void {

    let multiplication: number;
    let bitcoins = Number(this.selectedBitcoins);
    let quantityCLP = Object.keys(this.objCLP).length;
    let quantityUSD = Object.keys(this.objUSD).length;
    let quantityEUR = Object.keys(this.objEUR).length;
    let quantityBRL = Object.keys(this.objBRL).length;
    let quantityCNY = Object.keys(this.objCNY).length;

    this.priceCLP = this.objCLP[quantityCLP - 1].price;
    this.priceUSD = this.objUSD[quantityUSD - 1].price;
    this.priceEUR = this.objEUR[quantityEUR - 1].price;
    this.priceBRL = this.objBRL[quantityBRL - 1].price;
    this.priceCNY = this.objCNY[quantityCNY - 1].price;

    if (this.selectedBitcoins === '' || this.selectedCurrency === '') {

      this.showAlert = true;
      this.prices = '';

    } else {
      
      this.showAlert = false;
      
      switch (this.selectedCurrency) {

        case "CLP": {
          let clp = Number(this.priceCLP);
          multiplication = (clp * bitcoins);
          this.prices = multiplication;
          break;
        }

        case "USD": {
          let usd = Number(this.priceUSD);
          multiplication = (usd * bitcoins);
          this.prices = multiplication;
          break;
        }

        case "EUR": {
          let eur = Number(this.priceEUR);
          multiplication = (eur * bitcoins);
          this.prices = multiplication;

          break;
        }

        case "BRL": {
          let brl = Number(this.priceBRL);
          multiplication = (brl * bitcoins);
          this.prices = multiplication;
          break;
        }

        case "CNY": {
          let cny = Number(this.priceCNY);
          multiplication = (cny * bitcoins);
          this.prices = multiplication;
          break;
        }

        default: {
          //To do
          break;
        }
      }
    }
  }

  /**
   * Shows the value of the conversion.
   * @returns The value final of the conversion.
   */
  public onClick(): number {
    return this.prices = this.result;
  }

  /**
   * Insert the objects into an array.
   */
  public setInfo(): void {
    this.dataCurrencies.push(this.objUSD, this.objCLP, this.objEUR, this.objBRL, this.objCNY);
  }

  ngOnInit() {  
    this.getInfo();
    this.setInfo();
  }

}
