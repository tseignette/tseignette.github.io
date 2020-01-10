import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProjectsComponent } from './projects/projects.component';
import { ThemeModule } from '../@theme/theme.module';
import { TitleService } from './title.service';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AboutComponent,
    PagesComponent,
    ProjectsComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
  ],
  providers: [
    TitleService,
  ],
})
export class PagesModule { }
