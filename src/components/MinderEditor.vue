<template>
  <div>
    <div>
      <pre>{{ risk }}</pre>
    </div>
    <div>
      <minder-editor :progress-enable="false" :import-json="importJson"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "test-plugin",
  data() {
    return {
      risk: 'case：\n1.三方支付0 + 「余额」支付覆盖车费走普通支付的push\n2.「先乘后付」三方支付全部走先乘后付的push\\n3.以「先乘后付」三方支付部分 + 部分「余额」支付\\t走先乘后付的push\\n包含微信和支付宝先乘后付',

      // imagePath: require('@/assets/logo.png'),
      importJson: {
        // 节点数据
        root: {
          data: {
            // 文本内容
            text: 'vue-minder-editor-plus',
            // 标签
            resource: ['模块1'],
            // 是否禁止修改
            disable: true,
            // 默认展开或折叠，默认是展开的，collapse 可设为折叠
            // expandState: 'collapse',
            // 在 disable 为 true 的情况下，允许添加标签
            tagEnable: true,
            // 在 disable 为 true 的情况下，允许删除节点
            allowDelete: true,
            // 在 disable 为 true 的情况下，允许添加标签，优先级比 tagEnable 高
            allowDisabledTag: true,
          },
          // 子节点
          children: [
            {
              data: {
                text: 'child1',
                image: 'logo.png',
                disable: true,
                expandState: 'collapse',
                resource: ['模块2']
              },
              children: [
                {
                  data: {
                    text: 'child11',
                    image: 'logo.png',
                    disable: true,
                    resource: ['模块2']
                  },
                },
                {
                  data: {
                    // text: 'child12',
                    image: 'logo.png',


                  }
                }
              ]
            },
            {
              data: {
                image: 'logo.png',
              }
            }
          ]
        },
      },
      tags: ['模块1', '模块2']
    }
  },
  methods: {
  }
}
</script>

<style>
image {
  height: 50px;
  width: 50px;
  x: -20;
  y: 8;
}
</style>