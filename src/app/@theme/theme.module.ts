import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ToggleSwitchComponent, HeaderComponent, FooterComponent, DialogComponent, CardContactComponent, CardProjectComponent, LayoutSvgBackgroundComponent, WorkInProgressComponent, ProjectsListComponent } from './components';
import { NgForObjectPipe, CommaSeparatePipe } from './pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  ButtonComponent,
  CardContactComponent,
  CardProjectComponent,
  DialogComponent,
  FooterComponent,
  HeaderComponent,
  LayoutSvgBackgroundComponent,
  ProjectsListComponent,
  ToggleSwitchComponent,
  WorkInProgressComponent,
];

const DIRECTIVES = [
  // Add directives here
];

const PIPES = [
  CommaSeparatePipe,
  NgForObjectPipe,
];

const PROVIDERS = [
  // Add services here
];

const IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    ...IMPORTS,
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        ...PROVIDERS,
      ],
    };
  }

}
