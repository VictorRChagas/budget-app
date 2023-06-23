import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HelpCenterService } from 'app/modules/admin/apps/help-center/help-center.service';
import { GuideCategory } from 'app/modules/admin/apps/help-center/help-center.type';

@Component({
    selector     : 'help-center-guides',
    templateUrl  : './guides.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HelpCenterGuidesComponent implements OnInit, OnDestroy
{
    guideCategories: GuideCategory[];
    private _unsubscribeAll: Subject<any> = new Subject();


    constructor(private _helpCenterService: HelpCenterService)
    {
    }


    ngOnInit(): void
    {
        // Get the Guide categories
        this._helpCenterService.guides$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((guideCategories) => {
                this.guideCategories = guideCategories;
            });
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
