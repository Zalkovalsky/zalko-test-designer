import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./../project.module.styles.css']
})
export class StartPageComponent {
    constructor(private router: Router) { }

    onStartNew() {
        this.router.navigateByUrl('designer');
    }
}
