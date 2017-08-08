import { Component, Input } from '@angular/core';
import { BaseQuestionComponent } from './short-text-question.component';

@Component({
    selector: 'single-selection-question',
    templateUrl: './single-selection-question.component.html'
})
export class SingleSelectionQuestionComponent extends BaseQuestionComponent {
    @Input() options: string[];

    pushOption(): void {
        if (!this.options) {
            this.options = new Array<string>();
        }

        this.options.push('Select option');
    }
}
