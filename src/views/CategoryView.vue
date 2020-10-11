<template>
  <div class="category">
    <v-container>
      <v-row>
        <v-col cols="3" class="hidden-md-and-down">
          <NavBox
            :items="nav"
            :url="'/category/' + this.$route.params.category"
          />
        </v-col>
        <v-col cols="12" lg="9">
          <CategoryPages
            :title="navitem.title"
            :category="category"
            :url="baseurl"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBox from "@/components/layout/NavBox.vue";
import CategoryPages from "@/components/Category/CategoryPages.vue";
import navlinks from "@/data/nav.json";

export default {
  components: { NavBox, CategoryPages },
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
      return this.$route.params.category + "/" + this.$route.params.item;
    },
    category() {
      try {
        return require("@/data/category/" + this.baseurl + ".json");
      } catch (e) {
        return [];
      }
    }
  }
};
</script>

<style></style>
