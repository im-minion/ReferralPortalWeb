export class OpenJob {
  createdByEmployeeId: string;
  jobDescription: string;
  jobId: string;
  jobStatus: string;
  jobTitle: string;
  jobVisibility: boolean;
  prefLocation: string;
  primarySkill: string;
  secondarySkill: string;
  yeo: string;

  constructor(
    $createdByEmployeeId: string,
    $jobDescription: string,
    $jobId: string,
    $jobStatus: string,
    $jobTitle: string,
    $jobVisibility: boolean,
    $prefLocation: string,
    $primarySkill: string,
    $secondarySkill: string,
    $yeo: string
  ) {
    this.createdByEmployeeId = $createdByEmployeeId;
    this.jobDescription = $jobDescription;
    this.jobId = $jobId;
    this.jobStatus = $jobStatus;
    this.jobTitle = $jobTitle;
    this.jobVisibility = $jobVisibility;
    this.prefLocation = $prefLocation;
    this.primarySkill = $primarySkill;
    this.secondarySkill = $secondarySkill;
    this.yeo = $yeo;
  }
}
