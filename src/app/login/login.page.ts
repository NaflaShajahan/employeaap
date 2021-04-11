import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { CommonServicesService } from '../@common/common-services.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading = false;
  loginForm : FormGroup

  constructor(private FB: FormBuilder,
               private SS: CommonServicesService,
               private TC:ToastController,
               private router : Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.FB.group({
      email : ['',[Validators.required,Validators.pattern(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/)]],
      password : ['', [Validators.required,Validators.minLength(8)]]
    })
  }

  submit(){
    console.log("aA",this.loginForm);
    this.loading = true;
    this.SS.login(this.loginForm.value).subscribe(res => {
      this.presentToast(res.msg)
      if(res.status ==true){
        this.router.navigate(['/dashboard'])
      }

    })

  }

  async presentToast(msg) {
    const toast = await this.TC.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
