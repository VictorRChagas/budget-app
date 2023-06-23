import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';

@Component({
    selector     : 'unlock-session-classic',
    templateUrl  : './unlock-session.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class UnlockSessionClassicComponent implements OnInit
{
    @ViewChild('unlockSessionNgForm') unlockSessionNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    name: string = 'Brian Hughes';
    showAlert: boolean = false;
    unlockSessionForm: UntypedFormGroup;


    constructor(
        private _formBuilder: UntypedFormBuilder
    )
    {
    }


    ngOnInit(): void
    {
        // Create the form
        this.unlockSessionForm = this._formBuilder.group({
            name    : [
                {
                    value   : this.name,
                    disabled: true
                }
            ],
            password: ['', Validators.required]
        });
    }

    /**
     * Unlock
     */
    unlock(): void
    {
    }
}
