import { NgModule } from '@angular/core';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        FuseMediaWatcherService
    ]
})
export class FuseMediaWatcherModule
{

    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService)
    {
    }
}
