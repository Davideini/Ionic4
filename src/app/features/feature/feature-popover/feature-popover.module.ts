import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePopoverComponent } from './feature-popover.component';
import { IonicModule } from '@ionic/angular';
import { FeaturePopoverDirective } from './feature-popover.directive';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FeaturePopoverComponent, FeaturePopoverDirective],
  exports: [FeaturePopoverDirective],
  entryComponents: [FeaturePopoverComponent]
})
export class FeaturePopoverModule { }
