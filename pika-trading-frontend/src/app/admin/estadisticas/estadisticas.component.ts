import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { CommonModule, isPlatformBrowser  } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
  imports: [CommonModule, NgChartsModule],
})
export class EstadisticasComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ventasTotales = 1200;
  visitantes = 350;
  pedidosActivos = 45;

  // Gráfico de torta
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Cartas', 'Sobres', 'Promos'],
    datasets: [{
      data: [300, 500, 400]
    }]
  };
  pieChartType: ChartType = 'pie';

  // Gráfico de línea
  lineChartData: ChartData<'line'> = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [
      {
        label: 'Ventas',
        data: [150, 200, 180, 220, 250],
        borderColor: '#007bff',
        fill: false
      }
    ]
  };
  lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'black' // color del texto de la leyenda
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'black'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)' // líneas grises suaves
        }
      },
      y: {
        ticks: {
          color: 'black'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };
  
}
