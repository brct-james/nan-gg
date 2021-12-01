import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.sass'],
})
export class FundsComponent implements OnInit {
  constructor() {}
  fundsArr: any[] = [
    {
      fuid: 0,
      name: 'Pet Food',
      description: 'Food for pets',
      category: 'Pets',
      fund_number: 'PETS-0',
      account: 'Chase JC',
      balance: 100,
    },
    {
      fuid: 1,
      name: 'Pet Meds',
      description: 'Elvis Inhaler',
      category: 'Pets',
      fund_number: 'PETS-1',
      account: 'Chase JC',
      balance: 200,
    },
    {
      fuid: 2,
      name: 'Groceries',
      description: 'Human Food',
      category: 'Living Expenses',
      fund_number: 'LIVEX-0',
      account: 'Chase JC',
      balance: 375,
    },
  ];

  ngOnInit(): void {}
}
