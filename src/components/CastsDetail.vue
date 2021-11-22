<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-row class="px-2 py-4">
      <v-col cols="12">
        <h3 class="text-center">Cast & Crew</h3>
      </v-col>
    </v-row>
    <v-list two-line>
      <v-row no-gutters>
        <v-col
          class="pa-0 detail-right-cast"
          cols="12"
          xl="8"
          lg="10"
          md="12"
          sm="6"
          v-for="(cast, index) in itemCasts"
          :key="index"
        >
          <v-list-item>
            <v-list-item-avatar size="100">
              <v-img :src="cast.img"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{cast.name}}</v-list-item-title>
              <v-list-item-subtitle>as {{cast.role}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "casts",
  props: {
    itemCasts: Object,
    default: [],
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
@media screen and (min-width: 960px) {
  .detail-right-cast {
    margin: 0 auto;
  }
}
</style>