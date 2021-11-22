<template>
  <div>
    <v-card
      class="mx-auto"
      color="#FFF"
    >
      <v-app-bar
        color="#EFB7B7"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer
      width="160"
      v-model="drawer"
      absolute
      temporary
    >

      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar
              size="80"
              class="mr-0"
            >
              <v-img :src="require('@/assets/no-img.png')"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item
            link
            inactive
          >
            <v-list-item-content>
              <v-list-item-title class="text-h6 text-center">
                <v-btn
                  text
                  color="primary"
                  plain
                >
                  Login
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-tabs
        color="#BD4B4B"
        hide-slider
        vertical
        class="mobile-menu"
      >
        <v-tab to="/korea">Korea Series</v-tab>
        <v-tab to="/chinese">Chinese Series</v-tab>
        <v-tab to="/thai">Thai Series</v-tab>
        <v-tab to="/western">Western Series</v-tab>
      </v-tabs>

      <!-- <template v-slot:append>
        <div class="pa-2">
          <v-btn
            color="#BD4B4B"
            dark
            block
          >
            logout
          </v-btn>
        </div>
      </template> -->

    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "mobile",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {},
};
</script>
<style scoped>
.mobile-menu .v-tab {
  justify-content: start;
}
</style>