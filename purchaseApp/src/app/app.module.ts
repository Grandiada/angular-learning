import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { BoldDirective } from './directives/bold.directive';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ChildComponent, BoldDirective],
    bootstrap: [AppComponent],
})
export class AppModule { }
