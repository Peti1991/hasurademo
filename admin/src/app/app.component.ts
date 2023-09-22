import { Component } from '@angular/core';
import { getVersion } from '../api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version: string | null = null;
  async clickListener() {
    const data = await getVersion()
    if (data) {
      this.version = data.message
    }
  }
}

