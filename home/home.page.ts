import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // n1:string='';
  // n2:string='';
  // res:number=0;
  // constructor() {
  // }
  // somar(){
  //   this.res=parseFloat(this.n1)+parseFloat(this.n2);
  // }
  radioSelecionada: string="";
  constructor(public toastController: ToastController,public alertController: AlertController){
  }
  verificarRadio(){
    this.exibirToast();
    this.exibirAlerta();
  }
  async exibirToast(){
    const toast = await this.toastController.create({
      message: this.radioSelecionada,
      duration: 2000,
      color: "#fff",
    });
    toast.present();
  }
  async exibirAlerta(){
    const alerta = await this.alertController.create({
      header: "Vasco é o maior",
      message: this.radioSelecionada,
      buttons: ["Ok"]
    });
    alerta.present();
  }
}
