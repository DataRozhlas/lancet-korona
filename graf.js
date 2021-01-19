// Nastaveni max sirky grafu
const chartWidthNehody = document.getElementById('vis-column-chart-simple').offsetWidth > 600
  ? 600
  : document.getElementById('vis-column-chart-simple').offsetWidth;

function onChartLoad(e) {
  const plotBack = document.getElementById(e.renderTo.id).getElementsByClassName('highcharts-plot-background')[0];
  const shouldBeHeight = (plotBack.width.baseVal.value / 4) * 3;
  const heightDiff = shouldBeHeight - plotBack.height.baseVal.value;
  if (heightDiff > 0) {
    document.getElementById(e.renderTo.id).style.height = `${e.chartHeight + heightDiff}px`;
    e.reflow();
  }
}

Highcharts.chart('vis-column-chart-simple', {
  chart: {
    type: 'column',
    width: chartWidthNehody,
    events: {
      load() {
        onChartLoad(this);
      },
    },
  },
  title: {
    text: 'Column Chart Single',
    useHTML: true,
  },
  subtitle: {
    text: 'Celkový počet nepovolených průjezdů byl v&nbsp;loňském prvním pololetí vyšší než letos',
    // + '<br><span style="color: #fff">.</span>',
    useHTML: true,
  },
  xAxis: {
    categories: ['<span class="eighteen">2018</span>',
      '<span class="nineteen">2019</span>',
      '<span class="twenty">2020</span>'],
    labels: {
      enabled: true,
    },
  },
  yAxis: {
    title: {
      text: 'nepovolené jízdy za návěstidla',
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
    valueSuffix: ' jízd',
    // shared: true
  },
  exporting: {
    enabled: false,
  },
  credits: {
    href: 'http://www.dicr.cz/statistiky-mimoradnych-udalosti',
    text: 'Zdroj: Drážní inspekce',
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
      name: 'Celkový počet mimořádných událostí',
      data: [{ y: 85, color: colors['2018'] },
        { y: 97, color: colors['2019'] },
        { y: 88, color: colors['2020'] }],
    },
  ],
});