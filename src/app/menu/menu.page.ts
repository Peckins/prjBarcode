import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    return await loading.present();
  }

  ngOnInit() {
  }

}
