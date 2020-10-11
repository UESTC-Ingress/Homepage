<template>
  <v-card>
    <v-navigation-drawer floating permanent>
      <v-list dense rounded>
        <v-subheader>栏目导航</v-subheader>
        <v-list-item
          link
          v-for="it in items.sub"
          :key="it.title"
          :to="url + '/' + it.link"
        >
          <v-list-item-icon>
            <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ it.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  props: ["items", "url"]
};
</script>

<style></style>
