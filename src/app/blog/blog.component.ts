import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

declare var ng: any;

@Component({
  selector: 'cx-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {

  currentPost$?: Observable<ScullyRoute> = this.scully.getCurrent();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService
    ) { }

    ngOnInit() {}
}
