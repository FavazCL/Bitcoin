import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currencies: any;
  public myMethod$: Observable<any>;
  private myMethodSubject = new BehaviorSubject<any>("");
  private URL = "http://localhost:1337/v1/currencies";

  //Constructor that uses the application service.
  constructor(private http: HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  /**
   * Data obtained from the main-cover-right component.
   * @param data Price, value, lastUpdate of the different currencies.
   */
  public record(data):void {
    this.myMethodSubject.next(data);
  }

  /**
   * Call to the api to obtain the data.
   * @returns data of the api.
   */
  public getCurrencies() {
    return this.http.get(this.URL);
  }

  /**
   * Call to api to put the data.
   */
  public postCurrency() {
    // To do
  }
  
  /**
   * Call to api to update the data.
   */
  public putCurrency() {
    // To do
  }

  /**
   * Call to api to delete the data.
   */
  public deleteCurrency() {
    // To do
  }

}
