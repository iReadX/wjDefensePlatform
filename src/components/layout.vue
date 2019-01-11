<!--
****--@date     2018-12-20 22:20
****--@author   YC
****--@describe 布局
-->
<template>
  <main class="layout">
    <div class="lHeaderBox">
      <slot name="header"></slot>
    </div>
    <div class="lContentBox">
      <div class="lMenu">
        <div class="lmmbox">
          <slot name="menu"></slot>
        </div>
      </div>
      <div class="lContentMain">
        <slot name="content"></slot>
      </div>
    </div>
  </main>
</template>
<script>
/* 当前组件必要引入 */
export default {
  name: 'layout',
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
