import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-navbar',
  templateUrl: './modal-navbar.component.html',
  styleUrls: ['./modal-navbar.component.scss'],
})

export class ModalNavbarComponent {

  @Input() title: string;

  constructor(public modal: ModalController) { }

  closeModal() {
    this.modal.dismiss();
  }

}
