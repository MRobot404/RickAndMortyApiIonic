import { Component } from '@angular/core';
import { AlertController, Platform, IonRouterOutlet} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private alertController: AlertController
  ) {}

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.backButtonAlert();
    });
  }

  async backButtonAlert() {
    const alert = await this.alertController.create({
      message: 'Acabas de presionar el boton de retroceso',
    });
    await alert.present();
  }
}
