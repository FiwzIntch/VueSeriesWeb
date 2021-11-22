<template>
  <div>
    <v-app-bar
      height="70"
      app
      color="#FFF"
    >
      <v-avatar
        :tile="true"
        size="140"
        class="mt-5"
        :style="{ cursor: 'pointer'}"
        @click="$router.push({name: 'koreaseries'})"
      >
        <img
          :src="require('@/assets/brand-logo.png')"
          alt="logo"
        >
      </v-avatar>
      <v-spacer></v-spacer>
      <v-tabs
        class="mx-3"
        right
        color="#BD4B4B"
        v-model="tabs"
        hide-slider
      >
        <v-tab
          v-for="tab in itemTabs"
          :key="tab.name"
          @click="gotoContent(tab.path)"
        >
          {{ tab.text }}
        </v-tab>
      </v-tabs>
      <v-btn
        class="mx-3"
        color="#BD4B4B"
        large
        dark
      >
        Login
      </v-btn>
    </v-app-bar>
    <slidebanner :items.sync="item" />
  </div>
</template>
<script>
import slidebanner from "@/components/CarouselSlide";
export default {
  name: "desktop",
  components: { slidebanner },
  data() {
    return {
      tabs: "",
      itemTabs: [
        {
          name: "korea",
          text: "Korea Series",
          path: "/korea",
        },
        {
          name: "chinese",
          text: "Chinese Series",
          path: "/chinese",
        },
        {
          name: "thai",
          text: "Thai Series",
          path: "/thai",
        },
        {
          name: "western",
          text: "Western Series",
          path: "/western",
        },
      ],
      item: [
        require("@/assets/banner/korea2.jpg"),
        require("@/assets/banner/korea1.jpg"),
        require("@/assets/banner/korea3.jpg"),
        require("@/assets/banner/korea4.png"),
      ],
    };
  },
  methods: {
    gotoContent(path) {
      switch (path.substring(1)) {
        case "korea":
          this.item = [
            require("@/assets/banner/korea2.jpg"),
            require("@/assets/banner/korea1.jpg"),
            require("@/assets/banner/korea3.jpg"),
            require("@/assets/banner/korea4.png"),
          ];
          break;
        case "thai":
          this.item = [
            require("@/assets/banner/thai4.jpg"),
            require("@/assets/banner/thai1.jpg"),
            require("@/assets/banner/thai2.jpg"),
            require("@/assets/banner/thai3.jpg"),
          ];
          break;
        case "chinese":
          this.item = [
            require("@/assets/banner/china1.jpg"),
            require("@/assets/banner/china2.jpg"),
            require("@/assets/banner/china3.jpg"),
            require("@/assets/banner/china4.jpg"),
          ];
          break;
        case "western":
          this.item = [
            require("@/assets/banner/west2.jpg"),
            require("@/assets/banner/west1.png"),
            require("@/assets/banner/west3.jpg"),
            require("@/assets/banner/west4.jpeg"),
          ];
          break;
        default:
          break;
      }
      this.$router.push({ path: path });
    },
  },
};
</script>
<style scoped>
</style>