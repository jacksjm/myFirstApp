import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public beer: any = {}

  constructor(
	  public navCtrl: NavController,
	  public navParams: NavParams,
	  public alertCtrl: AlertController,
	  public http: Http
	) {

	let url = this.navParams.get('api_url')
	let id = this.navParams.get('beer_id')

	this.http.get( url + '/beers/' + id)
			.map( response => response.json() )
			.subscribe( response => {
				this.beer = response }
			)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
