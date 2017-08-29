import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { CollectionHelperService } from './services/collection-helper.service';
import { ProjectStorageService } from './services/project-storage.service';
import { ElementFactoryService } from './services/element-factory.service';
import { ElementTypeService } from './services/element-type.service';
@NgModule({
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ProjectStorageService,
                CollectionHelperService,
                ElementFactoryService,
                ElementTypeService
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
