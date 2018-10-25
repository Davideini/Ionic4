import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureItemComponent } from './feature-item/feature-item.component';
import { IonicModule } from '@ionic/angular';
import { FeaturePopoverModule } from '../feature-popover/feature-popover.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FeaturePopoverModule
  ],
  declarations: [FeatureListComponent, FeatureItemComponent],
  exports: [FeatureListComponent]
})
export class FeatureContainersModule { }
