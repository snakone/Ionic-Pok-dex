import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { ModalNavbarComponent } from './components/modal-navbar/modal-navbar.component';

@NgModule({
  declarations: [
    ModalNavbarComponent,
    FilterModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule
  ],
  entryComponents: [FilterModalComponent]
})

export class ModalsModule { }
