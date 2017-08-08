import {Component, Input} from '@angular/core';

export class BaseQuestionComponent {
    @Input() questionText: string;
    @Input() questionNumber: number;
}

@Component({
    selector: 'short-text-question',
    templateUrl: './short-text-question.component.html'
})
export class ShortTextQuestionComponent extends BaseQuestionComponent {
}

