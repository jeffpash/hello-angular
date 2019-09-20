import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculComponent } from './basic/calcul/calcul.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from 'src/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalcTVAComponent } from './calc-tva/calc-tva.component';
import { TogglePanelComponent } from './toggle-panel/toggle-panel.component';
import { ConversionComponent } from './conversion/conversion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { MyAuthInterceptor } from './common/interseptor';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculComponent,
    LoginComponent,
    WelcomeComponent,
    CalcTVAComponent,
    TogglePanelComponent,
    ConversionComponent,
    AdminDeviseComponent,
    ProductsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers:  [{   
     provide: HTTP_INTERCEPTORS,    
     useClass: MyAuthInterceptor,    
     multi: true  }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
