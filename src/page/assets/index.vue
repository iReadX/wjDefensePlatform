<!--
****--@date     2018-12-20 20:10
****--@author   YC
****--@describe 资产识别
-->
<template>
  <div class="assetsMain">
    <el-row class="safetySituation">
      <el-col class="info" :xs="{span: 24}"
              :sm="{span: 12}"
              :md="{span: 12}"
              :lg="{span: 8}"
              :xl="{span: 8}">
        <h1>安全状况评分：{{ safetySituation.speed }}</h1>
        <p>（网络安全情况比较危险，建议进行安全加固）</p>
      </el-col>
      <el-col class="circleBox" :xs="{span: 24}"
              :sm="{span: 12}"
              :md="{span: 12}"
              :lg="{span: 10}"
              :xl="{span: 8}">
        <div class="content">
          <el-col class="circleBox" :xs="{span: 5}"
                  :sm="{span: 7}"
                  :md="{span: 8}"
                  :lg="{span: 8}"
                  :xl="{span: 8}">
            <el-progress class="circle" :width="98" type="circle" :percentage="safetySituation.speed" color="#ff6778"></el-progress>
          </el-col>
          <el-col class="circleBox" :xs="{span: 19}"
                  :sm="{span: 17}"
                  :md="{span: 16}"
                  :lg="{span: 16}"
                  :xl="{span: 16}">
            <div class="textBox">
              <p>正在进行评估：故障检测</p>
            </div>
          </el-col>
        </div>
      </el-col>
      <el-col :xs="{span: 24}"
              :sm="{span: 24}"
              :md="{span: 24}"
              :lg="{span: 6, class: 'right'}"
              :xl="{span: 8, class: 'right'}">
        <div class="btnBox">
          <el-button type="primary" class="cancelBtn">取消评估</el-button>
        </div>
      </el-col>
      <el-col>
        <p class="speed" :style="{width:safetySituation.speed+'%'}"></p>
      </el-col>
    </el-row>
    <el-row class="boxItem">
      <el-col class="boxMain"
              :xs="{span: 24}"
              :sm="{span: 24}"
              :md="{span: 10}"
              :lg="{span: 8}"
              :xl="{span: 8}"
      >
        <div class="boxContent">
          <h2>资产总数：<b>3000</b></h2>
          <el-row class="assetsType">
            <el-col :span="8">
              <p>1000</p>
              <span class="windowsOs">Windows</span>
            </el-col>
            <el-col :span="8">
              <p>1000</p>
              <span class="linuxOs">Linux</span>
            </el-col>
            <el-col :span="8">
              <p>1000</p>
              <span class="otherOs">Other</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col  class="boxMain"
              :xs="{span: 24, class: 'noPadding'}"
              :sm="{span: 24, class: 'noPadding'}"
              :md="{span: 14, class: 'noPaddingRight'}"
              :lg="{span: 8}"
              :xl="{span: 8}"
      >
        <el-col :span="12" class="file">
          <div class="boxContent">
            <h2>窃密文档监测</h2>
            <el-row>
              <el-col :span="12">
                <b>12个</b>
                <p>蜜饵文档</p>
              </el-col>
              <el-col :span="12">
                <b>5次</b>
                <p>支付转化率</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12" class="special">
          <div class="boxContent">
            <h2>专项检查：<strong>高危</strong><span>10个</span></h2>
            <ul>
              <li>
                <span class="active">7</span>
                <p>MS17-010</p>
              </li>
              <li>
                <span>3</span>
                <p>MS17-067</p>
              </li>
              <li>
                <span>7</span>
                <p>MS17-010</p>
              </li>
              <li>
                <span>3</span>
                <p>MS17-067</p>
              </li>
              <li>
                <span>4</span>
                <p>MS17-010</p>
              </li>
            </ul>
          </div>
        </el-col>
      </el-col>
      <el-col  class="boxMain"
               :xs="{span: 24}"
               :sm="{span: 24}"
               :md="{span: 24}"
               :lg="{span: 8}"
               :xl="{span: 8}"
      >
        <div class="boxContent">
          <h2>威胁预警</h2>
          <ul class="threatWarning">
            <li class="active">
              <p>关于Oracle WebLogic Server存在反序列化运程代码执行漏洞的安全公告</p>
            </li>
            <li>
              <p>关于第三方支付平台JAVA SDK存在XXE漏洞的安全公告</p>
            </li>
            <li>
              <p>关于第三方支付平台JAVA SDK存在XXE漏洞的安全公告</p>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="boxItem chartBox">
     <el-col class="boxMain"
             :xs="{span: 24}"
             :sm="{span: 24}"
             :md="{span: 12}"
             :lg="{span: 8}"
             :xl="{span: 8}">
       <div class="boxContent serverPort">
         <h2>端口服务数</h2>
         <div class="chartMain">
           <div id="serverPort"></div>
         </div>
       </div>
     </el-col>
      <el-col class="boxMain"
              :xs="{span: 24, class: 'noPadding'}"
              :sm="{span: 24, class: 'noPadding'}"
              :md="{span: 12, class: 'noPaddingRight'}"
              :lg="{span: 8}"
              :xl="{span: 8}">
        <div class="boxContent portAttack">
          <h2>受攻击端口分布</h2>
          <div class="chartMain">
            <div id="portAttack"></div>
          </div>
        </div>
      </el-col>
      <el-col class="boxMain"
              :xs="{span: 24}"
              :sm="{span: 24}"
              :md="{span: 24}"
              :lg="{span: 8}"
              :xl="{span: 8}">
        <div class="boxContent threatTracking">
          <h2>内源威胁追踪溯源</h2>
          <div class="chartMain">
            <div id="threatTracking"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="boxContent chartBox">
      <h2>24小时受攻击次数</h2>
      <div class="chartMain">
        <div id="attackNumber"></div>
      </div>
    </div>
  </div>
