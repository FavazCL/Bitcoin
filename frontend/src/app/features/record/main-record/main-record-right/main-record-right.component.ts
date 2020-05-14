import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-record-right',
  templateUrl: './main-record-right.component.html',
  styleUrls: ['./main-record-right.component.scss']
})
export class MainRecordRightComponent implements OnInit {

  public lineChart: any = [];
  public arrayUSD: any = [];
  public arrayCLP: any = [];
  public arrayEUR: any = [];
  public arrayBRL: any = [];
  public arrayCNY: any = [];

  constructor(private service: DataService) { }

  /**
   * Get all the records of price to store in one array.
   */
  public getPriceInfo(): void {
    this.service.myMethod$.subscribe((data) => {

      let price: string;

      for (let key in data) {
        let value = data[key];

        for (let i = 0; i < value.length; i++) {
          if (value[i].code === 'USD') {
            price = value[i].price;

            this.arrayUSD.push(price);

          } else if (value[i].code == 'CLP') {
            price = value[i].price;

            this.arrayCLP.push(price);

          } else if (value[i].code == 'BRL') {
            price = value[i].price;

            this.arrayBRL.push(price);

          } else if (value[i].code == 'EUR') {
            price = value[i].price;

            this.arrayEUR.push(price);

          } else if (value[i].code == 'CNY') {
            price = value[i].price;

            this.arrayCNY.push(price);

          }
        }
      }
    });
  }

  /**
   * Insert the USD currency data and create the chart.
   */
  public chartUSD(): void {
    // Line chart:
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
          "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
        datasets: [{
          label: 'Daily amounts of USD currency (February 2019)',
          data: this.arrayUSD,
          fill: false,
          lineTension: 0.3,
          borderColor: "#ffc107",
          borderWidth: 2
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  /**
   * Insert the CLP currency data and create the chart.
   */
  public chartCLP(): void {
    // Line chart:
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
          "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
        datasets: [{
          label: 'Daily amounts of CLP currency (February 2019)',
          data: this.arrayCLP,
          fill: false,
          lineTension: 0.3,
          borderColor: "#dc3545",
          borderWidth: 2
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  /**
   * Insert the BRL currency data and create the chart.
   */
  public chartBRL(): void {
    // Line chart:
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
          "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
        datasets: [{
          label: 'Daily amounts of BRL currency (February 2019)',
          data: this.arrayBRL,
          fill: false,
          lineTension: 0.3,
          borderColor: "#007bff",
          borderWidth: 2
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  /**
   * Insert the EUR currency data and create the chart.
   */
  public chartEUR(): void {
    // Line chart:
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
          "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
        datasets: [{
          label: 'Daily amounts of EUR currency (February 2019)',
          data: this.arrayEUR,
          fill: false,
          lineTension: 0.3,
          borderColor: "#28a745",
          borderWidth: 2
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  /**
   * Insert the CNY currency data and create the chart.
   */
  public chartCNY(): void {
    // Line chart:
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
          "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
        datasets: [{
          label: 'Daily amounts of EUR currency (February 2019)',
          data: this.arrayCNY,
          fill: false,
          lineTension: 0.3,
          borderColor: "#343a40",
          borderWidth: 2
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ngOnInit() {
    this.getPriceInfo();
  }

}
