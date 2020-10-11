<template>
  <v-row>
    <v-col cols="12" sm="6" v-for="n in news" :key="n.url">
      <NewsCard
        :title="n.title"
        :news="require('@/data/category/news/' + n.url)"
        :url="n.url"
      />
    </v-col>
  </v-row>
</template>

<script>
import NewsCard from "./NewsCard";

export default {
  components: {
    NewsCard
  },
  data: () => ({
    news: [
      {
        title: "科研动态",
        url: "research"
      },
      {
        title: "项目进展",
        url: "projects"
      },
      {
        title: "综合新闻",
        url: "generic"
      },
      {
        title: "会议信息",
        url: "conference"
      }
    ]
  })
};
</script>

<style></style>
