<template>
  <v-carousel-item
    :style="{
      backgroundImage:
        'url(' +
        ('img' in slide_item
          ? require('@/assets/slide/' + slide_item.img)
          : '') +
        ')'
    }"
  >
    <v-row class="fill-height" align="center" justify="center">
      <div>
        <div class="headline text-center">
          {{ slide_item.title }}
        </div>
        <div class="body-1 text-center px-6 px-lg-12">
          {{ slide_item.desc }}
        </div>
      </div>
    </v-row>
  </v-carousel-item>
</template>

<script>
export default {
  props: ["slide_item"]
};
</script>

<style></style>
