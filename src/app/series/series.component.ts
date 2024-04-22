import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  constructor(private seriesService: SeriesService) {}
  series: Array<Serie> = [];
  promedioTemporadas: number = 0;

  getSeries() {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedioTemporadas = this.getPromedioTemp(series);
    });
  }

  getPromedioTemp(series: Serie[]) {
    let numTemp: number = 0;
    series.forEach((serie) => {
      numTemp = numTemp + serie.seasons;
    });
    return numTemp / series.length;
  }

  ngOnInit() {
    this.getSeries();
  }
}
