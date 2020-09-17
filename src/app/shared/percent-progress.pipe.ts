import { Pipe, PipeTransform } from '@angular/core';
import { ReferralLevels } from '../app.constants';

@Pipe({
  name: 'percentProgress'
})
export class PercentProgressPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return this.getProgress(value);
  }

  getProgress(currentLevel: string) {
    switch (currentLevel) {
      case ReferralLevels.RESUME_SCREENING:
        return '25%';
      case ReferralLevels.L1:
        return '50%';
      case ReferralLevels.L2:
        return '75%';
      case ReferralLevels.HR:
        return '100%';
      default:
        return 'NONE'
    }
  }

}
