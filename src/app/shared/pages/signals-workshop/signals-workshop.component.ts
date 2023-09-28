import {
  Component,
  OnInit,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { LoggedInUserModel } from '../../models/loggedInUserModel';

@Component({
  templateUrl: './signals-workshop.component.html',
  styleUrls: ['./signals-workshop.component.css'],
})
export class SignalsWorkshopComponent implements OnInit {
  // Subject,BehaviorSubject
  //x = signal(5); // BehaviorSubject(5) => signal(5) => get,set
  x: WritableSignal<number> = signal<number>(5);
  y = 15;
  // computed => içerisinde bir fonksiyon alan ve içerisinde kullanılan signaller değiştiğinde
  // işlemi tekrar devreye alan fonksiyon..
  z = computed(() => this.x() + this.y);

  // signaller sadece basit typelar değil complex typelar ile de çalışır..
  user = signal<LoggedInUserModel>({
    username: 'halitklyc',
    firstName: 'Halit',
    lastName: 'Kalaycı',
  });

  // signal tanımlama => signal([değer])
  // getter => this.degiskenAdi();
  // setter => this.degiskenAdi.set([yeniDeğer])
  constructor() {
    effect(() => {
      console.log(`x değişkeninin mevcut değeri: ${this.x()}`);
    });

    //this.x.set(10);
    this.x.update((currentValue) => currentValue + 10);

    //this.user.mutate((obj) => (obj.lastName = 'Kalaycı1'));
  }

  ngOnInit() {
    // effect(() => {
    //   console.log(`x değişkeninin mevcut değeri: ${this.x()}`);
    // });
    // bir component içerisinde effect fonksiyonu sadece ctor içerisinde çağırılabilir..
  }

  changeX() {
    // art arda olan set işlemlerinde template güncellemesi son set işlemi sonrası çalışır..
    this.x.update((current) => current + 25);
  }

  // Signal Functions
  // set => değer değiştirmek

  // get => değer okumak ( syntax: degiskenAdi() )

  // update => içerisine aldığı fonksiyona o anki değeri göndererek üzerinde işlem yapmayı sağlar..

  // mutate => komplex bir obje içerisindeki spesifik bir alanı değiştirmek için kullanılır..

  // computed => içerisine aldığı signal ve normal değişken farketmeksizin değişkenler ile hesaplama yaparak
  // geriye yeni bir signal değişken dönen fonksiyon

  // effect => signaller içerisinde bir değişiklik olduğunda bir fonksiyon tetiklenmesi işlemi..
}
