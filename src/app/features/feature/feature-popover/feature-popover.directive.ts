import { Directive, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { PopoverController, CardHeader } from '@ionic/angular';
import { FeaturePopoverComponent } from './feature-popover.component';

@Directive({ selector: '[appFeaturePopover]' })
export class FeaturePopoverDirective {
  @ViewChild('header') header: CardHeader;
  constructor(
    public popoverController: PopoverController,
     private el: ElementRef,
     private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  async presentPopover(ev: MouseEvent) {
    const target = this.el.nativeElement.querySelector('.test');

    const popover = await this.popoverController.create({
      component: FeaturePopoverComponent,
      event: { ...ev, target } as MouseEvent,
      mode: 'ios',
      cssClass: 'test-popover',

    });
    return await popover.present();
  }
}
