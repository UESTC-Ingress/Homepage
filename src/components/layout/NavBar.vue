<template>
  <div>
    <v-row no-gutters class="header-img">
      <v-col cols="12">
        <v-row>
          <v-container class="py-0">
            <v-footer class="header-bar px-12 hidden-sm-and-down">
              <small>{{ Date() }}</small> <v-spacer />
              <small>
                <a class="text-muted" href="mailto:admin@nia.ac.cn">联系我们</a>
                |
                <a class="text-muted" href="https://net.nia.ac.cn">内部资源</a>
                |
                <a class="text-muted" href="http://mail.nia.ac.cn">邮件系统</a>
                |
                <a class="text-muted" href="mailto:coop@nia.ac.cn">申请合作</a>
              </small></v-footer
            >
            <v-col cols="12" md="6" lg="8">
              <v-img
                @click="$router.push('/')"
                class="header-imgshow"
                contain
                max-height="150px"
                :src="require('@/assets/niacn_logo_long.png')"
              />
            </v-col>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
    <v-app-bar elevate-on-scroll id="main-bar" color="primary" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="$store.commit('toggleDrawerShow')"
      ></v-app-bar-nav-icon>
      <v-container class="py-0 fill-height hidden-sm-and-down">
        <NavItem v-for="n in nav" :key="n.title" :item="n" />
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import navdata from "@/data/nav.json";
import NavItem from "./NavItem";

export default {
  data: () => ({
    nav: navdata
  }),
  components: {
    NavItem
  }
};
</script>

<style lang="scss" scoped>
.header-img {
  background-image: url("~@/assets/header_bg.png");
}

.header-bar {
  background-color: rgba($color: #ffffff, $alpha: 0.2) !important;
}

.header-imgshow {
  filter: drop-shadow(5px 5px 5px #fff);
}
a {
  text-decoration: none;
}
</style>