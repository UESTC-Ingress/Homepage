<template>
  <v-card>
    <v-card-text>
      <h5 class="text-h6 mx-4">{{ title }}</h5>
      <v-list dense multiple>
        <v-list-item
          disabled
          v-if="
            category.slice((currentPage - 1) * per_page, currentPage * per_page)
              .length === 0
          "
        >
          <v-list-item-content>
            <v-list-item-title>暂无内容</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :to="geturl(item.url)"
          v-for="item in category.slice(
            (currentPage - 1) * per_page,
            currentPage * per_page
          )"
          :key="item.url"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text
              v-text="item.time"
            ></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <div class="text-center">
        <v-pagination
          :length="parseInt(category.length / per_page + 1)"
          circle
          v-model="currentPage"
        ></v-pagination>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["category", "title", "url"],
  data: () => ({
    per_page: 8,
    currentPage: 1
  }),
  methods: {
    geturl(u) {
      return "/article/" + this.url + "/" + u;
    }
  }
};
</script>

<style></style>
