import { Injectable, ApplicationRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public mediaQuery: MediaQueryList;
  public mediaQuery2: MediaQueryList;
  public mobileQueryListener: () => void;
  public isMobile: boolean;
  constructor(
    public media: MediaMatcher,
    public ref: ApplicationRef,
  ) {
    this.GetMediaQuery();
    this.isMobile = this.mediaQuery.matches;
  }
  GetMediaQuery(): boolean {
    this.mediaQuery = this.media.matchMedia('(max-width: 800px)');
    this.mediaQuery2 = this.media.matchMedia('(min-width: 1020px)');
    this.mobileQueryListener = () => this.ref.tick();
    this.mediaQuery.addEventListener('change', () => {
      this.mobileQueryListener();
    });
    this.mediaQuery2.addEventListener('change', () => {
      this.mobileQueryListener();
    });
    return this.mediaQuery.matches;
  }
}
