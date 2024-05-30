import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-mini-chart',
  templateUrl: './mini-chart.component.html',
  styleUrls: ['./mini-chart.component.css']
})
export class MiniChartComponent {


  public chart: any;

  DATA_COUNT = 7;
  NUMBER_CFG = {count: this.DATA_COUNT, min: 1, max: 5};
  labels = ['1', '2', '3','4','5', '6', '7','8' ]; 

  lines_data = {
    labels: this.labels,
    datasets: [
      {
        label: 'Unfilled',
        fill: false,
        borderColor: '#F3CC00',
        data: ['1','3', '5', '1', '5','4', '5', '1'],
        tension: 0.4
      }, {
        label: 'Dashed',
        fill: false,
        borderColor: '#000',
        borderDash: [5, 5],
        data: ['5', '2.3', '3.3', '5', '1','4', '1', '5'],
        tension: 0.4
      },
    ]
  };
  

  createChart(){
  
    this.chart = new Chart("miniChart", {
      type: 'line',

      data: this.lines_data,
      options: {
        aspectRatio:2.5,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        }
      }
      
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

}
