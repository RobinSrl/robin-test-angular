import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { provideHttpClient } from '@angular/common/http';

const routes = [
    { path: '', component: HomeComponent },
];

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideHttpClient()
    ]
}).catch(err => console.error(err));