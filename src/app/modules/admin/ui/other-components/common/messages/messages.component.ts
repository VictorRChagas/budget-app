import { Component } from '@angular/core';
import { OtherComponentsComponent } from 'app/modules/admin/ui/other-components/other-components.component';

@Component({
    selector   : 'messages',
    templateUrl: './messages.component.html'
})
export class MessagesComponent
{

    constructor(private _otherComponentsComponent: OtherComponentsComponent)
    {
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._otherComponentsComponent.matDrawer.toggle();
    }
}
