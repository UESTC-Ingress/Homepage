<template>
  <div class="home">
    <section class="d-flex align-center">
      <v-container>
        <Headline />
        <v-row>
          <v-col cols="12" lg="8"><Banner /><NewsView /></v-col>
          <v-col cols="12" lg="4"><ExternalLinks /> <Special /></v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import Headline from "@/components/Home/Headline.vue";
import Banner from "@/components/Home/Banner.vue";
import NewsView from "@/components/Home/NewsView.vue";
import ExternalLinks from "@/components/Home/ExternalLinks.vue";
import Special from "@/components/Home/Special.vue";

export default {
  name: "Home",
  components: { Headline, NewsView, ExternalLinks, Banner, Special }
};
</script>
