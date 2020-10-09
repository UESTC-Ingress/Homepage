<template>
  <div>
    <v-menu v-if="'sub' in item" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <span class="text-subtitle-1">{{ item.title }}</span>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list dense nav>
        <v-list-item @click="nav_item(i)" v-for="i in item.sub" :key="i.title">
          <v-list-item-content>
            {{ i.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-else text :to="item.link">
      <span class="text-subtitle-1">{{ item.title }}</span></v-btn
    >
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    nav_item: function(i) {
      if (i.type == "category" || i.type == "page") {
        this.$router.push("/" + i.type + "/" + this.item.link + "/" + i.link);
      } else if (i.type == "redirect") {
        window.location = i.url;
      }
    }
  }
};
</script>

<style>
</style>