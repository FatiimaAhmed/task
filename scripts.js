var item = document.querySelectorAll('.nav-item');
if (item) {

    item.forEach(function (el, key) {

        el.addEventListener('click', function () {
            el.classList.toggle("active");

            item.forEach(function (ell, els) {
                if (key !== els) {
                    ell.classList.remove('active');
                }
            });
        });
    });
}

var options1 = {
    series: [75],
    chart: {
        height: 250,
        type: 'radialBar',
        fontFamily: 'Montserrat'
    },
    plotOptions: {
        radialBar: {
            // startAngle: -135,
            // endAngle: 225,
            hollow: {
                margin: 0,
                size: '85%',
                background: 'transparent',
                position: 'front',
                dropShadow: {
                    enabled: false,
                }
            },
            track: {
                background: '#fff',
                strokeWidth: '85%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: false,
                }
            },
            colors: ['#36C88D', '#31A185', '#287676', '#23616A'],
            dataLabels: {
                show: true,
                name: {
                    offsetY: -15,
                    show: true,
                    color: '#888',
                    fontSize: '12px',
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: '#fff',
                    fontSize: '40px',
                    show: true,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.3,
            gradientToColors: ['#B0EE99'],
            inverseColors: true,
            opacityFrom: .6,
            opacityTo: .9,
            stops: [0, 100]
        }
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['Total score'],
};

var options2 = {
    series: [{
        name: "ssl",
        data: [1, 1.2, 1, 1.5, 1.5, 1.4, 1, 1, 2]
    }],
    chart: {
        height: 80,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    fill: {
        type: 'gradient'
    },
    colors: ['#B0EE99'],
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        enabled: false,
    }
};

var options3 = {
    series: [{
        name: "ssl",
        data: [1, 1.2, 1, 1.5, 0, 1.4, 1, 1, 2]
    }],
    chart: {
        height: 80,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    fill: {
        type: 'gradient'
    },
    colors: ['#B0EE99'],
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        enabled: false,
    }
};

var options4 = {
    series: [{
        name: "ssl",
        data: [1, 0, 1.9, 1.9, 1.5, 1.4, 1, 1, 2]
    }],
    chart: {
        height: 80,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    fill: {
        type: 'gradient'
    },
    colors: ['#B0EE99'],
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        enabled: false,
    }
};

var options5 = {
    series: [{
        name: "ssl",
        data: [{
            x: 2003,
            y: 500
        },
        {
            x: 2004,
            y: 490
        },
        {
            x: 2005,
            y: 400
        },
        {
            x: 2006,
            y: 510
        },
        {
            x: 2007,
            y: 450
        },
        {
            x: 2008,
            y: 450
        },
        {
            x: 2009,
            y: 300
        },
        {
            x: 2010,
            y: 360
        },
        {
            x: 2011,
            y: 440
        },
        {
            x: 2012,
            y: 500
        },
        {
            x: 2013,
            y: 409
        },
        {
            x: 2014,
            y: 480
        },
        {
            x: 2015,
            y: 450
        },
        {
            x: 2016,
            y: 520
        },
        {
            x: 2017,
            y: 390
        },
        {
            x: 2018,
            y: 300
        },
        {
            x: 2019,
            y: 450
        },
        {
            x: 2020,
            y: 412
        },
        {
            x: 2021,
            y: 495
        },
        {
            x: 2022,
            y: 362
        }
        ]
    }],
    chart: {
        height: 110,
        type: 'area',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: .5,
        lineCap: 'square'
    },
    fill: {
        type: 'gradient'
    },
    colors: ['#293A53', '#181E30'],
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: true,
            height: 1,
        },
        labels: {
            show: true
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        enabled: false,
    }
};

var chart1 = new ApexCharts(document.querySelector("#radial-chart"), options1);
chart1.render();

var chart2 = new ApexCharts(document.querySelector("#ssl-line-chart"), options2);
chart2.render();

var chart3 = new ApexCharts(document.querySelector("#domain-line-chart"), options3);
chart3.render();

var chart4 = new ApexCharts(document.querySelector("#ip-line-chart"), options4);
chart4.render();

var chart5 = new ApexCharts(document.querySelector("#area-chart"), options5);
chart5.render();