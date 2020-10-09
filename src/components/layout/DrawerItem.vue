<template>
  <div>
    <v-list-group v-if="'sub' in item" offset-y>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item @click="nav_item(i)" v-for="i in item.sub" :key="i.title">
        <v-list-item-content>
          {{ i.title }}
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
    <v-list-item v-else text :to="item.link"> {{ item.title }}</v-list-item>
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