import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-main-cover-left',
  templateUrl: './main-cover-left.component.html',
  styleUrls: ['./main-cover-left.component.scss']
})

/** 
 * A class that defines the current value of bitcoin in the United States currency,
 * This web application allows you to convert a bitcoin amount to different currencies,
 * @author Felipe Vergara
 * @version 1.0, 09/02/2019
 */
export class MainCoverLeftComponent implements OnInit {

  public priceUSD: any;
  public lastUpdate: any;

  //Constructor that uses the application service.
  constructor(private service: DataService) { }

  /**
    * Makes a call to a service method to obtain API information,
    * Iterate the object to find out your size and then get the last value and date of the US currency,
    * Finally the obtained values are assigned to the global variables that will be used in the HTML.
    */
  public getInformation(): void {
    this.service.getCurrencies().subscribe((data: any) => {
      for (let key in data) {
        let value = data[key];
        
        for (let i = 0; i < value.length; i++) {
          if (value[i].code === 'USD') {
            this.priceUSD = value[i].price;
            this.lastUpdate = value[i].lastUpdate;
          }
        }
      }
    });
  }

  ngOnInit() {
    this.getInformation();
  }

}
