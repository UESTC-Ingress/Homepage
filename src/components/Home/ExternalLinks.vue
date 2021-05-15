<template>
  <v-row>
    <v-col v-for="l in links" :key="l.title" cols="6" class="pa-2">
      <v-btn block outlined tile ripple color="primary" :href="l.url"><v-icon small left>{{l.icon}}</v-icon>{{
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
        icon: "mdi-lan",
        url: "https://net.nia.ac.cn"
      },
      {
        title: "项目列表",
        icon: "mdi-github",
        url: "https://github.com/UESTC-Ingress"
      },
      {
        title: "招聘信息",
        icon: "mdi-account-multiple-plus",
        url: "https://recruit.nia.ac.cn/"
      },
      {
        title: "邮件系统",
        icon: "mdi-email",
        url: "http://mail.nia.ac.cn"
      },
      {
        title: "探员门户",
        icon: "mdi-application",
        url: "https://portal.nia.ac.cn"
      },
      {
        title: "联系我们",
        icon: "mdi-card-account-mail",
        url: "mailto:admin@nia.ac.cn"
      }
    ]
  })
};
</script>

<style></style>
