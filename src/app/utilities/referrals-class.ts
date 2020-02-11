export class Referrals {
    /**
referralEmailId: "Merry@chris.com"
referralName: "Merry Chris"
jobId: 153
referDate: "2020-02-11T04:39:27.030Z"
panNumber: "PMFPM5728T"
dob: "1993-05-06"
yoe: null
primarySkill: "Mule"
secondarySkill: "Java"
resume: {type: 0,…}
resumeV2: "5e42303aa6d2750004d6cce4"
referralCurrentLevel: "RESUME_SCREENING"
referralCurrentStatus: "PENDING"
referredBy: "40801"
referralStatusReasonsList: null
referralId: "5e42303aa6d2750004d6cce6"
     */
    private referralEmailId: string;
    private referralName: string;
    private jobId: string;
    private referDate: string;
    private panNumber: string;
    private dob: string;
    private yoe: string;
    private primarySkill: string;
    private secondarySkill: string;
    //resume: {type: 0,…} binary ignoring for now
    private resumeV2: string;
    private referralCurrentLevel: string;
    private referralCurrentStatus: string;


	constructor($referralEmailId: string, $referralName: string, $jobId: string, $referDate: string, $panNumber: string, $dob: string, $yoe: string, $primarySkill: string, $secondarySkill: string, $resumeV2: string, $referralCurrentLevel: string, $referralCurrentStatus: string) {
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