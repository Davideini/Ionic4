import { Directive, HostListener } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FeaturePopoverComponent } from './feature-popover.component';

@Directive({ selector: '[appFeaturePopover]' })
export class FeaturePopoverDirective {

  constructor(public popoverController: PopoverController) { }

  @HostListener('click', ['$event'])
  async presentPopover(ev: any) {
    console.log(ev);
    const popover = await this.popoverController.create({
      component: FeaturePopoverComponent,
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }
}
