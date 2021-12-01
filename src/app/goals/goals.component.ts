import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.sass'],
})
export class GoalsComponent implements OnInit {
  constructor() {}

  goalsArr: any[] = [
    {
      rank: 1,
      name: 'New Pet',
      value: 100,
      target: 200,
    },
    {
      rank: 2,
      name: 'Down Payment',
      value: 2500,
      target: 10000,
    },
    {
      rank: 3,
      name: 'Bikes',
      value: 0,
      target: 1000,
    },
  ];

  ngOnInit(): void {}
}
