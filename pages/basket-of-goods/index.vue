<template>
  <div class="basket-of-goods">
    <ProductInBasket
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="basket-of-goods__product-in-basket"
    />

    <p class="basket-of-goods__total-cost-basket">
      Итого: {{ totalCostBasket }}
    </p>
  </div>
</template>

<script>
import ProductInBasket from "~/components/ProductInBasket.vue";
import AppTitleH3 from "~/components/AppTitleH3";

export default {
  name: "basket-of-goods",
  components: {
    AppTitleH3,
    ProductInBasket,
  },
  computed: {
    products() {
      return this.$store.getters.basket;
    },
    totalCostBasket() {
      return this.$store.getters.totalCostBasket;
    },
  },
};
</script>

<style lang="scss">
.basket-of-goods {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__product-in-basket {
    margin: 10px;
  }

  &__total-cost-basket {
    font-weight: 900;
    font-size: 2rem;
    color: rgb(64, 64, 250);
  }
}
</style>