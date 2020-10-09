<template>
  <v-carousel-item>
    <v-sheet color="primary" height="100%" tile>
      <v-row class="fill-height" align="center" justify="center">
        <div class="display-3">
          {{ slide_item.title }}
        </div>
      </v-row>
    </v-sheet>
  </v-carousel-item>
</template>

<script>
export default {
  props: ["slide_item"]
};
</script>

<style>
</style>