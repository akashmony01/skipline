import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("barChart", {
      type: 'bar',

      data: {
        labels: ['S', 'M', 'T','W','T', 'F', 'S'], 
	       datasets: [
          {
            label: "Sales",
            data: ['50','30', '70', '20', '60','50', '40'],
            backgroundColor: '#5A36CD',
            borderRadius: 5,
          },
        ]
      },
      options: {
        aspectRatio:2.5,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          }
        }
      }      
    });
  }
}
