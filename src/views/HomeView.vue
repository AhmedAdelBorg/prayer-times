<template>
  <div></div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  data() {
    return {};
  },
  async mounted() {
    let time = new Date().toLocaleTimeString("it-IT", {
      hour: "numeric",
      minute: "numeric",
    });

    const result = await axios.get(
      `http://api.aladhan.com/v1/timingsByCity?city=egcairo&country=cairo`
    );

    console.log(time);
    console.log(result.data.data.timings);

    if (result.data.data.timings.Fajr > time) {
      this.$router.push({ name: "fajr" });
    } else if (result.data.data.timings.Sunrise > time) {
      this.$router.push({ name: "sunrise" });
    } else if (result.data.data.timings.Dhuhr > time) {
      this.$router.push({ name: "dhuhr" });
    } else if (result.data.data.timings.Asr > time) {
      this.$router.push({ name: "asr" });
    } else if (result.data.data.timings.Maghrib > time) {
      this.$router.push({ name: "maghrib" });
    } else if (result.data.data.timings.Isha > time) {
      this.$router.push({ name: "isha" });
    }
  },
});
</script>
