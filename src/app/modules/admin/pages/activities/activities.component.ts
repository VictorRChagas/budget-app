import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { DateTime } from 'luxon';
import { Activity } from 'app/modules/admin/pages/activities/activities.types';
import { ActivitiesService } from 'app/modules/admin/pages/activities/activities.service';

@Component({
    selector       : 'activity',
    templateUrl    : './activities.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesComponent implements OnInit
{
    activities$: Observable<Activity[]>;


    constructor(public _activityService: ActivitiesService)
    {
    }


    ngOnInit(): void
    {
        // Get the activities
        this.activities$ = this._activityService.activities;
    }

    /**
     * Returns whether the given dates are different days
     *
     * @param current
     * @param compare
     */
    isSameDay(current: string, compare: string): boolean
    {
        return DateTime.fromISO(current).hasSame(DateTime.fromISO(compare), 'day');
    }

    /**
     * Get the relative format of the given date
     *
     * @param date
     */
    getRelativeFormat(date: string): string
    {
        return DateTime.fromISO(date).toRelativeCalendar();
    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
