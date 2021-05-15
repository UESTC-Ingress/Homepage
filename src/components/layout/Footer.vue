<template>
  <v-footer padless rounded class="justify-center">
    <v-card
      flat
      tile
      width="100%"
      class="red lighten-1 text-center footer-card"
    >
      <v-container>
        <v-card-actions class="justify-center">
          <v-btn dark text v-for="l in footer_links" :key="l.title">{{
            l.title
          }}</v-btn>
          <v-spacer class="hidden-sm-and-down"></v-spacer>
          <v-select
            class="hidden-sm-and-down"
            dark
            outlined
            filled
            dense
            v-model="l_selected"
            :items="outlinks"
          >
          </v-select>
        </v-card-actions>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-card-text class="white--text">
          <v-row>
            <v-col cols="12" md="6">
              <v-img
                class="header-imgshow"
                contain
                max-height="150px"
                :src="require('@/assets/niacn_logo_long.png')"
              />
            </v-col>
            <v-col cols="12" md="6" class="text-left">
              <p>
                Copyright ©
                {{ new Date().getFullYear() }} 奈安提克计划中国奇异物质研究所
              </p>
              <p>地址:成都市高新区（西区）西源大道2006号</p>
              <p>邮编:611731 电话:1331-13313113-0100 NIACNET备1331-02号</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    l_selected: "null",
    footer_links: [
      {
        title: "负责人信箱",
        url: "admin@nia.ac.cn"
      },
      {
        title: "网站地图",
        url: "#"
      },
      {
        title: "留言反馈",
        url: "#"
      },
      {
        title: "联系我们",
        url: "admin@nia.ac.cn"
      }
    ],
    outlinks: [
      {
        text: "友情链接",
        value: "null"
      },
      {
        text: "奈安提克计划首页",
        value: "https://nianticproject.com"
      }
    ]
  }),
  watch: {
    l_selected: function(i) {
      if (i != "null") window.location.href = i;
    }
  }
};
</script>
<style scoped>
.v-image {
  filter: brightness(0) invert(1);
}

.footer-card {
  background: round;
  background-image: url("~@/assets/footer_bg.jpg");
}
</style>
