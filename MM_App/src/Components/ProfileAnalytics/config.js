const config = {
  chart: {
    type: 'column',
    backgroundColor: null,
    borderRadius: 4
  },
  title: {
    text: null,
    floating: true,
    align: 'left',
    x: 0,
    y: 10,
    style: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    }
  },
  plotOptions: {
    series: {
      borderColor: null,
      color: null
    }
  },
  xAxis: {
    type: 'datetime',
    categories: null,
    labels: {
      style: {
        color: 'white'
      }
    }
  },
  yAxis: {
    visible: false
  },
  exporting: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  series: [
    {
      data: null
    }
  ]
};

const options = {
  chart: {
    title: {
      enabled: false
    }
  }
};

export { config, options };
