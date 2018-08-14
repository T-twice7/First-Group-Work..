import { Component } from '@angular/core';
import { NavController, AlertController ,ModalController } from 'ionic-angular';
import { CodersPage } from '../coders/coders';

import Programa from '../home/Carray';
import {CodeD} from '../home/Cclass';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 prgrm = Programa;

 rom= true;
  constructor(public navCtrl: NavController, public alertCtrl:AlertController,public modalCtrl: ModalController) {

  }

showRom()
{
  this.rom = true;
}
hideRom()
{
  this.rom = false;
}
  view()
  {
    let profileModal = this.modalCtrl.create(CodersPage)
   profileModal.present();
  }

  
}