</template>
<script>
/* 当前组件必要引入 */

export default {
  name: 'AssetsIndex',
  props: {},
  data () {
    return {
      safetySituation: {
        speed: 46
      },
      serverPortChart: null,
      portAttackChart: null,
      threatTrackingChart: null,
      attackNumberChart: null
    }
  },
  methods: {
    // 初始化
    init () {
    },
    initChart () {
      this.serverPort()
      this.portAttack()
      this.threatTracking()
      this.attackNumber()
    },
    serverPort () {
      // 基于准备好的dom，初始化echarts实例
      this.serverPortChart = this.$echarts.init(document.getElementById('serverPort'))
      // 绘制图表
      this.serverPortChart.setOption({
        // title: { text: '' },
        color: ['#accbea'],
        tooltip: {
          formatter: '{b}: {c}'
        },
        grid: {
          left: '6%',
          right: '6%',
          bottom: '18%',
          containLabel: true
        },
        xAxis: {
          data: ['53%', '150%', '51%', '40%', '48%', '45%', '80%', '43%'],
          axisLine: {
            lineStyle: {
              color: '#58b5fc'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          scale: true,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#58b5fc'
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [{
          name: '',
          type: 'bar',
          barWidth: '40%',
          data: [5, 20, 36, 10, 10, 20, 30, 40]
        }]
      })
    },
    portAttack () {
      // 基于准备好的dom，初始化echarts实例
      this.portAttackChart = this.$echarts.init(document.getElementById('portAttack'))
      // 绘制图表
      this.portAttackChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '端口{b}: {c} ({d}%)'
        },
        color: ['#f8e367', '#e18197', '#8abe6e', '#93ccce', '#7ababc'],
        legend: {
          orient: 'left',
          // x: 'right',
          itemWidth: 15,
          itemHeight: 16,
          top: 'middle',
          left: '75%',
          data: [
            {name: '44', icon: 'image://' + require('../../assets/indications/indication1.png')},
            {name: '223', icon: 'image://' + require('../../assets/indications/indication2.png')},
            {name: '225', icon: 'image://' + require('../../assets/indications/indication3.png')},
            {name: '7889', icon: 'image://' + require('../../assets/indications/indication4.png')},
            {name: '567', icon: 'image://' + require('../../assets/indications/indication5.png')}
          ]
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '44'},
              {value: 310, name: '223'},
              {value: 234, name: '225'},
              {value: 135, name: '7889'},
              {value: 1548, name: '567'}
            ]
          }
        ]
      })
    },
    threatTracking () {
      // 基于准备好的dom，初始化echarts实例
      this.threatTrackingChart = this.$echarts.init(document.getElementById('threatTracking'))
      // 绘制图表
      this.threatTrackingChart.setOption({
        title: {
          // text: '堆叠区域图'
        },
        color: ['#424242', '#8a9095', '#ababab', '#cfcfcf', '#e2e2e2', '#dedede', '#ececec', '#f4f4f4'],
        tooltip: {
          trigger: 'axis'
          // axisPointer: {
          //   type: 'cross',
          //   label: {
          //     backgroundColor: '#6a7985'
          //   }
          // }
        },
        legend: {
          orient: 'left',
          x: 'right',
          icon: 'rect',
          padding: [20, 5, 5, 5],
          textStyle: {
            padding: [15, 0]
          },
          data: ['192.168.99.5', '192.168.99.4', '192.168.99.3', '192.168.99.2', '192.168.99.1']
        },
        grid: {
          top: '30px',
          left: '70px',
          right: '130px',
          bottom: '30px'
        },
        xAxis: [
          {
            type: 'category',
            name: '\n\n\n日期',
            nameLocation: 'start',
            nameTextStyle: {
              color: '#333'
            },
            boundaryGap: false,
            data: ['12.01', '12.02', '12.03', '12.04', '12.05'],
            axisLine: {
              lineStyle: {
                width: 0,
                color: '#41a5f0'
              }
            }
          }
        ],
        yAxis: [
          {
            name: '发\n起\n攻\n击\n的\n次\n数',
            nameGap: -60,
            nameTextStyle: {
              color: '#333',
              padding: [0, 0, 0, 20]
            },
            offset: 20,
            show: true,
            type: 'value',
            axisLine: {
              lineStyle: {
                width: 0,
                color: '#e6ebfc'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#e6ebfc'
              }
            },
            axisLabel: {
              color: '#41a5f0',
              verticalAlign: 'bottom'
            }
          },
          {
            name: `攻\n击\n者\nip\n地\n址`,
            nameGap: -48,
            nameTextStyle: {
              color: '#333'
            },
            offset: 10,
            show: true,
            width: 20,
            type: 'value',
            axisLine: {
              lineStyle: {
                width: 0,
                color: '#41a5f0'
              }
            }
          }
        ],
        series: [
          {
            name: '192.168.99.1',
            type: 'line',
            stack: '1',
            areaStyle: {
              color: '#424242',
              opacity: 1
            },
            symbol: 'none',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '192.168.99.2',
            type: 'line',
            stack: '1',
            areaStyle: {
              color: '#8a9095',
              opacity: 1
            },
            symbol: 'none',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '192.168.99.3',
            type: 'line',
            stack: '1',
            areaStyle: {
              color: '#ababab',
              opacity: 1
            },
            symbol: 'none',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '192.168.99.4',
            type: 'line',
            stack: '1',
            areaStyle: {
              color: '#cfcfcf',
              opacity: 1
            },
            symbol: 'none',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '192.168.99.5',
            type: 'line',
            stack: '1',
            areaStyle: {
              color: '#e2e2e2',
              opacity: 1
            },
            symbol: 'none',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    },
    attackNumber () {
      // 基于准备好的dom，初始化echarts实例
      this.attackNumberChart = this.$echarts.init(document.getElementById('attackNumber'))
      // 绘制图表
      this.attackNumberChart.setOption({
        xAxis: {
          type: 'category',
          data: this.getHours(),
          axisLine: {
            lineStyle: {
              color: '#58b5fc'
            }
          },
          axisLabel: {
            rotate: 40
          }
        },
        color: ['#a5d1fd'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter (params, ticket, callback) {
            let html = '<table class="echarts-tooltips">'
            html += '<tr class="row"><td class="left">SSH[22]:</td><td class="right">0次</td></tr>'
            html += '<tr class="row"><td class="left">SMBD[445]:</td><td class="right">10次</td></tr>'
            html += '<tr class="row"><td class="left">MySQL[3306]:</td><td class="right">100次</td></tr>'
            html += '</table>'
            return html
          },
          padding: 0,
          backgroundColor: 'rgba(50, 50, 50, 0.4)',
          position (point, params, dom, rect, size) {
            let left = point[0] + 5
            let bottom = size.viewSize[1] - point[1] + 5
            if (left + size.contentSize[0] > size.viewSize[0]) {
              left = size.viewSize[0] - size.contentSize[0]
            }
            return {
              left: left,
              bottom: bottom
            }
          }
        },
        grid: {
          top: '20px',
          left: '20px',
          right: '20px',
          bottom: '40px',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          axisLine: {
            nameRotate: 90,
            lineStyle: {
              color: '#58b5fc'
            }
          }
        },
        series: [{
          data: [...'1'.repeat(24).split('').map(_ => this.random(100, 1000))],
          type: 'line',
          symbol: 'circle',
          lineStyle: {
            shadowColor: 'rgba(165, 209, 253, .5)',
            shadowBlur: 10
          },
          emphasis: {
            itemStyle: {
              color: '#74A7DA',
              borderColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                  offset: 0, color: '#74A7DA'
                }, {
                  offset: 0.3, color: '#74A7DA'
                }, {
                  offset: 0.52, color: '#444'
                }, {
                  offset: 0.59, color: '#444'
                }, {
                  offset: 0.60, color: '#74A7DA'
                }, {
                  offset: 0.69, color: '#74A7DA'
                }, {
                  offset: 0.70, color: '#DBECFC'
                }, {
                  offset: 0.79, color: '#DBECFC'
                }, {
                  offset: 0.8, color: '#CEE1F4'
                }, {
                  offset: 1, color: '#CEE1F4' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              borderWidth: 18,
              shadowColor: 'rgba(165,209,253, .5)',
              shadowBlur: 10
            }
          }
        }]
      })
    },
    getHours () {
      let h = []
      '1'.repeat(24).split('').map((_, i) => h.push(this.padStart(i.toString()).toString() + ':00'))
      return h
    },
    random (lower, upper) {
      return Math.floor(Math.random() * (upper - lower + 1)) + lower
    },
    padStart (num) {
      return +num < 10 ? '0' + num : num
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.initChart()
    this.$nextTick(function () {
      let _this = this
      window.onresize = function () {
        _this.serverPortChart.resize()
        _this.portAttackChart.resize()
        _this.threatTrackingChart.resize()
        _this.attackNumberChart.resize()
      }
    })
  },
  components: {}
}

</script>
