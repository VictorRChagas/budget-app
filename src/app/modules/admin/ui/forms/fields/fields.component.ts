import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
    selector     : 'forms-fields',
    templateUrl  : './fields.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FormsFieldsComponent
{
    formFieldHelpers: string[] = [''];
    fixedSubscriptInput: FormControl = new FormControl('', [Validators.required]);
    dynamicSubscriptInput: FormControl = new FormControl('', [Validators.required]);
    fixedSubscriptInputWithHint: FormControl = new FormControl('', [Validators.required]);
    dynamicSubscriptInputWithHint: FormControl = new FormControl('', [Validators.required]);


    constructor(private _formBuilder: UntypedFormBuilder)
    {
    }

    /**
     * Get the form field helpers as string
     */
    getFormFieldHelpersAsString(): string
    {
        return this.formFieldHelpers.join(' ');
    }
}
