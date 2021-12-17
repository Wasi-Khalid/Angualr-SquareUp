import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PaymentComponent} from "./components/payment/payment.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [{
      path: '',
      redirectTo: 'payment',
      pathMatch: "full"
    }, {
      path: 'payment',
      component: PaymentComponent
    },
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
