<template>
  <div class="card prayer-home">
    <div class="card-body">
      <img src="../assets/image/fagr.jpg" alt="" />
      <div class="prayer-time d-flex justify-content-around align-items-center">
        <div class="location">
          <h1 id="header">القاهرة</h1>
          <p id="date">الاثنين 01 May 2023</p>
        </div>
        <div>
          <select class="form-select" name="" id="select-city">
            <option value="">القاهرة</option>
            <option value="">الاسكندرية</option>
            <option value="">الغربية</option>
            <option value="">الشرقية</option>
            <option value="">الاقصر</option>
            <option value="">اسوان</option>
          </select>
        </div>
        <div class="the-time d-flex justify-content-center align-items-center">
          <div class="unit">
            <span class="hours">5</span>
            <span>H</span>
          </div>
          :
          <div class="unit">
            <span class="minutes">40</span>
            <span>M</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import prayerInfo from "../json/prayer-information.json";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      prayerInfos: prayerInfo,
    };
  },
});
</script>
<style lang="scss" scoped>
.prayer-home {
  width: 900px;
  margin: 90px 370px;
  background-color: #212529;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .prayer-time {
    background-color: #9aca43;
    border: 1px solid #212529;
    border-radius: 20px;
    margin: 10px;
    .form-select {
      width: 250px;
      text-align: center;
    }
    .the-time {
      flex-direction: row-reverse;
      gap: 10px;
      color: #fff;
      .unit {
        border: 1px solid #212529;
        border-radius: 6px;
        text-align: center;
        width: 75px;
        span {
          display: block;
          &:first-child {
            font-size: 35px;
            font-weight: bold;
          }
          &:last-child {
            padding: 2px;
            font-size: 13px;
            border-top: 1px solid #212529;
          }
        }
      }
    }
  }
}
.card {
  .card-body {
    color: #fff;
    .name-header {
      justify-content: space-between;
      margin: 10px 30px 0;
      h2 {
        color: #fff;
        padding: 10px;
        border: 1px solid #313136;
        border-radius: 10px;
      }
      .time {
        flex-direction: row-reverse;
        gap: 10px;
        color: #fff;
        .unit {
          border: 1px solid #d4d4d4;
          border-radius: 6px;
          text-align: center;
          width: 75px;
          span {
            display: block;
            &:first-child {
              font-size: 35px;
              padding: 15px;
              font-weight: bold;
            }
            &:last-child {
              padding: 8px 10px;
              font-size: 13px;
              border-top: 1px solid #d4d4d4;
            }
          }
        }
      }
    }
    .details .content {
      div {
        font-size: 25px;
        line-height: 40px;
        padding: 20px;
        color: #fff;
      }
      div:not(:first-child) {
        display: none;
      }
    }
  }
}
</style>
