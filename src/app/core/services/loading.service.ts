import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// root providing => anguların arkadaki inject isimli classında dep. oluşturulması..

// platform providing => anguların dep.'i platforma aktarıp instancein platform tarafından oluşturulması

// module-component bazlı providing => dep'in tüm sistem için değil belli bir modül ya da componentn için
// oluşturulması..
@Injectable({
  providedIn: 'root', // root => anguların server tarafında ilgili instance oluşturma işlemlerini devralması
  //providedIn: 'platform', // platform => uygulamanın client tarafında çalıştığı platform
})
//@Injectable()
export class LoadingService {
  requestCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  startLoading() {
    this.requestCountSubject.next(this.requestCountSubject.value + 1);
  }

  // A,B,C => 3
  // A => 5 sn => stopLoading(); // 2
  // B => 10 sn => 5 // 1
  // C => 15 sn => 10 // 0
  stopLoading() {
    let newCount = this.requestCountSubject.value - 1;
    if (newCount < 0) newCount = 0;
    this.requestCountSubject.next(newCount);
  }
}
