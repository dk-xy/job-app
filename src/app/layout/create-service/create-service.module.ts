import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateServicePageRoutingModule } from './create-service-routing.module';

import { CreateServicePage } from './create-service.page';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ProfilPage } from '../profil/profil.page';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateServicePageRoutingModule,
    LeafletModule,
    FormsModule,
    
  ],
  declarations: [CreateServicePage]
})
export class CreateServicePageModule { }
