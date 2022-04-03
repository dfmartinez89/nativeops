import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  photos: any[] = [
    {
      id: 1,
      name: 'Han',
      text: 'Look, kid...',
      src: '../../assets/img/avatar-han.png',
    },
    {
      id: 2,
      name: 'Rey',
      text: 'I can handle myself',
      src: '../../assets/img/avatar-rey.png',
    },
    {
      id: 3,
      name: 'Luke',
      text: 'Your thoughts betray you',
      src: '../../assets/img/avatar-luke.png',
    },
    {
      id: 4,
      name: 'Leia',
      text: "You're My Only Hope",
      src: '../../assets/img/avatar-leia.png',
    },
    {
      id: 5,
      name: 'Yoda',
      text: 'Size matters not',
      src: '../../assets/img/avatar-yoda.png',
    },
  ];
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    await modal.present();
  }
}
