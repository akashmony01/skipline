import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  public chart: any;

  DATA_COUNT = 7;
  NUMBER_CFG = {count: this.DATA_COUNT, min: -100, max: 100};
  labels = ['January', 'February', 'March','April','May', 'June', 'July','August' ]; 

  lines_data = {
    labels: this.labels,
    datasets: [
      {
        label: 'Unfilled',
        fill: false,
        borderColor: '#F3CC00',
        data: ['-20','20', '-20', '-06', '20','60', '20', '30'],
      }, {
        label: 'Dashed',
        fill: false,
        borderColor: '#9B51E0',
        borderDash: [5, 5],
        data: ['0', '-20', '0', '20', '60','20', '0', '-10'],
      }, {
        label: 'Filled',
        backgroundColor: '#F2DBFD',
        borderColor: 'transparent',
        data: ['60', '20', '40', '60', '40','20', '-20', '-10'],
        fill: true,
      }
    ]
  };
  

  createChart(){
  
    this.chart = new Chart("lineChart", {
      type: 'line',

      data: this.lines_data,
      options: {
        aspectRatio:2.5,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        }
      }
      
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
