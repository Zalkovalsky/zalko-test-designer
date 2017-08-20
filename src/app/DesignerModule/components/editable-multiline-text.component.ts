import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'editable-multiline-text',
    templateUrl: './editable-multiline-text.component.html',
    styleUrls: ['./../designer-module.style.css'],
    outputs: ['value']
})
export class EditableMultilineTextComponent {
    @Input() emptySpaceString = '_';
    @Input() placeholderText: string;
    @Output() onSave = new EventEmitter();
    isEnabled: boolean;
    isEditing: boolean;

    private _cachedValue: string;
    private regexFn = /[_]/g;
    private revertRegexFn = /(<span>)(_)+(<\/span>)/g
    private spaceCode = '<span>______</span>';
    @Input() value: string;
    @Output() valueChange = new EventEmitter();
    onValueChange(val: string) {
        this.value = val;
        this.valueChange.emit(val);
    }
    ngOnInit() {
        this.addSpaces();
    }
    edit(): void {
        this._cachedValue = this.value;
        this.revertSpaces();
        this.isEditing = true;
    }

    save(): void {
        if (!this.value) {
            this.value = this._cachedValue;
        }
        this.addSpaces();
        this.isEditing = false;
        this.onSave.emit();
    }

    cancel(): void {
        this.value = this._cachedValue;
        this.addSpaces();
        this.isEditing = false;
    }

    addSpaces() {
        this.value = this.value.replace(this.regexFn, this.spaceCode);
    }

    revertSpaces() {
        this.value = this.value.replace(this.revertRegexFn, this.emptySpaceString);
    }
}
