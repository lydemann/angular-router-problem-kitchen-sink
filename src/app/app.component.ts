import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-demo';
  lalaQueryParam;

  /**
   *
   */
  constructor(router: ActivatedRoute) {
    this.lalaQueryParam = router.queryParams.pipe(map(o => {
      debugger;
      return o.lala;
    }));
  }
}
