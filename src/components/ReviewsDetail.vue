<template>
  <v-card
    class="mx-auto my-4"
    outlined
  >
    <v-row class="px-2 py-4">
      <v-col cols="12">
        <h3 class="px-5">Ratings & Reviews</h3>
      </v-col>
      <v-col
        cols="12"
        xl="3"
        class="text-center"
      >
        <span class="display-4"> 4.4 </span>
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          dense
          readonly
          size="32"
        ></v-rating>
        <span class="subtitle-1">120 reviews</span>
      </v-col>
      <v-col
        cols="12"
        xl="6"
      >
        <div class="my-4">
          <span>5</span>
          <v-progress-linear
            height="15"
            value="80"
            rounded
          ></v-progress-linear>
        </div>
        <div class="my-4">
          <v-progress-linear
            height="15"
            value="45"
            rounded
          ></v-progress-linear>
        </div>
        <div class="my-4">
          <v-progress-linear
            height="15"
            value="20"
            rounded
          ></v-progress-linear>
        </div>
        <div class="my-4">
          <v-progress-linear
            height="15"
            value="10"
            rounded
          ></v-progress-linear>
        </div>
        <div class="my-4">
          <v-progress-linear
            height="15"
            value="5"
            rounded
          ></v-progress-linear>
        </div>
      </v-col>
      <v-col
        cols="12"
        xl="3"
        class="text-center my-auto"
      >
        <v-btn
          class="ma-2"
          color="success"
          large
        >
          Write a review
        </v-btn>
      </v-col>
    </v-row>
  </v-card>

</template>
<script>
export default {
  name: "reviews",
  data() {
    return {
      rating: 5,
    };
  },
  mounted() {},
};
</script>

<style>
</style>