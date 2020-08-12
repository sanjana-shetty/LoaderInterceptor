import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader/loader.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  loading: boolean;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) {
   this.load();
  }

  ngOnInit() {
  }
  load(){
    this.subscription = this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}