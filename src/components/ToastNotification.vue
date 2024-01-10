<template>
  <div v-bind:class="['parent-box', `${status}-msg`,'openModal']">
    <div class="box">
      <font-awesome-icon icon="fa-solid fa-circle-check" />
      {{ status }}
      <font-awesome-icon :icon="['fas', 'check']" />
    </div>
    <div v-bind:class="['line', `line-${status}`]"></div>
  </div>
</template>

<script>


export default {
  methods: {
    show() {
      this.showToast = true;
    }

  },
  props: ["status"],
  data() {
    return {
      showToast: false
    }
  },

}
</script>

<style lang="scss">
.box {
  padding: 20px 50px;
  border-radius: 6px 6px 6px 0px;
}

.parent-box {
  position: absolute;
  background: #fff;
  border-radius: 6px;
  top: 25px;
  z-index: 9999;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  right: -150px;

}

.openModal {
  animation: openModal 0.1s forwards ease-in;
}


.line {
  position: relative;
  height: 3px;
  animation: lineH 5s infinite linear;
}

.line-success {
  background-color: #40f467;
}

.line-error {
  background-color: #ea1f1f;
}

@keyframes lineH {
  0% {
    width: 95%;
  }

  100% {
    width: 0%;
  }
}

@keyframes openModal {
  from {
    right: -150px;
  }

  to {
    right: 30px;
  }
}


.success-msg {
  border-left: 8px solid #40f467;
}

.error-msg {
  border-left: 8px solid #ea1f1f;
}
</style>