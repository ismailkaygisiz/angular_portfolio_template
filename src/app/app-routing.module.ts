import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { generatedMetaDescription, generatedTitle } from 'src/data';
import { Error404Component } from './components/error404/error404.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export let metaData = {
  homePage: {
    meta: {
      title: generatedTitle,
      description: generatedMetaDescription,
    },
  },
};

const routes: Routes = [
  {
    path: '',
    data: metaData.homePage,
    component: HomePageComponent,
  },

  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
