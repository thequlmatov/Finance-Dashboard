<template>
  <!-- <li>
    <p>{{ name }}</p>
    <p>{{ quantity }}</p>
  </li> -->
     <li class="transaction_history__list__item">
            <h3>{{ name }}</h3>
            <p :class="[`${type}_green`,`${type}_red`]">{{ quantity }} </p>
          </li>
          <!-- <li class="transaction_history__list__item">
            <h3>Зарплата</h3>
            <p class="green">+$300.58</p>
          </li>
          <li class="transaction_history__list__item">
            <h3>Withdrawal</h3>
            <p>-$35.00</p>
          </li>  -->
</template>

<script>
export default {
  props: ["name", "quantity", "type"],
};

</script>

<style></style>
