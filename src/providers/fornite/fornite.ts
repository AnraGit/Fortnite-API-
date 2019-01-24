import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ForniteProvider {


  apiUrlGetNews = 'https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get';
  apiUrlGetChallenges = "https://fortnite-public-api.theapinetwork.com/prod09/challenges/get";
  apiUrlGetStore = "https://fortnite-public-api.theapinetwork.com/prod09/store/get"


 

  constructor(public http: HttpClient) {
    console.log('Hello ForniteProvider Provider');
  }

 
  getNews() {

    return fetch(this.apiUrlGetNews, {
      method: 'POST',
      headers: {
        'Authorization': '883b3a4ded2b3aa99d98cbc640214063'
      },
     
    }).then(response => response.json())
    
  }

  getChallengesBySeason(){
    
    return fetch(this.apiUrlGetChallenges+'?season=current',{
      method: 'POST',
      headers: {
        "content-type":  'application/x-www-form-urlencoded',
        'Authorization': '883b3a4ded2b3aa99d98cbc640214063',
      },
      
       
    }).then(response => response.json())

  }

  getStore(){
    return fetch(this.apiUrlGetStore,{
      method: 'POST',
      headers: {
        'Authorization': '883b3a4ded2b3aa99d98cbc640214063',
      },
    }).then (response => response.json())
  }

}








