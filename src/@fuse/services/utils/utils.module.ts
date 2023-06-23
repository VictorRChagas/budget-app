import { NgModule } from '@angular/core';
import { FuseUtilsService } from '@fuse/services/utils/utils.service';

@NgModule({
    providers: [
        FuseUtilsService
    ]
})
export class FuseUtilsModule
{

    constructor(private _fuseUtilsService: FuseUtilsService)
    {
    }
}
