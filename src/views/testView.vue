<template>
  <div class="test">
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="imgs/logo.png" alt="" />
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
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="main">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link p-2 p-lg-3 active" aria-current="page" href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link p-2 p-lg-3" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-2 p-lg-3" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-2 p-lg-3" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-2 p-lg-3" href="#">Contact</a>
            </li>
          </ul>
          <div class="search ps-3 pe-3 d-none d-lg-block">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <a class="btn rounded-pill main-btn" href="#">Login</a>
        </div>
      </div>
    </nav>
    <div class="landing d-flex justify-content-center align-items-center">
      <div class="text-center text-light">
        <h1>Taste the Creativity</h1>
        <p class="fs-6 text-white-50 mb-5">
          We make awesome graphic and web design
        </p>
        <a class="btn rounded-pill main-btn" href="#">Get Started</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  data() {
    return {};
  },
});
</script>
