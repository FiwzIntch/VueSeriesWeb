<template>
  <div>
    <!-- <slidebanner :items.sync="item" /> -->
  </div>
</template>

<script>
// import slidebanner from "@/components/CarouselSlide";
export default {
  name: "thaiseries",
  // components: { slidebanner },
  data() {
    return {
      item: [
        require("@/assets/banner/thai4.jpg"),
        require("@/assets/banner/thai1.jpg"),
        require("@/assets/banner/thai2.jpg"),
        require("@/assets/banner/thai3.jpg"),
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>