import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { CollectionHelperService } from './services/collection-helper.service';
import { ElementFactoryService } from './services/element-factory.service';
import { ElementTypeService } from './services/element-type.service';
import { ProjectService } from './services/project.service';
import { DialogService } from './services/dialog-service';

@NgModule({
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                CollectionHelperService,
                ElementFactoryService,
                ElementTypeService,
                ProjectService,
                DialogService
            ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
