<template>
  <div class="container">
    <section class="transaction_history">
      <div class="transaction_history__line">
        <h2>История транзакций</h2>
        <a href="#"><p>Все истории <img src="../img/history_icon.png" alt=""></p></a>
      </div>
      <ul class="transaction_history__list">
        <transaction-com
          v-for="balance in getChangedBalance"
          :key="balance.quantity"
          :name="balance.comment"
          :quantity="balance.quantity"
          :type="balance.type"
        />

      </ul>

    </section>
  </div>
</template>

<script>
import TransactionCom from "./TransactionCom.vue";

export default {
  components: {
    TransactionCom,
  },
  computed: {
    getChangedBalance() {
      return this.$store.state.balance;
    },
  },
};
</script>

<style></style>
