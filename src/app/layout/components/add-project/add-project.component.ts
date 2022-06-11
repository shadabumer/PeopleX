import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../shared/services/data.service';
import { Project } from '../../../shared/models/app.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  projectForm: FormGroup;
  projects: Project[];
  isSubmitted: boolean = false;

  states: Array<string> = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattishgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagalan",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Multi State/ Centre",
  ]

  projectStatus: Array<string> = [
    'Pre-construction Stage',
    'Under Construction',
    'Operation and Maintenance Stage',
    'Completed'
  ]

  sectors: Array<string> = [
    'Transport',
    'Energy',
    'Water Sanitation',
    'Social and Commercial Infrastructure',
  ]




  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'sector': new FormControl(null),
      'state': new FormControl(null, [Validators.required]),
      'authority': new FormControl(null, [Validators.required]),
      'status': new FormControl(null),
      'totalCost': new FormControl(null, [Validators.required]),
      'dateOfAward': new FormControl(null, [Validators.required]),
      'description': new FormControl(''),
    });
  }

  get f() { return this.projectForm.controls; }

  onSubmit() {
    console.log('form submitted:', this.projectForm.value);
    this.dataService.addProject(this.projectForm.value).then(data => {
      this.isSubmitted = true
    }).finally(() => {
      this.projectForm.reset();
    });
  }

}
