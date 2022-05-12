import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DisplayMedicalsComponent } from './display-medicals/display-medicals.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MedicalproductComponent } from './medicalproduct/medicalproduct.component';
import { OrdermedicineComponent } from './ordermedicine/ordermedicine.component';
import { RegisterComponent } from './register/register.component';
import { UpdatemedicalsComponent } from './updatemedicals/updatemedicals.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'medicalproduct',component:MedicalproductComponent},
  {path:'ordermedicine',component:OrdermedicineComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'updatemedicals/:id',component:UpdatemedicalsComponent},
  {path:'display-medicals',component:DisplayMedicalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
