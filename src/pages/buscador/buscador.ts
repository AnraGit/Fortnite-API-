import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ForniteProvider } from '../../providers/fornite/fornite';



@Component({
  selector: 'page-home',
  templateUrl: 'buscador.html'
})
export class Buscador {

  shop: any;

  constructor(public navCtrl: NavController, public fortniteProvider: ForniteProvider, public loadingController: LoadingController) {

    this.getStore();

  }

  getStore() {
    return this.fortniteProvider.getStore().then(json => {

      let loader = this.loadingController.create({
        content: "Loading..."
      });
      loader.present();

      var store = json.items

      this.shop = store;



      loader.dismiss();
      return json.items
    })
  }

}
