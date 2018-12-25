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
           <v-chart :forceFit="true" :height="300" :data="axisData"
                    :scale="axisScale">
             <v-tooltip />
             <v-axis />
             <v-bar position="year*sales" />
           </v-chart>
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
            <v-chart :forceFit="true" :height="300" :data="pieData" :scale="pieScale">
              <v-tooltip :showTitle="false" dataKey="item*percent" />
              <v-axis />
              <v-legend dataKey="item" />
              <v-pie position="percent" color="item" :vStyle="pieStyle" :label="pieLabelConfig" />
              <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
            </v-chart>
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
            <v-chart :forceFit="true" :height="300" :data="lineData" :scale="lineScale">
              <v-tooltip />
              <v-axis />
              <v-legend />
              <v-line position="time*value" :size="2" color="ip" adjust="stack" />
              <v-stack-area position="time*value" color="ip" />
            </v-chart>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="boxContent chartBox">
      <h2>24小时受攻击次数</h2>
      <div class="chartMain">
        <v-chart :forceFit="true" :height="300" :data="gLineData" :scale="gLineScale">
          <v-tooltip :itemTpl="gItemTpl"/>
          <v-axis />
          <v-line position="time*value" />
          <v-point position="time*value" shape="circle" />
        </v-chart>
      </div>
    </div>
  </div>
</template>
<script>
/* 当前组件必要引入 */
import {axisData, axisScale} from './axis'
import {pieData, pieScale, pieLabelConfig, pieStyle} from './pie'
import {lineData, lineScale} from './line'
import {gLineData, gLineScale, gItemTpl} from './gLine'

export default {
  name: 'AssetsIndex',
  props: {},
  data () {
    return {
      safetySituation: {
        speed: 46
      },
      axisData,
      axisScale,
      pieData,
      pieScale,
      pieLabelConfig,
      pieStyle,
      lineData,
      lineScale,
      gLineData,
      gLineScale,
      gItemTpl
    }
  },
  methods: {
    // 初始化
    init () {
    }

  },
  created () {
    this.init()
  },
  mounted () {
  },
  components: {}
}

</script>
