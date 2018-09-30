import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ChartComponent } from "../chart/chart.component";
import { TableComponent } from "../table/table.component";
import { SharedModule } from "../shared/shared.module";


const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: LayoutComponent, 
    children: [
        { path: '', component: DashboardComponent },
        { path: 'chart', component: ChartComponent },
        { path: 'table', component: TableComponent }
    ]}
];

@NgModule({
    declarations: [
        LayoutComponent, 
        DashboardComponent,
        ChartComponent,
        TableComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: []
})

export class LayoutModule {}