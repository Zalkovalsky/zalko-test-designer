import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'editable-text',
    templateUrl: './editable-text.component.html',
    styleUrls: ['./../designer-module.style.css'],
    outputs: ['value']
})
export class EditableTextComponent {
    @Input() placeholderText: string;
    @Output() onSave = new EventEmitter();
    isEnabled: boolean;
    isEditing: boolean;

    private _cachedValue: string;

    @Input() value: string;
    @Output() valueChange = new EventEmitter();
    onValueChange(val: string) {
        this.value = val;
        this.valueChange.emit(val);
    }

    edit(): void {
        this._cachedValue = this.value;
        this.isEditing = true;
    }

    save(): void {
        if (!this.value) {
            this.value = this._cachedValue;
        }

        this.isEditing = false;
        this.onSave.emit();
    }

    cancel(): void {
        this.value = this._cachedValue;
        this.isEditing = false;
    }
}
