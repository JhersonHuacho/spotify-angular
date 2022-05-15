import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: '',
    album: 'Gioli % ashia',
    name: 'BEBE (oficial)',
    duration: 0,
    _id: '1',
    url: 'http://localhost:4000/track.mp3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
