import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import { ElementType } from './../models/element-type';

@Injectable()
export class NewElementService {

    private newElementAdded = new Subject<ElementType>();

    newElementAddedObservable = this.newElementAdded.asObservable();

    constructor() {
        console.log('initialized NewElemenSvc');
    }
    add(element: ElementType) {
        console.log('adding:'+element);
        this.newElementAdded.next(element);
    }
}
