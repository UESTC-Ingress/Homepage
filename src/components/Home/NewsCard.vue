<template>
  <v-card>
    <v-card-title
      class="py-2 px-4 news-title text-subtitle-1 font-weight-bold primary--text"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/header_' + url + '.png') + ')'
      }"
    >
      {{ title }}
    </v-card-title>
    <v-divider />
    <v-card-text class="news-view">
      <h5
        class="text-body-1 text-truncate py-1"
        v-for="n in news.slice(0, 5)"
        :key="n.url"
      >
        <router-link :to="'article/news/' + url + '/' + n.url">{{ n.title }}</router-link>
      </h5>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-chip color="primary" small label :to="'/category/news/' + url">查看更多</v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["news", "title", "url"]
};
</script>
<style scoped>
.news-view {
  overflow: hidden;
  max-height: 200px;
}

.news-title {
  background-position: 20% 30%;
}

a {
  text-decoration: none;
}
</style>