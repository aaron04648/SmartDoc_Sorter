import { Routes } from '@angular/router';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { HomeComponent } from './pages/home.component/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fileupload',
    component: FileUploadComponent,
  },
];
