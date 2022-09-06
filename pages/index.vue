<template>
  <div class="container">
    <main>
      <h1 class="page-intro">
        Welcome to
        <span class="glowy"> Apricitine </span>
      </h1>
      <section class="quick-about">
        <p>
          Hey there! My name's Apricitine and I'm a self-taught
          web-developer/programmer. I love building websites, art, writing, and
          photography. Email me with questions!
        </p>
      </section>
      <section class="more-about">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem atque
          quod eius, soluta tenetur illo doloribus harum, itaque nesciunt hic,
          quidem animi quae excepturi? Hic voluptates doloremque ea repudiandae
          quaerat!
        </p>
        <div class="clear-wave-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section class="experience">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim
          facere fugit, veritatis sunt assumenda rerum sint quibusdam cum, nam
          voluptates asperiores id. Nam voluptatem repellendus, nostrum possimus
          ab magnam rem voluptate similique expedita suscipit totam officiis
          unde omnis sed!
        </p>
        <div class="aqua-wave-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
// import * as THREE from "three";

useHead({
  title: "Home",
});

// const threeScene = new THREE.Scene();
// const threeCamera = new THREE.PerspectiveCamera(
//   70,
//   checkBrowser(process.client).width ??
//     1080 / checkBrowser(process.client).height ??
//     720,
//   0.01,
//   10
// );
// threeCamera.position.z = 1;

// const threeGeometry = new THREE.BoxGeometry(0.2);

// function checkBrowser(arg) {
//   if (!arg) return;
//   if (arg) {
//     return {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   }
// }
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";

@include page-base();
@include intro-move();

main {
  color: $text-color1;
  font-family: "Nunito";
  line-height: 1.5rem;
  letter-spacing: 0.05rem;
  // font-weight: bold;
}

h1.page-intro {
  margin-left: 5%;
  font-size: 8rem;
  line-height: 1.5em;
  letter-spacing: 0.075em;
  transition: all 1s;
  user-select: none;
  margin-top: 8%;
  margin-bottom: 8%;
  animation: intro-move 5s infinite;
  transition: all 1s;

  &:hover {
    font-size: 8.5rem;
  }

  span.glowy {
    color: hsl(110, 60%, 60%);
    text-shadow: 0 0 15px hsl(110, 60%, 60%);
    transition: all 1s;

    &:hover {
      text-shadow: 10px 10px 30px hsl(110, 60%, 60%);
    }
  }
}

section.quick-about {
  @include index-section($accent-dark4);
  box-shadow: 0 -1px 10px $accent-dark4;
}

section.more-about {
  @include index-section($accent-color1);

  p {
    padding-top: 4%;
  }

  .clear-wave-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .clear-wave-top svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 72px;
  }

  .clear-wave-top .shape-fill {
    fill: $accent-dark4;
  }
}

section.experience {
  @include index-section($accent-color2);

  p {
    padding-top: 8%;
  }
  .aqua-wave-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .aqua-wave-top svg {
    position: relative;
    display: block;
    width: calc(226% + 1.3px);
    height: 155px;
  }

  .aqua-wave-top .shape-fill {
    fill: $accent-color1;
  }
}
</style>
