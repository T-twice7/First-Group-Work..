import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import Programa from '../home/Carray';
import {CodeD} from '../home/Cclass';

/**
 * Generated class for the CodersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coders',
  templateUrl: 'coders.html',
})
export class CodersPage {
   display = true;
  
   count=0;
 code = Programa;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
    this.count = this.code.length;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CodersPage');
  }

  showform()
  {
this.display = true;
    
  }
  close()
  {
    this.display = false;
  }
  showAlert() 
  {
    const alert = this.alertCtrl.create({
      title: 'Add person',
      // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      inputs: [
        {
          name: 'Name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'Surname',
          type: 'text',
          placeholder: 'Surname'
        },
        {
          name: 'Cntx',
          type: 'text',
          placeholder: 'Contact'
        },
        {
          name: 'Email',
          type: 'mail',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          },
        },
        {
        text: 'Save',
        handler: data => {

          let a = new CodeD(data.Name, data.Surname, data.Cntx,data.Email);
    this.code.push(a);
    this.count = this.code.length;
          // console.log('Saved clicked'+ a );
        },
      },
    ],
    });
    alert.present();
  };

  Results(i) 
   {
    const prompt = this.alertCtrl.create({
      // title: 'User',
      message: "You have clicked a person, Choose action to take below",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Delete',
          handler: data=> {
            this.delet(i);
            console.log('Delete clicked');
            
          },
        },
        {
          text: 'Update',
          handler: data => {
            this.ShowUp(i);
          },
        },
      ],
    });
    prompt.present();
  }

  ShowUp(i)
  {
    const alert = this.alertCtrl.create({
      title: 'Update the details',
      inputs: [
        {
          name:'Name',
          placeholder:'Name',
          value:Programa[i].Name
        },
        {
          name:'Surname',
          placeholder:'Surname',
          value:Programa[i].Surname
        },
        {
          name:'Cntx',
          placeholder:'Contact',
          value: Programa[i].Cntx
        },
        {
          name:'Email',
          placeholder:'Email',
          value:Programa[i].Email
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          },
        },
        {
        text: 'Save',
        handler: data => {
          let a = new CodeD(data.Name, data.Surname, data.Cntx,data.Email);

    this.code[i]=(a);
    // this.presentSuccessful();
          // console.log('Saved clicked'+ a );
        },
      },
    ],
    });
    alert.present();
  }

  delet(i)
  {
    this.code.splice(i,1);
    this.count = this.code.length;
  }
}
