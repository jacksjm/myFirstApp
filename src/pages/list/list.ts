import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private url: string = 'http://localhost:3000';
  public beer = {
				  name: "",
				  price: "",
				  type: "",
				  mark: ""
				}
  constructor(
	  public navCtrl: NavController,
	  public navParams: NavParams,
	  public http: Http,
	  public toastCtrl: ToastController
	) {
  }
  putCerveja(beer){
	  let headers = new Headers;
		  headers.append('Content-Type', 'application/json')
	  let options = new RequestOptions({headers: headers})
	  this.http.post(this.url+'/beers', beer, options)
		  .map( response => {response.json()})
		  .subscribe(response => {
			let toast = this.toastCtrl.create({
				message: 'Cadastrado com sucesso',
				duration: 3000
			  });
			  toast.present();
			})
  }
}
