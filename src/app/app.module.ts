import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // for forms

// Material - Animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Storage
import { AngularWebStorageModule } from 'angular-web-storage';

// Local Modules
import { MaterialModule } from './modules/material/material.module';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationSidePaneComponent } from './components/navigation-side-pane/navigation-side-pane.component';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contacts/contact/contact.component';
import { ContactDetailComponent } from './components/contacts/contact-detail/contact-detail.component';
import { TaxesComponent } from './components/tax/taxes/taxes.component';
import { TaxDetailComponent } from './components/tax/tax-detail/tax-detail.component';
import { ProductsComponent } from './components/products/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationSidePaneComponent,
    MainComponent,
    ContactComponent,
    ContactDetailComponent,
    TaxesComponent,
    TaxDetailComponent,
    ProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
