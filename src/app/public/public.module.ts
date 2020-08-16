import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing';
import { ThemeModule } from '../@theme/theme.module';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    PublicComponent,
    ProjectsComponent,
    AboutComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ThemeModule
  ]
})
export class PublicModule { }
