let chartWidth =
 document.getElementById("graf3").offsetWidth > 600
   ? 600
   : document.getElementById("graf3").offsetWidth;
 
  
  Highcharts.chart('graf3', {
    chart: {
      type: 'bar',
      //width: chartWidthNehody,
      events: {
        load() {
          onChartLoad(this);
        },
      },
  
    },
    title: {
      text: 'Nejčastější komplikace půl roku po covidu',
      useHTML: true,
      align: screenLeft,
    },
    subtitle: {
      text: 'Mezi 1733 sledovanými pacienty po hospitalizaci',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
      align: screenLeft,
    },
    xAxis: {
      categories: ['alespoň jeden z příznaků',
      'únava, bolest svalů',
      'problémy se spánkem',
      'ztráta vlasů',
      'ztráta čichu',
      'tlukot/bušení srdce',
      'bolest kloubů'],
      labels: {
        enabled: true,
      },
    },
    yAxis: {
      title: {
        text: 'procent pacientů souhlasí',
      },
      // labels: {
      //   formatter: function() {
      //     if (this.isLast) {
      //       return this.value + '<br>' +
      //                   '<span class="light-gray-text">jízd za</span>' + '<br>' +
      //                   '<span class="light-gray-text">návěstidla</span>'
      //     } else {
      //       return this.value
      //     }
      //   }
      // }
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: '',
      shared: false
    },
    exporting: {
      enabled: false,
    },
    credits: {
      href: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-67362032656-8/fulltext',
      text: 'The Lancet: 6-month consequences of COVID-19 in patients discharged from hospital: a cohort study',
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        },
        // enableMouseTracking: false, // odkomentuj, pokud nechces tooltip
        pointPadding: 0,
      },
    },
    series: [
      {
        name: 'procent pacientů souhlasí',
        data: [{ y: 76, color: colors['2020'] },
          { y: 63, color: colors['2020'] },
          { y: 26, color: colors['2020'] },
          { y: 22, color: colors['2020'] },
          { y: 11, color: colors['2020'] },
          { y: 9, color: colors['2019'] },
          { y: 9, color: colors['2020'] }],
      },
    ],
  });