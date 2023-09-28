import { Component, computed, effect, signal } from '@angular/core';

@Component({
  templateUrl: './signals-form.component.html',
  styleUrls: ['./signals-form.component.css'],
})
export class SignalsFormComponent {
  firstName = signal('');
  lastName = signal('');
  age = signal(0);
  number = 0;
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  isAdult = computed(() => this.age() >= 18);

  constructor() {
    // effect(
    //   () => {
    // sadece içeride kullanılmış signal değerleri değiştiğinde bu effecti çağır..
    //     console.log('Efect çağırıldı', this.age());
    //     this.firstName.set('x');
    //   },
    //   { allowSignalWrites: true }
    // );

    effect((onCleanup) => {
      console.log(this.age());

      const timer = setTimeout(() => {
        console.log('Yükleniyor..', this.age());
      }, 2000);

      onCleanup(() => {
        clearTimeout(timer);
      });
    });
    // onCleanup => sıradaki effect çalışmadan son effectin çalıştıracağı temizlik fonksiyonu
    // cleanup => effect çalışmadan önce diğer effectlerdeki tüm işlemleri cleanup yap

    // effectin içinde async bir işlem var ise, diğer efect çalışabilir..
    // bu async işlemler call stack'de tutulur ve sırası geldiğinde o efectin üzerine farklı efectler çalışmış
    // olsa dahi bu kodlar çalıştırılır..
  }
}
