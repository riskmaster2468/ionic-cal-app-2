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

  async onClickCal(Set,Plus) {
    let url = "https://nextflow-node-calculator-api.azurewebsites.net/calculator/plus";
    
    let response = await<any> this.http.post(url,{}).toPromise();

    // console.log('Set',Set,'Plus',Plus);
  }

}
