import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../Services/http-services.service';
import { error } from 'console';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  products:any[]=[];
  items:any[]=[];

  constructor(private HttpServicesService : HttpServicesService) {}

  ngOnInit(): void {
    this.HttpServicesService.fetchProducts().subscribe((data)=>{
      this.products=data;
      console.log(data);
    },
    (error)=>{
      console.error('Error Fetching products ',error);
    }
  ),
  this.HttpServicesService.getProducts().subscribe((items)=>{
    this.items=items;
    console.log(items);
  })
  }


}
