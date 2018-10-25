import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureItemComponent } from './feature-item/feature-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [FeatureListComponent, FeatureItemComponent],
  exports: [FeatureListComponent]
})
export class FeatureContainersModule { }
