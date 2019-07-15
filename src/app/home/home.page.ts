import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http:HttpClient) {
    // this.onClickCal();
  }

  onClickCal(Set,Plus) {
    // let respones = await<any> this.http.get(https://nextflow-node-calculator-api.azurewebsites.net/calculator/plus)
    console.log('Set',Set,'Plus',Plus);
  }

}
