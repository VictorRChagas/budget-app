import { Component } from '@angular/core';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';

@Component({
    selector   : 'splash-screen',
    templateUrl: './splash-screen.component.html'
})
export class SplashScreenComponent
{

    constructor(private _fuseComponentsComponent: FuseComponentsComponent)
    {
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._fuseComponentsComponent.matDrawer.toggle();
    }
}
