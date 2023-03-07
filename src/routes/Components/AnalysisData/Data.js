
import React from 'react';
import { Pie, Column, Liquid, Bullet, Treemap, DualAxes } from '@ant-design/plots';
const DemoColumn = () => {
  const data = [
    {
      type: '2017',
      sales: 102,
    },
    {
      type: '2018',
      sales: 307,
    },
    {
      type: '2019',
      sales: 483,
    },
    {
      type: '2020',
      sales: 540,
    },
    {
      type: '2021',
      sales: 614,
    },
    {
      type: '2022',
      sales: 795,
    },
    {
      type: '2023',
      sales: 1038,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // Can be manually configured label data tag position
      // 'top', 'bottom', 'middle',
      // Configuration style
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'data',
      },
      sales: {
        alias: 'Akt. Cilv. Daudz.',
      },
    },
  };
  return <Column {...config} />;
};
const DemoPie = () => {
  const data = [
    {
      type: 'Apmierinati ar pulcinu',
      value: 90,
    },
    {
      type: ' ',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: 'inner',
      color: 'red',
      offset: '-8%',
      content: '{name}',
      style: {
        fontSize: 25,
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    pieStyle: {
      lineWidth: 5,
    },
  };
  return <Pie {...config} />;
};
const DemoLiquid = () => {
  const config = {
    percent: 0.80,
    shape: function (x, y, width, height) {
      const r = width / 4;
      const dx = x - width / 2;
      const dy = y - height / 2;
      return [
        ['M', dx, dy + r * 2],
        ['A', r, r, 0, 0, 1, x, dy + r],
        ['A', r, r, 0, 0, 1, dx + width, dy + r * 2],
        ['L', x, dy + height],
        ['L', dx, dy + r * 2],
        ['Z'],
      ];
    },
    outline: {
      border: 4,
      distance: 4,
      style: {
        stroke: '#1677ff',
        strokeOpacity: 1,
      },
    },
    wave: {
      length: 128,
    },
    theme: {
      styleSheet: {
        brandColor: '#bfd838',
      },
    },
  };
  return <Liquid {...config} />;
};
const DemoBullet = () => {
  const data = [
    {
      title: 'Pasniedzēji',
      ranges: [ ],
      measures: [34],
      target: 40,
    },
  ];
  const config = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#c1d93f',
      target: '#3D76DD',
    },
    xAxis: {
      line: null,
    },
    yAxis: {
      tickMethod: ({ max }) => {
        const interval = Math.ceil(max / 5);
        return [0, interval, interval * 2, interval * 3, interval * 4, max];
      },
    },
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: 'counselAmount',
          name: '35',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: 'counselTarget ',
          name: '40',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#3D76DD',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};
const DemoTreemap = () => {
  const data = {
    name: 'root',
    children: [
      {
        name: 'Latvija',
        value: 614,
      },
      {
        name: 'Lietuva',
        value: 202,
      },
      {
        name: 'Igaunija',
        value: 138,
      },
      {
        name: 'Zviedrija',
        value: 60,
      }, 
      {
        name: 'Polija',
        value: 20,
      },
      {
        name: 'Vācija',
        value: 4,
      },
    ],
  };
  const config = {
    data,
    colorField: 'name',
  };
  return <Treemap {...config} />;
};
const DemoDualAxes = () => {
  const data = [
    {
      year: '2018',
      Skaits: 0,
    },
    {
      year: '2019',
      Skaits: 1,
    },
    {
      year: '2020',
      Skaits: 1,
    },
    {
      year: '2021',
      Skaits: 2,
    },
    {
      year: '2022',
      Skaits: 4,
    },
    {
      year: '2023',
      Skaits: 5,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'year',
    yField: ['Skaits', ' '],
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#ffffff',
      },
    ],
  };
  return <DualAxes {...config} />;
};
export {DemoColumn, DemoPie, DemoLiquid, DemoBullet, DemoTreemap, DemoDualAxes};