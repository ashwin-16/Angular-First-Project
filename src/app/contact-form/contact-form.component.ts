import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { CustomValidators } from '../Validators/noSpaceAllowed.validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit{

  reactiveForm!: FormGroup;
  alertMessage:string;
  alertType:'success' | 'error' | 'info' | 'warning';
  autoClose: boolean = false;

  ngOnInit(): void {
      this.reactiveForm=new FormGroup({
        firstname:new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
        lastname:new FormControl(null,[Validators.required]),
        email:new FormControl(null,[Validators.required,Validators.email]),
        username:new FormControl(null,Validators.required,CustomValidators.checkUsername),
        dob:new FormControl(null),
        gender:new FormControl('male'),
        address:new FormGroup({
          street:new FormControl(null),
          country:new FormControl('India'),
          region:new FormControl(null),
          postal:new FormControl(null)
        }),
        skills:new FormArray([
          new FormControl(null)
        ]),
        userAdd:new FormArray([
          new FormControl(null)
        ]),
        experience:new FormArray([

        ])
      })
  }
  onFormSubmitted(){
    debugger
    this.alertMessage = '';
    this.alertType = 'info';
    this.autoClose = false;

    if(this.reactiveForm.invalid){
      this.alertMessage="Please enter all Fields";
      this.alertType='error';
      this.autoClose=false;
    }else{
      this.alertMessage="Form Submitted Successfully";
      this.alertType = 'success';
      this.autoClose=true;
    }
    console.log(this.reactiveForm);
  }

  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
  DeleteSkills(index:number){
    const controls= <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index)
  }
  AddUserName(){
  (<FormArray>this.reactiveForm.get('userAdd')).push(new FormControl(null, Validators.required));
  }
  DeleteUserName(index:number){
    const controls=<FormArray>this.reactiveForm.get('userAdd');
    controls.removeAt(index)
  }
  addExperience(){
    const formGroup=new FormGroup({
      company: new FormControl(null),
      Position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null)
    });
    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
    console.log(<FormArray>this.reactiveForm.get('experience'));
  }
  delExperience(index:number){
    const delControl=<FormArray>this.reactiveForm.get('experience');
    delControl.removeAt(index);
  }
  
}
