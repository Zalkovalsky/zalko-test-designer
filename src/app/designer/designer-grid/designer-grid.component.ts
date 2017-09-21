import { Component } from '@angular/core';

@Component({
    selector: 'designer-grid',
    templateUrl: './designer-grid.component.html',
    styleUrls: ['./../designer-module.style.css']
})
export class DesignerGridComponent {
    print() {
        window.print();
    }

    quit() {

    }
}
