import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.css']
})
export class TogglePanelComponent implements OnInit {

  toggleP: boolean = false;
  @Input()
  title: string = 'default panel title';
  constructor() { }

  ngOnInit() {
  }

}
