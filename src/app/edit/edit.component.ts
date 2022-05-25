import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Budget } from '../Models/Budget.model';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  budgetRequest:Budget;
  empForm:FormGroup;
  constructor(private requestService:RequestService,private router:Router,private formBuilder:FormBuilder,private routers:ActivatedRoute,private toaster: ToastrService) { }
  ngOnInit(): void {
debugger;
    this.empForm = this.formBuilder.group({
      id:[],
      purpose:['',Validators.required],
      description:['',Validators.required],
      approver:['',Validators.required],
      estimatedCost:['',Validators.required],
      adancedAmount:['',Validators.required],
      date:['',Validators.required]
    })
    this.getRequest(this.routers.snapshot.params['id']);
  }

  public getRequest(id:number){
      this.requestService.getbudgetById(id).subscribe(res=>{
        this.budgetRequest=res;
        console.log(this.budgetRequest);
        this.attachRequest(res);
      })
  }
  public attachRequest(request:Budget){
    this.empForm.patchValue({
      id:request.id,
      purpose:request.purpose,
      description:request.description,
      approver:request.approver,
      estimatedCost:request.estimatedCost,
      adancedAmount:request.adancedAmount,
      date:request.date
    })
  }
  public onSubmit(empForm:Budget){
    this.requestService.editdata(empForm,empForm.id).subscribe(reponse=>{
          console.log(reponse);
          this.toaster.success('Data updated Succesfully');
          this.router.navigate(["/myrequest"])
})

  }

}
























