import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SharedState } from '../../store/shared.reducers';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  layoutDisabledUrls: string[] = ['/login', '/register'];
  showLayout: boolean = true;
  authState: any;
  cart: any[] = [];
  constructor(private router: Router, private store: Store<SharedState>) {}

  ngOnInit(): void {
    this.store
      .select((x) => x.auth)
      .subscribe((authState) => {
        this.authState = authState;
      });

    this.store
      .select((x) => x.cart)
      .subscribe((cart) => {
        this.cart = cart;
      });

    this.router.events.subscribe((value) => {
      if (value instanceof NavigationStart) {
        if (this.layoutDisabledUrls.includes(value.url)) {
          this.showLayout = false;
        } else {
          this.showLayout = true;
        }
      }
    });
  }
}

// Signals => Subject BehaviorSubject
// DI (Service ProvidedIn)

// ekstra
// Socketio => Backend ve frontend arasında canlı veri akışı
