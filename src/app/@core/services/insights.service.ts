import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { init, track, trackPages, parameters } from "insights-js";
import { environment } from '../../../environments/environment';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InsightsService {

  private platformId: string;

  constructor(
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.platformId = platformId;
  }

  init() {
    if (!isPlatformServer(this.platformId)) {
      init(environment.insightsID, { ignoreErrors: true, disabled: !environment.production });
      trackPages();
    }
  }

  trackEvent(eventName: string, params?: object) {
    track({
      id: eventName,
      parameters: {
        ...params,
        locale: parameters.locale(),
        path: parameters.path(),
        referrer: parameters.referrer(),
        screenType: parameters.screenType(),
      },
    });
  }

}
