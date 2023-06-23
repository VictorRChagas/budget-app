import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'sign-in-split-screen-reversed',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class SignInSplitScreenReversedComponent implements OnInit
{
    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: UntypedFormGroup;
    showAlert: boolean = false;


    constructor(
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder
    )
    {
    }


    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email     : ['', [Validators.required, Validators.email]],
            password  : ['', Validators.required],
            rememberMe: ['']
        });
    }

    /**
     * Sign in
     */
    signIn(): void
    {
    }
}
