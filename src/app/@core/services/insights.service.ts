import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { init, track, trackPages, parameters } from 'insights-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsightsService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  init(): void {
    if (!isPlatformServer(this.platformId)) {
      init(environment.insightsID, { ignoreErrors: environment.production });
      trackPages();
    }
  }

  trackEvent(eventName: string, params = { }): void {
    track({
      id: eventName,
      parameters: {
        ...params,
        locale: parameters.locale(),
        path: parameters.path(),
        referrer: parameters.referrer(),
        screenType: parameters.screenType()
      }
    });
  }

}
