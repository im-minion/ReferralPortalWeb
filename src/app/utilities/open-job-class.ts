export class OpenJob {
    /* 
    [
  {
    "createdByEmployeeId": "string",
    "id": "string",
    "jobDescription": "string",
    "jobId": 0,
    "jobStatus": "string",
    "jobTitle": "string",
    "jobVisibility": true,
    "prefLocation": "string",
    "primarySkill": "string",
    "secondarySkill": "string",
    "yeo": "string"
  }
]
    */
    private createdByEmployeeId: string;
    private jobDescription: string;
    private jobId: string;
    private jobStatus: string;
    private jobTitle: string;
    private jobVisibility: boolean;
    private prefLocation: string;
    private primarySkill: string;
    private secondarySkill: string;
    private yeo: string;
    constructor($createdByEmployeeId: string, $jobDescription: string, $jobId: string, $jobStatus: string, $jobTitle: string, $jobVisibility: boolean, $prefLocation: string, $primarySkill: string, $secondarySkill: string, $yeo: string) {
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