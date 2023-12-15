<template>
  <main>
    <div class="container">
      <section class="transaction_history">
        <h2>История транзакций</h2>
        <ul class="transaction_history__list">
          <li class="transaction_history__list__item">
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
          </li>
        </ul>
      </section>

    </div>
  </main>
</template>

<script>
import BalanceModal from './BalanceModal.vue'
export default {
  components: { BalanceModal },

}
</script>

<style>

</style>