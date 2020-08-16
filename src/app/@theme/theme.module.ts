import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective, GridDirective } from './directives';
import { ConcatPipe, ForObjectPipe, JoinPipe, LastElementPipe, SplitPipe, ToFixedPipe } from './pipes';
import { HeaderComponent, FooterComponent } from './components';
import { RouterModule } from '@angular/router';

const COMPONENTS_PRIVATE = [
  // Add components you do not want to export
];

const COMPONENTS_PUBLIC = [
  HeaderComponent,
  FooterComponent
];

const DIRECTIVES = [
  AutofocusDirective,
  GridDirective
];

const IMPORTS = [
  CommonModule,
  RouterModule
];

const PIPES = [
  ConcatPipe,
  ForObjectPipe,
  JoinPipe,
  LastElementPipe,
  SplitPipe,
  ToFixedPipe
];

const PROVIDERS = [
  // Add your components services here
];

@NgModule({
  declarations: [
    ...COMPONENTS_PRIVATE,
    ...COMPONENTS_PUBLIC,
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    ...COMPONENTS_PUBLIC,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: IMPORTS
})
export class ThemeModule {

  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: PROVIDERS
    };
  }

}
