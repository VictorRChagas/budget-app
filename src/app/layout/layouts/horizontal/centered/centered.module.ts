import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { SharedModule } from 'app/shared/shared.module';
import { CenteredLayoutComponent } from 'app/layout/layouts/horizontal/centered/centered.component';

@NgModule({
    declarations: [
        CenteredLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        SharedModule
    ],
    exports     : [
        CenteredLayoutComponent
    ]
})
export class CenteredLayoutModule
{
}
