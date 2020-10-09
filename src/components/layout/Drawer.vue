<template>
  <v-navigation-drawer v-model="drawerState" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> 中国奇异物质研究所</v-list-item-title>
        <v-list-item-subtitle
          >China Institute of Exotic Matter
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <DrawerItem v-for="n in nav" :key="n.title" :item="n" />
  </v-navigation-drawer>
</template>

<script>
import navdata from "@/data/nav.json";
import DrawerItem from "./DrawerItem.vue";

export default {
  data: () => ({
    nav: navdata
  }),
  components: {
    DrawerItem
  },
  computed: {
    drawerState: {
      get() {
        return this.$store.state.drawerShow;
      },
      set(v) {
        this.$store.commit("setDrawerShow", v);
      }
    }
  }
};
</script>

<style></style>
