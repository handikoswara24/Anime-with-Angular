import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  @Input() animeList: any;

  spinner: boolean = false;
  detail: any;

  constructor(private _appService: AppService) { }

  ngOnInit() {
  }

  getDetail(animeID: string) {
    this.spinner = true;
    this._appService.getAnimeDetail(animeID).subscribe(
      data => {
        this.detail = data;
        this.spinner = false;
      }
    );
  }

}
