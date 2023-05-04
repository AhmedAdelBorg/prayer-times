<template>
  <div class="card prayer-home">
    <div class="card-body">
      <img src="../assets/image/isha.jpg" alt="" />
      <div class="prayer-time d-flex justify-content-around align-items-center">
        <div class="location">
          <h1 id="header">{{ header }}</h1>
          <p id="date">{{ date }}</p>
        </div>
        <div>
          <select
            class="form-select"
            name=""
            id="select-city"
            @change="changeCountry"
          >
            <option v-for="country in countries" :key="country">
              {{ country }}
            </option>
          </select>
        </div>
        <div class="the-time d-flex justify-content-center align-items-center">
          <div class="unit">
            <span class="time">{{ time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import "../sass/salat.scss";
import { defineComponent } from "vue";
export default defineComponent({
  name: "IshaPage",
  data() {
    return {
      time: 0,
      date: "",
      header: "القاهرة",
      countries: [
        "القاهرة",
        "الإسكندرية",
        "الجيزة",
        "بنها",
        "بور سعيد",
        "السويس",
        "الأقصر",
        "المنصورة",
        "المحلة الكبرى",
        "طنطا",
        "أسيوط",
        "الإسماعيلية",
        "الفيوم",
        "الزقازيق",
        "أسوان",
        "دمياط",
        "دمنهور",
        "المنيا",
        "كفر الشيخ",
        "دسوق",
      ],
    };
  },
  methods: {
    async changeCountry(event: any) {
      this.header = event.target.value;
      await this.getPreyerTime();
    },
    async getPreyerTime() {
      const result = await axios.get(
        `http://api.aladhan.com/v1/timingsByCity?city=egcairo&country=${this.header}`
      );
      if (result.status == 200) {
        this.time = result.data.data.timings.Isha;
        this.date = result.data.data.date.readable;
      }
    },
  },
  async mounted() {
    await this.getPreyerTime();
  },
});
</script>
