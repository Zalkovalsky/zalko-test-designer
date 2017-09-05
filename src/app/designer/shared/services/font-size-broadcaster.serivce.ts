import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import { ElementType } from '../../../models/element-type';

@Injectable()
export class FontSizeBroadcasterService {
    private gridElementsFontSizeChanged = new Subject<number>();
    private headerElementsFontSizeChanges = new Subject<number>();

    gridElementFontSizeObservable = this.gridElementsFontSizeChanged.asObservable();
    headerElementFontSizeObservable = this.headerElementsFontSizeChanges.asObservable();

    changeGridElementsFontSize(size: number) {
        if (size <= 0) {
            throw Error('Value has to be non-negative');
        }
        this.gridElementsFontSizeChanged.next(size);
    }

    changeHeaderElementsFontSize(size: number) {
        if (size <= 0) {
            throw Error('Value has to be non-negative');
        }
        this.headerElementsFontSizeChanges.next(size);
    }
}
