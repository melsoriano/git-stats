import Chart from 'chart.js';

const buildScales = axes => {
  const scales = {
    xAxes: [
      {
        ticks: {
          fontFamily: 'DM Sans',
          fontSize: 12
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontFamily: 'DM Sans',
          fontSize: 12
        }
      }
    ]
  };

  return axes ? scales : null;
};

const buildLegend = legend => {
  const leg = {
    position: 'right',
    labels: {
      fontFamily: 'DM Sans'
    }
  };
  return legend ? leg : null;
};

const buildChart = config => {
  const {
    ctx,
    chartType,
    labels,
    data,
    backgroundColor,
    borderColor,
    axes,
    legend
  } = config;

  return new Chart(ctx, {
    type: chartType,
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: buildScales(axes),
      legend: buildLegend(legend),
      tooltips: {
        titleFontFamily: 'DM Sans',
        bodyFontFamily: 'DM Sans',
        cornerRadius: 3
      }
    }
  });
};

export default buildChart;
