import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { IonicModule } from '@ionic/angular';
import { FeaturePopoverModule } from './feature-popover/feature-popover.module';
import { FeatureContainersModule } from './feature-containers/feature-containers.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: FeatureComponent }
    ]),
    FeatureContainersModule
  ],
  declarations: [FeatureComponent]
})
export class FeatureModule { }
