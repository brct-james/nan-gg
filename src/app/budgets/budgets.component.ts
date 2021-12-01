import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.sass'],
})
export class BudgetsComponent implements OnInit {
  constructor() {}
  budgetsArr: any[] = [
    {
      month: 'December',
      year: 2021,
      name: 'December Budget',
      description: '',
      income: 2000,
      attributed: 1500,
      balance: 1000,
    },
    {
      month: 'January',
      year: 2022,
      name: 'January Budget',
      description: '',
      income: 2000,
      attributed: 1500,
      balance: 1000,
    },
    {
      month: 'February',
      year: 2022,
      name: 'February Budget',
      description: '',
      income: 2000,
      attributed: 1500,
      balance: 1000,
    },
  ];

  ngOnInit(): void {}
}
