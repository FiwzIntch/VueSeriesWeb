<template>
  <v-app>
    <headerbar />
    <contentbar />
    <footerbar />
  </v-app>
</template>
<script>
import headerbar from "@/components/Header";
import contentbar from "@/components/Content";
import footerbar from "@/components/Footer";
export default {
  components: { headerbar, contentbar, footerbar },
  data() {
    return {};
  },
};
</script>


