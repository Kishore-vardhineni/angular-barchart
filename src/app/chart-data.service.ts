import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  data: any = [
    { date: "2024-09-1", value: 70, category: "India" },
    { date: "2024-09-15", value: 65, category: "UAE" },
    { date: "2024-10-30", value: 150, category: "Abudabi" },
    { date: "2024-10-01", value: 20, category: "India" },
    { date: "2023-10-30", value: 20, category: "India" },
    { date: "2024-11-01", value: 20, category: "India" },
    { date: "2024-11-05", value: 60, category: "UAE" },
    { date: "2024-11-10", value: 55, category: "Abudabi" },
    
  ]

  getChartData(): Observable<any[]> {
     return of(this.data);
  }
}
