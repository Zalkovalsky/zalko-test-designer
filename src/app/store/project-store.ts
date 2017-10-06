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
        this.elementsSubject.next(project.elements);
    }

    getCurrent(): Project {
        return this.projectSubject.getValue();
    }

    addElement(element: BaseElement) {
        let project = this.projectSubject.getValue();
        project.elements = [...project.elements, element];

        this.elementsSubject.next([...project.elements]);
    }

    removeElement(element: BaseElement) {
        let project = this.projectSubject.getValue();

        project.elements
        .filter(x => x.questionId !== element.questionId)
        .map(x => {
            if (x.questionId > element.questionId) {
                x.questionId--;
            }
        });

        this.elementsSubject.next([...project.elements]);
    }

    updateElement(element: BaseElement) {
        let project = this.projectSubject.getValue();
        let elementIndex = project.elements.indexOf(element);
        project.elements[elementIndex] = element;
        this.elementsSubject.next([...project.elements]);
    }

    getAllElements() {
        return this.elementsSubject.getValue();
    }
}
