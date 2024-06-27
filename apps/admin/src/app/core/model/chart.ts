import {
    ApexAnnotations,
    ApexChart,
    ApexDataLabels,
    ApexFill,
    ApexGrid,
    ApexLegend,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexResponsive,
    ApexStates,
    ApexStroke,
    ApexTheme,
    ApexTitleSubtitle,
    ApexTooltip,
    ApexXAxis,
    ApexAxisChartSeries,
    ApexYAxis,
  } from "ng-apexcharts";

export interface ChartOptions {
    chart: ApexChart;
    annotations: ApexAnnotations;
    colors: string[];
    dataLabels: ApexDataLabels;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    stroke: ApexStroke;
    labels: string[];
    legend: ApexLegend;
    fill: ApexFill;
    tooltip: ApexTooltip;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    yaxis: ApexYAxis | ApexYAxis[];
    grid: ApexGrid;
    states: ApexStates;
    title: ApexTitleSubtitle;
    subtitle: ApexTitleSubtitle;
    theme: ApexTheme;
  }