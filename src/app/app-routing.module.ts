import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountsComponent } from './accounts/accounts.component';
import { GoalsComponent } from './goals/goals.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FundsComponent } from './funds/funds.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'a', component: AccountsComponent },
  { path: 'g', component: GoalsComponent },
  { path: 'b', component: BudgetsComponent },
  { path: 'f', component: FundsComponent },
  { path: 't', component: TransactionsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
