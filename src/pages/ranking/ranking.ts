import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ForniteProvider } from '../../providers/fornite/fornite';



@Component({
  selector: 'page-contact',
  templateUrl: 'ranking.html'
})
export class Ranking {

  challenges: any;
  we: any;

  constructor(public navCtrl: NavController, public fortniteProvider: ForniteProvider, public loadingController: LoadingController) {

    this.getChallenges();
   

  }

  getChallenges() {

    let loader = this.loadingController.create({
      content: "Loading..."
    });
    loader.present();

    return this.fortniteProvider.getChallengesBySeason().then(json => {

      let challenges = []

      Object.keys(json.challenges).forEach((week, index) => {
        const weekChall = { week: "Week "+(index+1), challenges: json.challenges[week] }
        challenges.push(weekChall)
      })
      

      this.challenges = challenges
      loader.dismiss();
      return challenges

    })

  }


}
