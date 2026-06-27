import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const Home = () => {
  const chartRef = useRef(null)
  // 保证渲染完成
  useEffect(() => {
    // 1.获取渲染图标的dom节点
    const chartDom = chartRef.current
    // 2.初始化echarts实例
    const myChart = echarts.init(chartDom);
    // 3.设置option参数
    const option = {
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
  return (<div><div ref={chartRef} style={{ width: '100%', height: 400 }}></div></div>)
}
export default Home