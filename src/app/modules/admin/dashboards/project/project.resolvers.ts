import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectResolver implements Resolve<any>
{

    constructor(private _projectService: ProjectService)
    {
    }

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._projectService.getData();
    }
}
