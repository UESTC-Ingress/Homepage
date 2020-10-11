<template>
  <v-skeleton-loader :loading="loading" type="article,paragraph,paragraph">
    <VueMarkdown :source="mdtext"></VueMarkdown
  ></v-skeleton-loader>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  props: ["mdlink"],
  data: () => ({
    mdtext: "",
    loading: true
  }),
  components: {
    VueMarkdown
  },
  methods: {
    refreshHTML() {
      this.loading = true;
      this.$ajax
        .get(this.mdlink)
        .then(response => {
          this.mdtext = response.data;
          this.loading = false;
        })
        .catch(() => {
          this.mdtext = "暂无内容";
          this.loading = false;
        });
    }
  },
  computed: {
    flag() {
      return this.$route;
    }
  },
  watch: {
    flag() {
      this.refreshHTML();
    }
  },
  mounted() {
    this.refreshHTML();
  }
};
</script>

<style></style>
