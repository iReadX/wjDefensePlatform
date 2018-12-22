<!--
****--@date     2018-12-20 22:50
****--@author   YC
****--@describe 菜单
-->
<template>
  <ul class="menu">
    <router-link to="/overview" class="item assets" tag="li">
      <a><p class="a">概览</p></a>
      <ul>
        <router-link to="/overview/assets" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
        <router-link to="/overview/other" class="nav" tag="li">
          <div>
            <a><p>资产识别</p></a>
          </div>
        </router-link>
      </ul>
    </router-link>
    <router-link to="/risk_assessment" class="item risk_assessment" tag="li">
      <a><p class="a">风险评估</p></a>
    </router-link>
    <router-link to="/risk_mitigation" class="item risk_mitigation" tag="li">
      <a><p class="a">风险缓解</p></a>
    </router-link>
    <router-link to="/threat_perception" class="item threat_perception" tag="li">
      <a><p class="a">威胁感知</p></a>
    </router-link>
    <router-link to="/analysis_report" class="item analysis_report" tag="li">
      <a><p class="a">分析报告</p></a>
    </router-link>
    <router-link to="/response" class="item response" tag="li">
      <a><p class="a">响应</p></a>
    </router-link>
    <router-link to="/system" class="item system" tag="li">
      <a><p class="a">系统管理</p></a>
    </router-link>
  </ul>
</template>
<script>
/* 当前组件必要引入 */
export default {
  name: 'myMenu',
  props: {},
  data () {
    return {}
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
