import { Component, OnInit } from '@angular/core';

// Servicio para menus interactivos
import { SidebarMenuService } from 'src/app/services/sidebar-menu.service';

interface Menu {
  titulo: string;
  icono: string;
  submenu: [
    {
      titulo: string,
      url: string
    },
    {
      titulo: string,
      url: string
    },
    {
      titulo: string,
      url: string
    }
  ],
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuItems: Menu[];

  constructor(private sidebarServices: SidebarMenuService) {
    this.menuItems = this.sidebarServices.menu;
  }

  ngOnInit(): void {
  }

}
