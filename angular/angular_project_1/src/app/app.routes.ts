import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { Products } from './components/products/products';
import { UserList } from './components/user-list/user-list';
import { Userdetails } from './components/userdetails/userdetails';
import { Productdetails } from './components/productdetails/productdetails';
import { ProductList } from './components/product-list/product-list';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideos } from './components/upload-videos/upload-videos';
import { trainerGuard } from './guards/trainer-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    component: Careers,
    children: [
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ],
  },
  {
    path: 'contactus',
    component: Contactus,
    canDeactivate:[canExitGuard]
  },
  { path: 'products', component: ProductList },
  { path: 'productdetails', component: Productdetails },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: Userdetails },
  {
    path: 'upload',
    component: UploadVideos,
    canActivate: [trainerGuard],
  },
  { path: '', component: Home },
  { path: '**', component: Notfound },
];
