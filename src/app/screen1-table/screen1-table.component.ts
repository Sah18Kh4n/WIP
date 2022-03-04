import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-screen1-table',
  templateUrl: './screen1-table.component.html',
  styleUrls: ['./screen1-table.component.scss'],
})
export class Screen1TableComponent implements OnInit {
  @Input() formInput: FormGroup | undefined;
  loginError = false;
  isContinueClicked = false;



  constructor() {}

  ngOnInit(): void {
    // this.formInput = new FormGroup({
    //   datacollection: new FormControl('', Validators.required),
    //   datastorage: new FormControl('', Validators.required),
    //   datapreparation: new FormControl('', Validators.required),
    //   modeldevelopment: new FormControl('', Validators.required),
    //   modeldeployment: new FormControl('', Validators.required),
    //   comments: new FormControl('', Validators.required),
    // })
  }

}
