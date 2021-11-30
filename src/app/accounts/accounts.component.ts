import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.sass'],
})
export class AccountsComponent implements OnInit {
  accountArr: any[] = [
    {
      name: 'Chase Joint Checking',
      nickname: 'Chase JC',
      balance: 100,
      attributed: 80,
    },
    {
      name: 'Amazon Credit Card',
      nickname: 'AMZN CC',
      balance: 100,
      attributed: 80,
    },
    {
      name: 'Vanguard Roth IRA',
      nickname: 'VG R-IRA',
      balance: 100,
      attributed: 80,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
