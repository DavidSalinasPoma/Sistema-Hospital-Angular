import { Injectable } from '@angular/core';


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

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  public menu: Menu[] = [
    {
      titulo: 'Dashboard!!!',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Principal', url: '/' },
        { titulo: 'Progressbar', url: '/dashboard/progress' },
        { titulo: 'Graficas', url: '/dashboard/grafica1' }
      ]
    }
  ]

  constructor() { }
}
