import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {


  contactForm!: FormGroup;
  name!:string;
  departments:string[]=[];
  selectedCity$ = this.dataSvc.selectedCity$;
  // myField = new FormGroup();
  constructor(private readonly fb: FormBuilder,
    private readonly route:ActivatedRoute,
    private readonly dataSvc:DataService) { }

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departments'];
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    )
    this.contactForm = this.initForm();
  }


  onPathValue():void{
    this.contactForm.patchValue({name:'Nadya'});
  }
  onSetValue():void{
    this.contactForm.setValue({comment:'Hola Mundo'});
  }
  onSubmit():void{
    console.log('Form ->',this.contactForm.value);
  }

  initForm():FormGroup{
    return this.fb.group({
      name: ['',[Validators.required,Validators.minLength(5)]],
      chekcAdult: ['',[Validators.required]],
      department: [''],
      comment: ['',[Validators.required]],
    })
  }

}
