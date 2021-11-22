<template>
  <v-container class="my-12">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        v-for="data in series"
        :key="data"
      >
        <v-card
          max-width="300"
          outlined
          @click="gotoDetail"
        >
          <v-card-title class="pa-3">
            <v-img
              height="300"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            ></v-img>
          </v-card-title>
          <v-card-text class="title text-truncate px-2 pt-1 pb-0 px-4">
            {{data}}
          </v-card-text>
          <v-card-actions class="pt-1 pb-3 px-3 body-2">
            <v-rating
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              dense
              readonly
              size="22"
            ></v-rating>
            <v-spacer></v-spacer>
            <div class="text-review">12 reviews</div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "contentseries",
  props: {
    items: Object,
    default: [],
  },
  data() {
    return {
      rating: 4,
      series: [
        "Nevertheless",
        "Police University",
        "Lovers of the Red Sky",
        "Hometown Cha-Cha-Cha",
        "River Where the Moon Rises",
        "Vincenzo",
        "Youth of May",
        "Hospital Playlist Season 2",
        "Sisyphus: The Myth",
        "Taxi Driver",
        "So I Married An Anti-Fan",
        "Law School",
        "Mine",
      ],
    };
  },
  methods: {
    gotoDetail() {
      this.$router.replace({ name: "detail" });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.text-review {
  color: #1976d2;
}
</style>>
