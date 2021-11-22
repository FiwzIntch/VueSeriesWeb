<template>
  <v-main class="pt-0 bg-color">
    <router-view></router-view>
  </v-main>
</template>
<script>
export default {
  name: "content",
};
</script>
<style scoped>
.bg-color {
  background-color: #fafafa;
}
</style>