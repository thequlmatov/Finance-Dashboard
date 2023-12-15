<template>
  <header class="header">
    <nav class="site_nav">
      <h1>Finance tracking App</h1>
    </nav>
    <div class="container">
      <div class="total">
        <div class="total_text">
          <h2>Total Ballance</h2>
          <p>+ $28,55</p>
          <button class=" btn btn_outcome" v-on:click="openModal">добавить расход</button>
          <button class=" btn btn_income">Добавить доход</button>
        </div>
        <span class="balanc">
          <p class="balanc_text">Баланс на начало периода</p>
          <p class="balanc_num">$ 200.<span>58</span> </p>
        </span>
      </div>
      <balance-modal v-if="showModal" v-on:close-modal-emit="showModal = false">
        <!-- <template #header >
          <button>Y</button>
        </template> -->

        <template #main>
          <form class="form">
            <div class="forms">

              <div class="price">
                <label class="price-label form-label" for=""> Цена</label> <br> <br>
                <input class="price-input form-input" type="text" v-model="inputStr" @input="showInputText"
                  placeholder="Напишите цену..."> <br> <br> <br>
              </div>

              <div class="comment">
                <label class="comment-label form-label" for=""> Коммент</label> <br> <br>
                <input class="comment-input form-input" type="text" placeholder="Напишите тип дохода">
              </div>

            </div>
            <button class="add-income_btn">Добавить доход</button>
          </form>
        </template>
      </balance-modal>
    </div>
  </header>
</template>

<script>
import BalanceModal from './BalanceModal.vue'
export default {
  components: { BalanceModal },
  data() {
    return {
      showModal: false,
      inputStr: "",
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    showInputText() {
      console.log(this.inputStr);
    }
  },
};
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