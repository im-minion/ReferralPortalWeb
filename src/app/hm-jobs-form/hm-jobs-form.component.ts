import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HmService } from '../services/hm-services/hm.service';
import { OpenJob } from '../utilities/open-job-class';

@Component({
  selector: 'app-hm-jobs-form',
  templateUrl: './hm-jobs-form.component.html',
  styleUrls: ['./hm-jobs-form.component.scss']
})
export class HmJobsFormComponent implements OnInit {

  createJobForm: FormGroup;
  employeeId: string;
  isLoadingSubmit: boolean = false;

  constructor(private hmService: HmService) { }

  ngOnInit() {
    
    this.employeeId = sessionStorage.getItem('employeeId');

    this.createJobForm = new FormGroup({
      jobId: new FormControl(null, [Validators.required]),
      jobTitle: new FormControl(null, [Validators.required]),
      jobDescription: new FormControl(null, [Validators.required]),
      yoe: new FormControl(null, [Validators.required]),
      prefLocation: new FormControl(null, [Validators.required]),
      primarySkill: new FormControl(null, [Validators.required]),
      secondarySkill: new FormControl(null, [Validators.required]),
      // following will not be inputs
      createdByEmployeeId: new FormControl(this.employeeId)
    });
    
    this.createJobForm.patchValue({
      createdByEmployeeId: this.employeeId
    });
  }

  submit() {
    let newJob: OpenJob;
    newJob = this.createJobForm.value;
    console.log("newJob" ,newJob);
    console.log(this.createJobForm.value);
    this.hmService.insertJob(newJob).subscribe((resp)=>{
      console.log(resp);
    });
  }

}
