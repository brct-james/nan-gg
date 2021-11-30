import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-widget',
  templateUrl: './account-widget.component.html',
  styleUrls: ['./account-widget.component.sass'],
})
export class AccountWidgetComponent implements OnInit {
  constructor() {}

  @Input() account: any;

  ngOnInit(): void {}
}
