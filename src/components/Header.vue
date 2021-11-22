<template>
  <div>
    <template v-if="isMobile">
      <mobile />
    </template>
    <template v-else>
      <desktop />
    </template>
  </div>
</template>
<script>
import desktop from "@/components/DesktopHeader";
import mobile from "@/components/MobileHeader";
export default {
  name: "header",
  components: {
    desktop,
    mobile,
  },
  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.name == "sm" ||
        this.$vuetify.breakpoint.name == "xs"
      );
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
</style>