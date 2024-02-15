import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyApp';
  ngOnInit(): void {
      initializeApp(firebaseConfig);
  }
  /**
   * Lifecycle hooks
   * 1. ngOnChanges()
   * 2. ngOnInit()
   * 3. ngDoCheck()
   * 4. ngAfterContentInit()
   * 5. ngAfterContentChecked()
   * 6. ngAfterViewInit()
   * 7. ngAfterViewChecked()
   * 8. ngOnDestroy()
   */
}
