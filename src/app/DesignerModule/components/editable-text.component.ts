import { Component, Input } from '@angular/core';

@Component({
    selector: 'editable-text',
    templateUrl: './editable-text.component.html'
})
export class EditableTextComponent {
    @Input() value: string;
    @Input() placeholderText: string;
    isEnabled: boolean;
    isEditing: boolean;
    private _cachedValue: string;

    constructor() {
    }

    edit(): void {
        this._cachedValue = this.value;
        this.isEditing = true;
    }
    save(): void {
        this.isEditing = false;
    }

    cancel(): void {
        this.value = this._cachedValue;
        this.isEditing = false;
    }
}
