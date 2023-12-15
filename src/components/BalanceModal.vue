<template>
  <div :class="['modal-wrapper', `modal-wrapper-${modalStatus}`]">
    <div v-bind:class="['modal', `modal-${modalStatus}`]">
      <header class="modal-header">
        <slot name="header">
          <img v-on:click="closeModal" src="../img/568140 1.png" alt="close button">

        </slot>
      </header>
      <main>
        <slot name="main">

        </slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["closeModalEmit"],
  methods: {
    closeModal() {
      this.$emit("closeModalEmit")
      this.modalStatus = 'close'
    }
  },
  data() {
    return {
      modalStatus: "open",
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  background-color: #FFF;
  padding: 40px;
  border-radius: 20px;
  width: 831px;
  height: 559px;
  margin: 60px auto;

  &-header {
    img {
      position: absolute;
      right: 30px;
      top: 30px;
      cursor: pointer;
    }
  }

  &-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.15);

    &-close {
      animation: closeWrapper 0.5s forwards;
      animation-delay: 0.8s;
    }
  }

  &-open {
    animation: openModal .5s forwards;
  }

  &-close {
    animation: closeModal .5s forwards;
  }

}

@keyframes openModal {
  from {
    transform: rotateX(90deg);
  }

  to {
    transform: rotateX(0);
  }

}

@keyframes closeModal {
  from {
    transform: rotateX(0);
  }

  to {
    transform: rotateX(90deg);
  }
}

@keyframes closeWrapper {
  from {
    display: block;
  }

  to {
    display: none;
  }
}
</style>