import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  nombreUser: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'OK',
        role: 'success',
        cssClass: 'success',
        handler: (blah) => {
          console.log('Confirm Success: OK!');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'danger',
        handler: (blah) => {
          console.log('Confirm Cancel: OK!');
        }
      }]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Formulario',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingrese su nombre completo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.nombreUser = data.nombre;            
          }
        }
      ]
    });

    await alert.present();
  }  
}
