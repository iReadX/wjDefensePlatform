<!--
****--@date     2018-12-20 22:50
****--@author   YC
****--@describe 菜单
-->
<template>
  <ul class="menu">
    <router-link to="/overview/assets" class="item first" tag="li">
      <a><p class="a" @click="
/* eslint-disable no-irregular-whitespace */
openOrClose('')">概　　览</p></a>
    </router-link>
    <li to="/risk_assessment" :class="{'open':menu=='risk_assessment'}" class="item risk_assessment" tag="li">
      <p class="a" @click="openOrClose('risk_assessment')">风险评估</p>
      <ul>
        <router-link to="/risk_assessment/assets" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/risk_assessment/other" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/risk_assessment/other2" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
      </ul>
    </li>
    <li to="/risk_mitigation" :class="{'open':menu=='risk_mitigation'}" class="item risk_mitigation" tag="li">
      <a><p class="a" @click="openOrClose('risk_mitigation')">风险缓解</p></a>
      <ul>
        <router-link to="/risk_mitigation/assets" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/risk_mitigation/other" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/risk_mitigation/other2" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
      </ul>
    </li>
    <li to="/threat_perception" :class="{'open':menu=='threat_perception'}" class="item threat_perception" tag="li">
      <a><p class="a" @click="openOrClose('threat_perception')">威胁感知</p></a>
      <ul>
        <router-link to="/threat_perception/assets" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/threat_perception/other" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/threat_perception/other2" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
      </ul>
    </li>
    <li to="/analysis_report" :class="{'open':menu=='analysis_report'}" class="item analysis_report" tag="li">
      <a><p class="a" @click="openOrClose('analysis_report')">分析报告</p></a>
      <ul>
        <router-link to="/analysis_report/assets" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/analysis_report/other" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/analysis_report/other2" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
      </ul>
    </li>
    <li to="/response" :class="{'open':menu=='response'}" class="item response" tag="li">
      <a><p class="a" @click="
/* eslint-disable no-irregular-whitespace */
openOrClose('response')">响　　应</p></a>
      <ul>
        <router-link to="/response/assets" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/response/other" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/response/other2" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
      </ul>
    </li>
    <li to="/system" :class="{'open':menu=='system'}" class="item system" tag="li">
      <a><p class="a" @click="openOrClose('system')">系统管理</p></a>
      <ul>
        <router-link to="/system/assets" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/system/other" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/system/other2" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
      </ul>
    </li>
  </ul>
</template>
<script>
/* 当前组件必要引入 */
export default {
  name: 'myMenu',
  props: {},
  data () {
    return {
      menu: ''
    }
  },
  methods: {
    // 初始化
    init () {
    },
    openOrClose (menu) {
      if (this.menu && this.menu === menu) {
        this.menu = ''
      } else {
        this.menu = menu
      }
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
