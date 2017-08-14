import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseElement } from './../models/base-element';
@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

    @Input() elements: any[] = [];

    formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        console.log(this.elements);
        this.formGroup = this.createFormGroup();
    }

    createFormGroup(): FormGroup {
        const formGroup = this.formBuilder.group([]);

        this.elements
            .forEach(element => formGroup.addControl(element.name, this.formBuilder.control(''))); // TODO: default value

        console.log(this.elements);
        return formGroup;
    }
}
