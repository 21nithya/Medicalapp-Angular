import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-medicals',
  templateUrl: './display-medicals.component.html',
  styleUrls: ['./display-medicals.component.scss']
})
export class DisplayMedicalsComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
 products!: any;

  getAllProducts()
  {

    const url="http://localhost:9001/Product/list"
    this.http.get(url).subscribe((res)=>{
      this.products = res;
    }, err=>{

    }
    )
  }

}
