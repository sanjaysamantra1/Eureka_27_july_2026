import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.html',
  styleUrl: './signal-demo1.css',
})
export class SignalDemo1 {
  cookieCount: WritableSignal<number> = signal(10);
  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);
  
  updateCookieCount(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }
}
