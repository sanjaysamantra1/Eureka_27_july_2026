import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, linkedSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.html',
  styleUrl: './signal-demo2.css',
})
export class SignalDemo2 {
  country = signal('India');
  stateMap: any = {
    India: ['Karnataka', 'Tamilnadu', 'Maharastra', 'Andhra Pradesh'],
    USA: ['Texas', 'california', 'New York'],
    Canada: ['Ontario', 'Alberta'],
  };
  // depends on the country, but its writable
  // selectedState is computed , also it should be writable
  selectedState = linkedSignal(() => {
    const country = this.country();
    return this.stateMap[country][0];
  });
  changeCountry(event: any) {
    this.country.set(event.target.value);
  }
  changeState(event: any) {
    this.selectedState.set(event.target.value);
  }
  // =======================================
  httpClient = inject(HttpClient);
  userId: WritableSignal<number> = signal(1);
  userData: WritableSignal<any> = signal({})
  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.userData.set(response)
    })
  }
  destroyEffect() {
    this.userDetailsEffect.destroy()
  }
  incrementUserId() {
    this.userId.update(val => val + 1);
  }
}
