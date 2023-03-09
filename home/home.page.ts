import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  altura: number= 1.75;
  radio:string="";
  constructor(public alertController: AlertController){}

  calc(){
    if(this.radio == 'homem'){
      return 72.7 * this.altura - 58;
    }
    return 62.1 * this.altura - 44.7;
  }
  async mostraAlerta(){
    const alerta = await this.alertController.create({
      header: 'seu peso ideal é ' + Math.round(this.calc()) + 'Kg',
      message: 'Lembrando que é so uma estimativa',
      buttons: ['Ok']
    })
    alerta.present()
  }
  btn(){
    this.mostraAlerta()
  }

  // valor: string="";
  // radioSelecionada:string='';
  // result:number=0;
  // constructor(public alertController: AlertController){}
  // verificarRadio(){
  //   this.calc()
  //   this.exibirAlerta();
  // }
  // calc(){
  //   if(this.radioSelecionada == "pix"){
  //    return this.result = parseFloat(this.valor) - parseFloat(this.valor)*0.10
  //   }else if(this.radioSelecionada == 'credito'){
  //     return this.result = parseFloat(this.valor) + parseFloat(this.valor)*0.10
  //   }
  //   return this.result=parseFloat(this.valor)

  // }
  // async exibirAlerta(){
  //   const alerta = await this.alertController.create({
  //     header: 'valor final: ' + this.result,
  //     message: 'Metodo de pagamento ' + this.radioSelecionada,
  //     buttons: ["Ok"]
  //   });
  //   alerta.present()
  // }
}
