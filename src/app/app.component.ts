import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

constructor(private formbuilder: FormBuilder){}

ngOnInit() {


  this.myForm = new FormGroup({
    'projectName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'projectStatus': new FormControl('critical')
  });


  // this.myForm.setValue({
  //   'projectName': 'Reactive Project',
  //   'email': 'your@email.com',
  //   'projectStatus': ''
  // })
}

onSubmit(){
  console.log(this.myForm.value)
  console.log(this.myForm)
}

forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'Test') {
        resolve({'projectNameNotAllowed': true});
      } else {
        resolve(null);
      } },        1500);
  });
  return promise;

}
}
