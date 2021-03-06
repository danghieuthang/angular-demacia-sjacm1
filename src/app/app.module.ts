import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderEndComponent } from './header-end/header-end.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RepresentativeProductsComponent } from './representative-products/representative-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { MenuBarComponent } from './header/menu-bar/menu-bar.component';
import { Demo1Component } from './demo1/demo1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, HeaderEndComponent, FooterComponent, NewsletterComponent, RepresentativeProductsComponent, NewProductsComponent, MenuBarComponent, Demo1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
