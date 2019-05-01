import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  search: string;
  animeList: any;
  spinner: boolean = false;

  constructor(private _appService: AppService) {

  }

  ngOnInit() {
  }

  getAnimeList(title: string) {
    this.spinner = true;
    this._appService.getAnime(title).subscribe(
      data => {
        this.animeList = data;
        this.spinner = false;
      }
    );
    this.search = '';
  }

}
