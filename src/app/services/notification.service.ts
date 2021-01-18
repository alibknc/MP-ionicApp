import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Device, LocalNotification, LocalNotificationActionPerformed, LocalNotificationEnabledResult, Plugins } from "@capacitor/core";
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private alertCtrl: AlertController) { }

  async permission(){
    await LocalNotifications.requestPermissions();
  }

  async schedule(title: string){
    await LocalNotifications.schedule({
      notifications: [
        {
          title: title,
          body: 'Ezan Vakti',
          id: 1,
          extra: {
            data: 'Pass'
          },
          iconColor: '#000FF'
        }
      ]
    })
  }
}
