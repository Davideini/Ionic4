import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePopoverComponent } from './feature-popover.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FeaturePopoverComponent],
  entryComponents: [FeaturePopoverComponent]
})
export class FeaturePopoverModule { }
