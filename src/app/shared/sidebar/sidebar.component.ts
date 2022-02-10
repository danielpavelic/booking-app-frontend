import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from '../../app.constants';
import { MenuItemModel } from '../../models/menuItem.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItemModel[] = MENU_ITEMS.sort((a:MenuItemModel, b:MenuItemModel) => a.sortIndex - b.sortIndex);

  constructor() { }

  ngOnInit(): void {
  }

}
