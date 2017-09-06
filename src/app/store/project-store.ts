import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Project } from '../models/project';
import { BaseElement } from '../models/base-element';

@Injectable()
export class ProjectStore {
    private projectSubject = new BehaviorSubject<Project>(new Project());
    private elementsSubject = new BehaviorSubject<BaseElement[]>([]);

    project = this.projectSubject.asObservable();
    elements = this.elementsSubject.asObservable();

    setCurrent(project: Project): void {
        this.projectSubject.next(project);
    }

    getCurrent(): Project {
        return this.projectSubject.getValue();
    }

    addElement(element: BaseElement) {
        this.elementsSubject.next([...this.elementsSubject.getValue(), element]);
    }

    removeElement(element: BaseElement) {
        let allElements = this.elementsSubject.getValue();

        let filtered = allElements.filter(x => x.questionId !== element.questionId);

        filtered.map(x => {
            if (x.questionId > element.questionId) {
                x.questionId--;
            }
        });

        this.elementsSubject.next(filtered);
    }

    updateElement(element: BaseElement) {
        let allElements = this.elementsSubject.getValue();
        let indexOf = allElements.indexOf(element);
        allElements[indexOf] = element;
        this.elementsSubject.next([...allElements]);
    }

    getAllElements() {
        return this.elementsSubject.getValue();
    }
}
