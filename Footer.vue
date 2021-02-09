<template>

    <header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted loop="loop">
    <source src="@/components/common/bannerVideo/video.mp4" type="video/mp4">
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3 sc">Benimle tanışmak ister misin tatlı şey?</h1>
      </div>
    </div>
  </div>
</header>

</template>
<style scoped>

header {
  position: relative;
  background-color: black;
  height: 50vh;
  min-height: 5rem;
  width: 100%;
  overflow: hidden;
  background-position:center ;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

@media (pointer: coarse) and (hover: none) {
  header {
    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
  }
  header video {
    display: none;
  }
}
.sc {
  transition: all 1s;
}
.sc:hover {
  transform: scale(1.04);
  cursor: pointer;
}

/* .bg {
  background-image: url("");
  height: 500px;
  position: relative;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  object-fit: cover;
  background-attachment: fixed;
}
.bg h1 {
  z-index: 1;
  font-size: 60px;
}

.overlay {
  width: 100% !important;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0px;
  left: 0px;
} */
</style>
