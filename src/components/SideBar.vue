<template>
  <nav id="sidebarMenu" class="d-lg-block sidebar collapse bg-dark">
    <div class="the-time d-flex justify-content-center align-items-center">
      <div class="unit">
        <span class="hours" v-if="hours > 10">{{ hours }}</span>
        <span class="hours" v-if="hours < 10">0{{ hours }}</span>
        <span>H</span>
      </div>
      <div class="unit">
        <span class="minutes" v-if="minutes > 10">{{ minutes }}</span>
        <span class="minutes" v-if="minutes < 10 || minutes == 0"
          >0{{ minutes }}</span
        >
        <span>M</span>
      </div>
      <div class="unit">
        <span class="seconds" v-if="seconds > 10">{{ seconds }}</span>
        <span class="minutes" v-if="seconds < 10">0{{ seconds }}</span>
        <span>S</span>
      </div>
    </div>
    <div class="position-sticky">
      <div class="list-group mx-3 mt-4">
        <router-link to="/fajr">
          <a
            class="list-group-item list-group-item-action py-3"
            aria-current="true"
          >
            <span>الفجر</span>
          </a>
        </router-link>
        <router-link to="/sunrise">
          <a
            class="list-group-item list-group-item-action py-3"
            aria-current="true"
          >
            <span>الشروق</span>
          </a>
        </router-link>
        <router-link to="/dhuhr">
          <a
            class="list-group-item list-group-item-action py-3"
            aria-current="true"
          >
            <span>الظهر</span>
          </a>
        </router-link>
        <router-link to="/asr">
          <a
            class="list-group-item list-group-item-action py-3"
            aria-current="true"
          >
            <span>العصر</span>
          </a>
        </router-link>
        <router-link to="/maghrib">
          <a
            class="list-group-item list-group-item-action py-3"
            aria-current="true"
          >
            <span>المغرب</span>
          </a>
        </router-link>
        <router-link to="/isha">
          <a
            class="list-group-item list-group-item-action py-3"
            aria-current="true"
          >
            <span>العشاء</span>
          </a>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import "../sass/sidebar.scss";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
      this.seconds = new Date().getSeconds();
      if (this.hours == 0o0) {
        this.hours = 12;
      } else if (this.hours > 12) {
        this.hours -= 12;
      }
    }, 1000);
  },
});
</script>
