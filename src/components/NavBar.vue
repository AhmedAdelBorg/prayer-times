<template>
  <nav class="navbar navbar-expand-lg bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logo.png"
          alt=""
          width="70"
          height="30"
          class="d-inline-block align-text-top"
        />
        الصلاة المفروضة
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main"
        aria-controls="main"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main">
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
      </div>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logo.png"
          alt=""
          width="70"
          height="30"
          class="d-inline-block align-text-top"
        />
        الصلاة المفروضة
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav> -->
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #9ccb44;
}
@media (min-width: 991.98px) {
  .position-sticky {
    display: none;
  }
}
</style>
