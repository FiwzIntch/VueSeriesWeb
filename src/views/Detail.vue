<template>
  <v-container class="my-12">
    <v-row>
      <!-- left content -->
      <v-col
        cols="11"
        xl="9"
        lg="8"
        md="8"
        class="mx-auto"
      >

        <info />

        <reviews />

      </v-col>
      <!-- left content -->

      <!-- right content -->
      <v-col
        cols="11"
        xl="3"
        lg="4"
        md="4"
        class="mx-auto"
      >
        <casts :itemCasts.sync="casts" />
      </v-col>
      <!-- end right content -->
    </v-row>

  </v-container>
</template>
<script>
import info from "@/components/SeriesDetail";
import casts from "@/components/CastsDetail";
import reviews from "@/components/ReviewsDetail";
export default {
  name: "detail",
  components: { info, casts, reviews },
  data() {
    return {
      casts: [
        {
          name: "Lee Je-hoon",
          role: "Cho Sang Guu",
          img: "https://asianwiki.com/images/3/3e/Lee_Je-Hoon-10-23-2017.jpg",
        },
        {
          name: "Tang Joon-sang",
          role: "Geu Ru",
          img: "https://static.trueplookpanya.com/tppy/member/m_545000_547500/545920/cms/images/Tang%20Joonsang01.jpg",
        },
        {
          name: "Hong Seung Hee",
          role: "Yoon Na Mu",
          img: "https://wiki.d-addicts.com/images/5/50/Hong_Seung_Hee.jpg",
        },
        {
          name: "Ji Jin Hee",
          role: "Han Jung Woo",
          img: "https://www.seoul2me.com/wp-content/uploads/2021/05/30000639832_1280.jpg",
        },
        {
          name: "Choi Soo Young",
          role: " Son Woo Rim",
          img: " https://s.isanook.com/wo/0/ud/20/102981/102981-20180302101003-e6b1c59.jpg",
        },
      ],
    };
  },
  mounted() {},
};
</script>


