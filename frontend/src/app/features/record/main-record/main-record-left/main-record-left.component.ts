import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  position: number;
  currency: string;
  price: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-main-record-left',
  templateUrl: './main-record-left.component.html',
  styleUrls: ['./main-record-left.component.scss']
})
export class MainRecordLeftComponent implements OnInit {

  public obj: any = [];
  public displayedColumns: string[] = ['position', 'currency', 'price', 'date'];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Constructor that uses the application service.
  constructor(private service: DataService) { }

  /**
   * Get all the records of: code, price, lastUpdate, to store them all in one object.
   */
  public record(): void {
    this.service.myMethod$.subscribe((data) => {
      
      let code: string;
      let price: string;
      let lastUpdate: string;

      for(let key in data) {
        let value = data[key];

        for(let i = 0; i < value.length; i++) {
          if(value[i].code === 'USD') {
            code = value[i].code;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;
            
            this.obj.push({ code: code, price: price, lastUpdate: lastUpdate });
            ELEMENT_DATA.push({ position: (i+1), currency: code, price: price, date: lastUpdate });

          } else if (value[i].code === 'CLP') {
            code = value[i].code;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;
            
            this.obj.push({ code: code, price: price, lastUpdate: lastUpdate });
            ELEMENT_DATA.push({ position: (i+1), currency: code, price: price, date: lastUpdate });

          } else if (value[i].code === 'EUR') {
            code = value[i].code;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;
            
            this.obj.push({ code: code, price: price, lastUpdate: lastUpdate });
            ELEMENT_DATA.push({ position: (i+1), currency: code, price: price, date: lastUpdate });

          } else if (value[i].code === 'BRL') {
            code = value[i].code;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;
            
            this.obj.push({ code: code, price: price, lastUpdate: lastUpdate });
            ELEMENT_DATA.push({ position: (i+1), currency: code, price: price, date: lastUpdate });

          } else if (value[i].code === 'CNY') {
            code = value[i].code;
            price = value[i].price;
            lastUpdate = value[i].lastUpdate;
            
            this.obj.push({ code: code, price: price, lastUpdate: lastUpdate });
            ELEMENT_DATA.push({ position: (i+1), currency: code, price: price, date: lastUpdate });

          }
        }
      }
    });
  }

  ngOnInit() {
   this.record();
   this.dataSource.paginator = this.paginator;
  }

}
