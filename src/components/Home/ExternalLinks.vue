<template>
  <v-row>
    <v-col v-for="l in links" :key="l.title" cols="6" class="pa-2">
      <v-btn block outlined tile ripple color="primary" :href="l.url">{{
        l.title
      }}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: "内部网络",
        url: "https://net.nia.ac.cn"
      },
      {
        title: "项目列表",
        url: "https://github.com/UESTC-Ingress"
      },
      {
        title: "招聘信息",
        url: "https://recruit.nia.ac.cn/"
      },
      {
        title: "邮件系统",
        url: "http://mail.nia.ac.cn"
      },
      {
        title: "探员门户",
        url: "https://portal.nia.ac.cn"
      },
      {
        title: "联系我们",
        url: "mailto:admin@nia.ac.cn"
      }
    ]
  })
};
</script>

<style></style>
