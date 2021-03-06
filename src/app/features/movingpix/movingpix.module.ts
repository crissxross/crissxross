import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './movingpix.routes';
import { YoutubeVideoModule } from '../../components/youtube-video/youtube-video.module';

import { MovingpixComponent } from './movingpix.component';
import { IntravenusComponent } from './intravenus/intravenus.component';
import { WedrankComponent } from './wedrank/wedrank.component';
import { HeightsComponent } from './heights/heights.component';
import { SocialdisEaseComponent } from './socialdis-ease/socialdis-ease.component';



@NgModule({
  declarations: [
    MovingpixComponent,
    IntravenusComponent,
    WedrankComponent,
    HeightsComponent,
    SocialdisEaseComponent
  ],
  imports: [
    SharedModule,
    YoutubeVideoModule,
    RouterModule.forChild(routes)
  ]
})
export class MovingpixModule { }
