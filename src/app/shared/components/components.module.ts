import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared.module';
import { ModalsModule } from './modals/modals.module';

import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent,
    SplashComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ModalsModule
  ],
  exports: [
    NavbarComponent,
    LoaderComponent,
    SplashComponent
  ]
})

export class ComponentsModule { }
