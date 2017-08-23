import { Component, Input, ElementRef, Renderer, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FontSizeBroadcasterService } from './../services/font-size-broadcaster.serivce';

@Component({
    selector: 'adjustable-text-field',
    template: `<span>{{text}}</span>`
})
export class AdjustableTextFieldComponent implements OnDestroy {
    @Input() text: string;

    sizeChangesSubscription: Subscription;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        private fontSizeBroadcasterService: FontSizeBroadcasterService) {
            this.sizeChangesSubscription = this.fontSizeBroadcasterService.gridElementFontSizeObservable.subscribe(size => {
                this.changeFontSize(size);
            });
        }

    changeFontSize(size: number) {
        let styleExpr = `${size}px`;
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'font-size', styleExpr);
    }

    ngOnDestroy() {
        this.sizeChangesSubscription.unsubscribe();
    }
}
