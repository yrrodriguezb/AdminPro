import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graph-doughnut',
  templateUrl: './graph-doughnut.component.html',
  styles: []
})
export class GraphDoughnutComponent implements OnInit {
  @Input() public ChartLabels: Label[] = [];
  @Input() public ChartData: MultiDataSet = [];
  @Input() public ChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
