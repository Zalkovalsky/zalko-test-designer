import { Component, Input } from '@angular/core';

@Component({
    selector: 'editable-text',
    templateUrl: './editable-text.component.html',
    styleUrls: ['./../designer-module.style.css']
})
export class EditableTextComponent {
    @Input() value: string;
    @Input() placeholderText: string;
    isEnabled: boolean;
    isEditing: boolean;
    private _cachedValue: string;

    edit(): void {
        this._cachedValue = this.value;
        this.isEditing = true;
    }
    save(): void {
        if (!this.value) {
            this.value = this._cachedValue;
        }
        this.isEditing = false;
    }

    cancel(): void {
        this.value = this._cachedValue;
        this.isEditing = false;
    }
}
