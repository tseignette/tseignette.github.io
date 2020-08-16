import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing';
import { ThemeModule } from '../@theme/theme.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    PublicComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ThemeModule
  ]
})
export class PublicModule { }
