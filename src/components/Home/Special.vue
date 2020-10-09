<template>
  <v-card class="mt-4">
    <v-card-title
      class="py-2 px-4 news-title text-subtitle-1 font-weight-bold primary--text"
      :style="{
        backgroundImage: 'url(' + require('@/assets/header_special.png') + ')'
      }"
    >
      专题
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-btn large tile block outlined disabled>暂无内容</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>