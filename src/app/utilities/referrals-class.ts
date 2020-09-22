export class Referrals {
  referralEmailId: string;
  referralName: string;
  jobId: string;
  referDate: string;
  panNumber: string;
  dob: string;
  yoe: string;
  primarySkill: string;
  secondarySkill: string;
  resumeV2: string;
  referralCurrentLevel: string;
  referralCurrentStatus: string;
  referredBy: string;
  referralStatusReasonsList: Array<LevelDetails>;

  constructor(
    $referralEmailId: string,
    $referralName: string,
    $jobId: string,
    $referDate: string,
    $panNumber: string,
    $dob: string,
    $yoe: string,
    $primarySkill: string,
    $secondarySkill: string,
    $resumeV2: string,
    $referralCurrentLevel: string,
    $referralCurrentStatus: string
  ) {
    this.referralEmailId = $referralEmailId;
    this.referralName = $referralName;
    this.jobId = $jobId;
    this.referDate = $referDate;
    this.panNumber = $panNumber;
    this.dob = $dob;
    this.yoe = $yoe;
    this.primarySkill = $primarySkill;
    this.secondarySkill = $secondarySkill;
    this.resumeV2 = $resumeV2;
    this.referralCurrentLevel = $referralCurrentLevel;
    this.referralCurrentStatus = $referralCurrentStatus;
  }
}

export class LevelDetails {
  level: string;
  status: string;
  reasonToUpdate: string;
}
