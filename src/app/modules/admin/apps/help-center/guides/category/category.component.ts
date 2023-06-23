import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { HelpCenterService } from 'app/modules/admin/apps/help-center/help-center.service';
import { GuideCategory } from 'app/modules/admin/apps/help-center/help-center.type';

@Component({
    selector     : 'help-center-guides-category',
    templateUrl  : './category.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HelpCenterGuidesCategoryComponent implements OnInit, OnDestroy
{
    guideCategory: GuideCategory;
    private _unsubscribeAll: Subject<any> = new Subject();


    constructor(
        private _activatedRoute: ActivatedRoute,
        private _helpCenterService: HelpCenterService,
        private _router: Router
    )
    {
    }


    ngOnInit(): void
    {
        // Get the Guides
        this._helpCenterService.guides$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((guideCategories) => {
                this.guideCategory = guideCategories[0];
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
