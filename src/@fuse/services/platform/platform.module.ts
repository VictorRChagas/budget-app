import { NgModule } from '@angular/core';
import { FusePlatformService } from '@fuse/services/platform/platform.service';

@NgModule({
    providers: [
        FusePlatformService
    ]
})
export class FusePlatformModule
{

    constructor(private _fusePlatformService: FusePlatformService)
    {
    }
}
