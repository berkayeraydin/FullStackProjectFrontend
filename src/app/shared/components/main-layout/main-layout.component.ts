import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})

export class MainLayoutComponent implements OnInit {
  layoutDisabledUrls: string[] = ['/login', '/register'];
  showLayout: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationStart) {
        if (this.layoutDisabledUrls.includes(value.url)) {
          this.showLayout = false;
        } else {
          this.showLayout = true;
        }
      }
    })
  }

}