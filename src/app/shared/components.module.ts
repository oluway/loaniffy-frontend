import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardStatsComponent } from './components/dashboard-stats/dashboard-stats.component';
import { StatsComponent } from './components/stats/stats.component';


@NgModule({
  declarations: [
    DashboardStatsComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    DashboardStatsComponent
  ],
  providers: [],
})
export class SharedComponentModule {}
