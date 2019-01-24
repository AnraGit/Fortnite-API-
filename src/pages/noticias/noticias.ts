import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ForniteProvider } from '../../providers/fornite/fornite';
import moment from 'moment'

@Component({

  selector: 'page-about',
  templateUrl: 'noticias.html'

})

export class Noticias {

  news: any;

  constructor(public navCtrl: NavController, public fortniteProvider: ForniteProvider, public loadingController: LoadingController) {

    this.getNews();

  }

  getNews() {

    let loader = this.loadingController.create({
      content: "Loading..."
    });
    loader.present();
    
    return this.fortniteProvider.getNews().then(json => {

      var entries = json.entries

      entries.forEach(entry => {

        var date = moment.unix(entry.time).format();
        var dif = moment(date).fromNow();

        entry.time = dif

      })

      this.news = entries;
      loader.dismiss();
      return json.entries


    })

  }

}
