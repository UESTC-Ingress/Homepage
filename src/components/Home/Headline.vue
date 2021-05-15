<template>
  <v-card>
    <v-row no-gutters>
      <v-col cols="12" md="6"
        ><v-carousel :height="$vuetify.breakpoint.smAndDown ? '50vh' : '100%'">
          <SlideView
            v-for="it in headline_slide"
            :key="it.title"
            :slide_item="it"
          /> </v-carousel
      ></v-col>
      <v-col cols="12" md="6">
        <v-card-text>
          <v-card-subtitle class="py-0">头条新闻</v-card-subtitle>
          <v-card-title class="py-0">
            <router-link :to="'/article/news/headline/' + headlines[0].url">
              {{ headlines[0].title }}
            </router-link>
          </v-card-title>
          <v-card-text>
            {{ headlines[0].desc }}...
            <br/>
            <router-link :to="'/article/news/headline/' + headlines[0].url"
              >了解更多>></router-link
            >
          </v-card-text>
          <v-divider />
          <v-list>
            <v-list-item v-for="h in headlines.slice(0, 5)" :key="h.url">
              <v-list-item-content class="py-2">
                <v-list-item-title>
                  <router-link :to="'/article/news/headline/' + h.url">
                    {{ h.title }}
                  </router-link>
                </v-list-item-title>
                <v-list-item-subtitle>{{ h.time }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import SlideView from "./SlideView";
import headlines from "@/data/category/news/headline.json";
import headline_slide from "@/data/slide.json";

export default {
  components: { SlideView },
  data: () => ({
    headlines: headlines,
    headline_slide: headline_slide
  })
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
