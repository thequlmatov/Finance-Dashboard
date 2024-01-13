<template>
  <section>
    <div class="container">
      <div class="total">
        <div class="total_text">
          <h2>Total Ballance</h2>
          <p> {{ num }}</p>
          <button :class="[ 'btn', `btn_${balance}`]" v-on:click="openModal(balance)"
          v-for="balance in balanceType"
          :key="balance" >
          {{ balance === "plus" ? "Добавить доход" : "добавить расход"  }}</button>
          <!-- <button class=" btn btn_income">Добавить доход</button> -->
        </div>
        <span class="balanc">
          <p class="balanc_text">Баланс на начало периода</p>
          <p class="balanc_num">$ 200.<span>58</span> </p>
        </span>
      </div>
      <toast-notification v-if="showToast" :status="status"> </toast-notification>
      <balance-modal v-if="showModal" v-on:close-modal-emit="showModal = false" :balance-type="activeBalanceType">
        <!-- <template #header >
          <button>Y</button>
        </template> -->



        <template #main>
          <form class="form">
            <div class="forms">

              <div class="price">
                <label class="price-label form-label" for=""> Цена</label> <br> <br>
                <input class="price-input form-input" type="text" v-model="balanceQuantity" @input="showInputText"
                  placeholder="Напишите цену..."> <br> <br> <br>
              </div>

              <div class="comment">
                <label class="comment-label form-label" for=""> Коммент</label> <br> <br>
                <input v-model="inputComnt" class="comment-input form-input" type="text"
                  placeholder="Напишите тип дохода">
              </div>

            </div>
            <button ref="componentRef" type="button" @click="addBalance(),toastMsg()" class="add-income_btn">Добавить доход</button>
          </form>
        </template>
      </balance-modal>
    </div>

  </section>
</template>

<script>

import BalanceModal from './BalanceModal.vue'
import ToastNotification from './ToastNotification.vue';
export default {
  components: {
    BalanceModal,
    ToastNotification
  },
  data() {
    return {
      showModal: false,
      inputStr: "",
      inputComnt: "",
      componentRef: null,
      status: "",
      showToast: false,
      balanceQuantity: null,
      balanceComment: "",
      num : this.$store.state.num,
      balanceType: ["plus","minus"],
      activeBalanceType:""
    };
  },
  methods: {
    openModal(type) {
      this.showModal = true;
      this.activeBalanceType = type
    },
    showInputText() {
      // console.log(this.inputStr);
    },
    double() {
      this.$store.commit("plusNum",5);
    },
    addBalance() {
      const balanceDate = {
        balanceQuantity: this.balanceQuantity,
        balanceComment: this.inputComnt,
        balanceType: this.activeBalanceType,
        for_date: "10.01.2024",
      };
      this.$store.commit("addBalance", balanceDate);
      // console.log(this.getChangedBalance);
    },
    toastMsg() {
      if (this.balanceQuantity !== "" && this.inputComnt !== "") {
        this.balanceQuantity = "";
        this.inputComnt = "";
        this.status = "success"
        this.showToast = true
        this.showModal = false
        setTimeout(() => {
          this.showToast = false;
        }, 4900);
      } else {
        this.status = "error"
        this.showToast = true
        this.balanceQuantity = "";
        this.inputComnt = "";
        setTimeout(() => {
          this.showToast = false;
        }, 4900);
      }
    },
  },
  watch: {
    inputComnt(val) {
    }
  },
  computed: {
    getChangedBalance() {
      return this.$store.state.balance;
    },
  },
}
</script>

<style lang="scss">
.form {

  &-label {
    color: #000;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
  }

  &-input {
    padding: 14.171px 24.8px;
    border-radius: 10px;
    border: 2px solid #4C49ED;
    background: var(--Main-White, #FFF);
  }

  .forms {
    width: 100%;
    margin-bottom: 40px;
    margin-top: 80px;

    .price {

      &-input {
        width: 246.771px;
        height: 48.171px;
      }

    }

    .comment {
      &-input {
        width: 737px;
        height: 130px;

      }
    }

  }

  .add-income_btn {
    padding: 14.171px 24.8px;
    border-radius: 46.057px;
    background: var(--Main-Primary, #4C49ED);
    color: var(--Main-White, #FFF);
    text-align: center;
    font-family: "Mulish";
    font-size: 13px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.52px;
    text-transform: uppercase;
    margin-left: 35%;
  }
}
</style>