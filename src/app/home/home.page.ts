import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import * as e from 'express';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private socialSharing: SocialSharing) {}
  
  shareViaTwitter() {
    this.socialSharing.shareViaTwitter('ayo bergabung','https://wwww.ut.ac.id/en')
    .then(response => {
      console.log(response);
    })
    .catch(e =>{
      console.log(e)
    });
  }

  shareViaFacebook() {
    this.socialSharing.shareViaFacebook('ayo bergabung','https://wwww.ut.ac.id/en')
    .then(response=>{
      console.log(response);
    })
    .catch(e =>{
      console.log(e)
    });
  }
 
 shareViaWhatsApp() {
    this.socialSharing.shareViaWhatsApp('ayo bergabung','https://www.ut.ac.id/sites/all/files/Logo-UT_03.png','https://wwww.ut.ac.id/en')
    .then(response =>{
      console.log(response);
    })
    .catch(e =>{
      console.log(e)
    });
}
shareViaWhatsAppToPhone() {
  this.socialSharing.shareViaWhatsAppToPhone('+6285256029101','bergabung','https://wwww.ut.ac.id/en')
  .then(response =>{
    console.log(response);
  })
  .catch(e =>{
    console.log(e)
  });
}
}