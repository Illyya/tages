<template>
  <div class="shelving-systems-kits">
    <div class="shelving-systems-kits__bread-crumbs bread-crumbs">
      <NuxtLink to="/">Главная /</NuxtLink>
      <NuxtLink to="/storage-systems">Системы хранения /</NuxtLink>
      <span class="bread-crumbs__current-page"
        >Комплекты стеллажных систем</span
      >
    </div>

    <h2 class="shelving-systems-kits__title-2 title-2">
      Комплекты стеллажных систем
    </h2>

    <div class="shelving-systems-kits__dropdown-list dropdown-list">
      <div class="dropdown-list__sort-by-price">
        <label for="sort-by-price" class="dropdown-list__label"
          >Сортировать по:</label
        >
        <select
          v-model="valueSortByPrice"
          @change="sortByPrice"
          name="sort-by-price"
          id="sort-by-price"
          class="dropdown-list__select"
        >
          <option value="ascending-price" class="dropdown-list__option">
            Цена по возрастанию
          </option>
          <option value="descending-price" class="dropdown-list__option">
            Цена по убыванию
          </option>
        </select>
      </div>
      <div class="dropdown-list__material">
        <label for="material" class="dropdown-list__label">Материал</label>
        <select
          v-model="valueSelectMaterial"
          name="material"
          id="material"
          class="dropdown-list__select"
        >
          <option value="2" class="dropdown-list__option">Металл</option>
          <option value="1" class="dropdown-list__option">Дерево</option>
          <option value="3" class="dropdown-list__option">Все материалы</option>
        </select>
      </div>
    </div>

    <div class="shelving-systems-kits__product-list product-list">
      <ProductCart
        v-for="cart in items"
        :key="cart.id"
        :name="cart.name"
        :oldPrice="cart.price.old_price"
        :currentPrice="cart.price.current_price"
        :inTheBasket="cart.inTheBasket"
        :inTheFavorites="cart.inTheFavorites"
        :code="cart.code"
        :discount="cart.price.old_price"
        :srcImgWebp="cart.image.srcImgWebp"
        :srcImgPng="cart.image.srcImgPng"
        @addToBasket="addToBasket(cart.id)"
        @deleteFromBasket="deleteFromBasket(cart.id)"
        @toFromFavorites="toFromFavorites(cart.id)"
        class="product-list__card-product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductCart from "@/components/ProductCart.vue";

export default Vue.extend({
  components: {
    ProductCart,
  },
  data() {
    return {
      valueSelectMaterial: "3",
      valueSortByPrice: "ascending-price",
      productList: [
        {
          name: "Ручка дверная",
          model: "L422WH",
          oldPrice: "400",
          newPrice: "355",
          discount: true,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/door-handle.webp"),
          srcImgPng: require("@/assets/img/door-handle.png"),
        },
        {
          name: "Ручка дверная",
          model: "L422WH",
          oldPrice: "400",
          newPrice: "355",
          discount: true,
          inTheBasket: true,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/door-handle.webp"),
          srcImgPng: require("@/assets/img/door-handle.png"),
        },
        {
          name: "Ручка, нержавеющ сталь",
          model: "",
          oldPrice: "136",
          newPrice: "99",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/handle-stainless-steel.webp"),
          srcImgPng: require("@/assets/img/handle-stainless-steel.png"),
        },
        {
          name: "Стандартные петли",
          model: "",
          oldPrice: "",
          newPrice: "75",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/standard-hinges.webp"),
          srcImgPng: require("@/assets/img/standard-hinges.png"),
        },
        {
          name: "Петля со стопором",
          model: "",
          oldPrice: "270",
          newPrice: "200",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/stopper-hinge.webp"),
          srcImgPng: require("@/assets/img/stopper-hinge.png"),
        },
        {
          name: "Ручка дверная",
          model: "",
          oldPrice: "400",
          newPrice: "355",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/door-handle.webp"),
          srcImgPng: require("@/assets/img/door-handle.png"),
        },
        {
          name: "Стандартные петли",
          model: "",
          oldPrice: "",
          newPrice: "75",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/standard-hinges.webp"),
          srcImgPng: require("@/assets/img/standard-hinges.png"),
        },
        {
          name: "Ручка, нержавеющ сталь",
          model: "",
          oldPrice: "136",
          newPrice: "99",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/handle-stainless-steel.webp"),
          srcImgPng: require("@/assets/img/handle-stainless-steel.png"),
        },
        {
          name: "Ручка, нержавеющ сталь",
          model: "",
          oldPrice: "136",
          newPrice: "99",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/handle-stainless-steel.webp"),
          srcImgPng: require("@/assets/img/handle-stainless-steel.png"),
        },
        {
          name: "Петля со стопором",
          model: "",
          oldPrice: "270",
          newPrice: "200",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/stopper-hinge.webp"),
          srcImgPng: require("@/assets/img/stopper-hinge.png"),
        },
        {
          name: "Стандартные петли",
          model: "",
          oldPrice: "",
          newPrice: "75",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/standard-hinges.webp"),
          srcImgPng: require("@/assets/img/standard-hinges.png"),
        },
        {
          name: "Ручка дверная",
          model: "",
          oldPrice: "400",
          newPrice: "355",
          discount: false,
          inTheBasket: false,
          inTheFavorites: false,
          srcImgWebp: require("@/assets/img/door-handle.webp"),
          srcImgPng: require("@/assets/img/door-handle.png"),
        },
      ],
    };
  },
  methods: {
    sortByPrice() {
      this.$store.commit("sortByPrice", this.valueSortByPrice);
    },
    addToBasket(id: string) {
      this.$store.commit("addToBasket", id);
    },
    deleteFromBasket(id: string) {
      this.$store.commit("deleteFromBasket", id);
    },
    toFromFavorites(id: string) {
      this.$store.commit("toFromFavorites", id);
    },
  },
  computed: {
    items(): [] {
      if (this.valueSelectMaterial == "3") return this.$store.getters.items;

      return this.$store.getters.filterByMaterial(this.valueSelectMaterial);
    },
  },
});
</script>

<style lang='scss'>
.shelving-systems-kits {
  &__bread-crumbs {
  }

  &__title-2 {
    margin-bottom: 32px;
  }

  &__dropdown-list {
    margin-bottom: 41px;
  }

  &__product-list {
  }
}

.dropdown-list {
  display: flex;
  flex-wrap: wrap;

  &__sort-by-price,
  &__material {
    display: flex;
    flex-direction: column;
  }

  &__sort-by-price {
    margin-right: 24px;

    @media (max-width: 640px) {
      margin: 0 24px 20px 0;
    }
  }

  &__label {
    margin-left: 20px;
    font-size: 0.75rem;
    color: #4f4f4f;
    margin-bottom: 6px;
  }

  &__select {
    padding: 10px 16px;
    width: 288px;
    font-size: 0.875rem;
    background-color: #f2f2f2;
    cursor: pointer;
  }

  &__option {
  }

  &__material {
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  &__card-product {
  }
}
</style>
