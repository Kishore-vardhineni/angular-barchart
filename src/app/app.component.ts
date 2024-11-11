import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartDataService } from './chart-data.service';
import { FormsModule } from '@angular/forms';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Chart with Filter';
  @ViewChild('chart', { static: true }) chartContainer!: ElementRef;

  lineChartData: any[] = [];
  startDate: string = '';
  endDate: string = '';

  data: any[] = [];
  filteredData: any[] = [];
  categories: string[] = ["A", "B"];
  category: string = 'all';
 
 
  constructor(private dataService: ChartDataService) {

  }

  ngOnInit(): void {
    this.dataService.getChartData().subscribe(data => {
      this.data = data;
      this.filteredData = data; 
      this.updateChart();
    });
  }

  filterData(): void {
    this.filteredData = this.data.filter(d => {
      const isCategory = this.category === 'all' || d.category === this.category;
      const isStartDate = this.startDate ? new Date(d.date) >= new Date(this.startDate) : true;
      const isEndDate = this.endDate ? new Date(d.date) <= new Date(this.endDate) : true;
      return isCategory && isStartDate && isEndDate;
    });

    this.updateChart(); 
  }
  
  updateChart(): void {
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    d3.select('#chart').select('svg').remove();

    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(this.filteredData.map(d => d.date))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(this.filteredData, d => d.value) as number])
      .range([height, 0]);

    const xAxis = svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`);

    const yAxis = svg.append('g')
      .attr('class', 'y-axis');

    const bars = svg.selectAll('.bar')
      .data(this.filteredData)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(new Date(d.date).toISOString()) ?? 0)
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.value));

    xAxis.call(d3.axisBottom(xScale));
    yAxis.call(d3.axisLeft(yScale));
  }

  onCategoryChange(event: any): void {
    this.category = event.target.value;
    this.filterData();
  }

  onStartDateChange(event: any): void {
    this.startDate = event.target.value;
    this.filterData();
  }

  onEndDateChange(event: any): void {
    this.endDate = event.target.value;
    this.filterData();
  }

}
