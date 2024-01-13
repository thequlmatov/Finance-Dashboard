<template>
  <div class="container">
    <section class="transaction_history">
      <h2>История транзакций</h2>
      <ul class="transaction_history__list">
        <transaction-com
          v-for="balance in getChangedBalance"
          :key="balance.quantity"
          :name="balance.comment"
          :quantity="balance.quantity"
          :type="balance.type"
        />
        <!-- <li class="transaction_history__list__item">
            <h3>Купил кроссовки</h3>
            <p>-$35.00</p>
          </li>
          <li class="transaction_history__list__item">
            <h3>Зарплата</h3>
            <p class="green">+$300.58</p>
          </li>
          <li class="transaction_history__list__item">
            <h3>Withdrawal</h3>
            <p>-$35.00</p>
          </li> -->
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
