import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-overlay-loading',
  templateUrl: './overlay-loading.component.html',
  styleUrls: ['./overlay-loading.component.css'],
})
export class OverlayLoadingComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {}
  ngOnInit(): void {
    this.loadingService.requestCountSubject.subscribe((count) => {
      this.isLoading = count > 0;
    });
  }
}
