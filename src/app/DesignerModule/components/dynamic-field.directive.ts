import { ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnChanges,
    OnInit,
    Type,
    ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseElement } from './../models/base-element';
import { ElementType } from './../models/element-type';
import { DynamicField } from './../models/dynamic-field.interface';

import { ShortTextQuestionComponent } from './questions/short-text-question.component';
import { SingleSelectionQuestionComponent } from './questions/single-selection-question.component';
import { FormSentenceQuestionComponent } from './questions/form-sentence.question.component';
import { FillBlanksQuestionComponent } from './questions/fill-blanks-question.component';

const components = {
    'Short Text': ShortTextQuestionComponent,
    'Single Selection': SingleSelectionQuestionComponent,
    'Form Sentence': FormSentenceQuestionComponent,
    'Fill Up Blanks': FillBlanksQuestionComponent
};

@Directive({
    selector: '[dynamic-field]'

})
export class DynamicFieldDirective implements OnInit, OnChanges, DynamicField {
    @Input() element: BaseElement;
    @Input() formGroup: FormGroup;
    
    component: ComponentRef<DynamicField>;

    constructor(private resolver: ComponentFactoryResolver,
                private container: ViewContainerRef) {};

    ngOnChanges(): void {
        if (this.component) {
            this.component.instance.element = this.element;
            this.component.instance.formGroup = this.formGroup;
        }
    }

    ngOnInit(): void {

       if (!components[this.element.elementType]) {
            const supportedTypes = Object.keys(components).join(', ');

            throw new Error(`Unsupported type. Supported types: ${supportedTypes}`);
        }

        const componentType = components[this.element.elementType];

        const component = this.resolver.resolveComponentFactory<DynamicField>(componentType);
        this.component = this.container.createComponent(component);
        this.component.instance.element = this.element;
        this.component.instance.formGroup = this.formGroup;
    }
}