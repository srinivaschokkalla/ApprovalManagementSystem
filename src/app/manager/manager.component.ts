import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Budget } from '../Models/Budget.model';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  data:any;
    RequestData: Budget[];
    constructor(private requestService:RequestService,public route: ActivatedRoute,private router:Router,private toaster:ToastrService) { }
    ngOnInit(): void {
        this.requestService.getAllRequest().subscribe(res=>{
          debugger;
          console.log(res);
          this.RequestData = res;
        })   
    }
    approver(id:number){
      this.toaster.success("Approved successfull");
         }
  }