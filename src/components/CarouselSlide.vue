<template>
  <div>
    <template>
      <v-carousel
        show-arrows-on-hover
        hide-delimiter-background
        height="500"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </template>
  </div>
</template>
<script>
export default {
  name: "carousels",
  props: {
    items: Object,
    default: [],
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
</style>