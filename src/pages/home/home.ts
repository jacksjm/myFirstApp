import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url: string = 'http://locahost:3030/v1';
  public beers: Array<{}>

  constructor(
	public navCtrl: NavController,
	public http: Http) {
		this.http.get(this.url+'/beers')
			.map( response => response.json())
			.subscribe( date => {
				console.log(date)
			});
  }

  openTestPage(){
	this.navCtrl.push(TestPage)
  }
}
