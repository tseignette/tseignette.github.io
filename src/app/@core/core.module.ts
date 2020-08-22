import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsService } from './services';

const IMPORTS = [
  CommonModule
];

const PROVIDERS = [
  InsightsService
];

@NgModule({
  imports: IMPORTS
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: PROVIDERS
    };
  }

}
