import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { HomeComponent } from './home.component';


const indexRoute: Route = {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
};
const fallbackRoute: Route = {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
};
const appRoutes: Routes = [
    {
        path: 'photo',
        component: PhotoComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    indexRoute,
    fallbackRoute
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
