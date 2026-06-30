import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
// 柱状图

const BarChart = ({ title }) => {
  const chartRef = useRef(null)
  // 保证渲染完成
  useEffect(() => {
    // 1.获取渲染图标的dom节点
    const chartDom = chartRef.current
    // 2.初始化echarts实例
    const myChart = echarts.init(chartDom);
    // 3.设置option参数
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [10, 40, 70],
          type: 'bar'
        }
      ]
    };
    option && myChart.setOption(option);
  }, [])
  return (<div ref={chartRef} style={{ width: '100%', height: 400 }}></div>)
}

export default BarChart