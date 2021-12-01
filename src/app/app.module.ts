import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountsComponent } from './accounts/accounts.component';
import { GoalsComponent } from './goals/goals.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FundsComponent } from './funds/funds.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountWidgetComponent } from './accounts/account-widget/account-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AccountsComponent,
    GoalsComponent,
    BudgetsComponent,
    FundsComponent,
    TransactionsComponent,
    SettingsComponent,
    AccountWidgetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
