import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseElement } from '../../models/base-element';
import { ElementType } from '../../models/element-type';
import { NewElementService } from './../shared/services/new-element.service';
import { Subscription } from 'rxjs/Subscription';
import { ElementFactoryService } from './../../core/services/element-factory.service';
import { ProjectStore } from '../../store/project-store';
import { Project } from '../../models/project';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./../designer-module.style.css']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

    formGroup: FormGroup;
    newElementSubscription: Subscription;
    project: Project;

    constructor(
        private formBuilder: FormBuilder,
        private newElementService: NewElementService,
        private elementFactoryService: ElementFactoryService,
        public store: ProjectStore) {

        this.newElementSubscription = this.newElementService.newElementAddedObservable.subscribe(newElementType => {
            this.addNewElement(newElementType);
        });
        this.project = store.getCurrent();
    }

    ngOnInit(): void {
        this.formGroup = this.createFormGroup();
    }

    createFormGroup(): FormGroup {
        const formGroup = this.formBuilder.group([]);

        this.store.getAllElements()
            .forEach(element => formGroup.addControl(element.name, this.formBuilder.control(''))); // TODO: default value

        return formGroup;
    }

    addNewElement(elementType: ElementType) {
        let nextId = 1;

        let all = this.store.getAllElements();

        if (all.length > 0) {
            nextId = Math.max(...all.map(x => x.questionId)) + 1;
        }

        let element = this.elementFactoryService.create(elementType, nextId);

        this.store.addElement(element);
        this.formGroup.addControl(element.name, this.formBuilder.control(''));
    }

    onQuestionSaved(updated: BaseElement) {
        this.store.updateElement(updated);
    }

    onQuestionDeleted(deleted: BaseElement) {
        this.store.removeElement(deleted);
    }

    ngOnDestroy() {
        this.newElementSubscription.unsubscribe();
    }

}
