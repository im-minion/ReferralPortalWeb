// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'https://referral-portal-ws.herokuapp.com/',
  AUTH_END_POINT: 'rp/auth/',
  EMPLOYEE_END_POINT: 'rp/employee/',
  HM_END_POINT: 'rp/hm/',
  HR_END_POINT: 'rp/hr/',
  ADMIN_END_POINT: 'rp/admin/'
};
// https://referral-portal-ws.herokuapp.com/
// ng build --prod --base-href https://im-minion.github.io/ReferralPortalWeb/
// node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng build --prod --base-href https://im-minion.github.io/ReferralPortalWeb/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
