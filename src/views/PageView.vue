<template>
  <div class="category">
    <v-container>
      <v-row>
        <v-col cols="3" class="hidden-md-and-down">
          <NavBox
            :items="nav"
            :url="
              (this.$route.name === 'ArticleView' ? '/category/' : '/page/') +
                this.$route.params.category
            "
          />
        </v-col>
        <v-col cols="12" lg="9">
          <v-card>
            <v-card-text>
              <h5 class="text-h6">{{ navitem.title }}</h5>
              <v-divider />
              <MarkdownShow :mdlink="genlink" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import navlinks from "@/data/nav.json";
import NavBox from "@/components/layout/NavBox.vue";
import MarkdownShow from "@/components/PageView/MarkdownShow.vue";

export default {
  components: { NavBox, MarkdownShow },
  computed: {
    nav() {
      return navlinks.find(x => x.link === this.$route.params.category);
    },
    navitem() {
      return navlinks
        .find(x => x.link === this.$route.params.category)
        .sub.find(x => x.link === this.$route.params.item);
    },
    baseurl() {
      if (this.$route.name === "ArticleView") {
        return (
          this.$route.params.category +
          "/" +
          this.$route.params.item +
          "/" +
          this.$route.params.article
        );
      } else {
        return this.$route.params.category + "/" + this.$route.params.item;
      }
    },
    genlink() {
      return "/doc/" + this.baseurl + ".md";
    }
  }
};
</script>

<style></style>
