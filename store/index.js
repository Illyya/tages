import Vue from 'vue'

export const state = () => ({
  items: [
    {
      "id": "1",
      "name": "Ручка дверная",
      "code": "L422WH",
      "price": {
        "old_price": 400,
        "current_price": 355
      },
      "image": {
        srcImgWebp: require('@/assets/img/door-handle.webp'),
        srcImgPng: require('@/assets/img/door-handle.png'),
      },
      "material": 1
    },
    {
      "id": "2",
      "name": "Ручка, нержавеющ сталь",
      "code": "L423WH",
      "price": {
        "old_price": 400.900,
        "current_price": 355.555
      },
      "image": {
        srcImgWebp: require('@/assets/img/handle-stainless-steel.webp'),
        srcImgPng: require('@/assets/img/handle-stainless-steel.png'),
      },
      "material": 2
    },
    {
      "id": "3",
      "name": "Стандартные петли",
      "code": "P424WN",
      "price": {
        "old_price": null,
        "current_price": 75
      },
      "image": {
        srcImgWebp: require('@/assets/img/standard-hinges.webp'),
        srcImgPng: require('@/assets/img/standard-hinges.png'),
      },
      "material": 2
    },
    {
      "id": "4",
      "name": "Петля со спором",
      "code": "PW5AC",
      "price": {
        "old_price": 270,
        "current_price": 200
      },
      "image": {
        srcImgWebp: require('@/assets/img/stopper-hinge.webp'),
        srcImgPng: require('@/assets/img/stopper-hinge.png'),
      },
      "material": 2
    },
    {
      "id": "5",
      "name": "Ручка дверная",
      "code": "LM352",
      "price": {
        "old_price": null,
        "current_price": 720
      },
      "image": {
        srcImgWebp: require('@/assets/img/door-handle.webp'),
        srcImgPng: require('@/assets/img/door-handle.png'),
      },
      "material": 1
    },
    {
      "id": "6",
      "name": "Ручка, нержавеющ сталь",
      "code": null,
      "price": {
        "old_price": null,
        "current_price": 355.555
      },
      "image": {
        srcImgWebp: require('@/assets/img/handle-stainless-steel.webp'),
        srcImgPng: require('@/assets/img/handle-stainless-steel.png'),
      },
      "material": 2
    },
    {
      "id": "7",
      "name": "Стандартные петли",
      "code": "WD14LK",
      "price": {
        "old_price": null,
        "current_price": 75
      },
      "image": {
        srcImgWebp: require('@/assets/img/standard-hinges.webp'),
        srcImgPng: require('@/assets/img/standard-hinges.png'),
      },
      "material": 2
    },
    {
      "id": "8",
      "name": "Петля со стопором",
      "code": null,
      "price": {
        "old_price": 1200,
        "current_price": 900
      },
      "image": {
        srcImgWebp: require('@/assets/img/stopper-hinge.webp'),
        srcImgPng: require('@/assets/img/stopper-hinge.png'),
      },
      "material": 2
    }
  ],
  basket: [],
  favorites: [],
})

export const getters = {
  items: state => {
    return state.items;
  },
  filterByMaterial: state => id => {
    return state.items.filter(item => item.material == id);
  },
}

export const mutations = {
  sortByPrice: (state, sortBy) => {
    if (sortBy == 'ascending-price') {

      return state.items.sort((a, b) => {

        return a.price.current_price - b.price.current_price;
      })
    }
    if (sortBy == 'descending-price') {

      return state.items.sort((a, b) => {

        return b.price.current_price - a.price.current_price;
      })
    }
  },
  toBasket: (state, id) => {
    state.items.find(item => {
      if (item.id == id) {
        Vue.set(item, "inTheBasket", true);
        state.basket.push(item);
        localStorage.setItem('basket', JSON.stringify(state.basket));
      }
    });
    localStorage.setItem('items', JSON.stringify(state.items));
  },
  fromTheBasket: (state, id) => {
    state.items.find(item => {
      if (item.id == id && item.inTheBasket == true) {
        Vue.set(item, "inTheBasket", false);
        state.basket.splice(state.basket.indexOf(item), 1);
        localStorage.setItem('basket', JSON.stringify(state.basket));
      }
    })
    localStorage.setItem('items', JSON.stringify(state.items));
  },
  toFromFavorites: (state, id) => {
    state.items.find(item => {
      if (item.id == id) {
        if (item.inTheFavorites == true) {
          Vue.set(item, "inTheFavorites", false);
          state.favorites.splice(state.favorites.indexOf(item), 1);
          localStorage.setItem('favorites', JSON.stringify(state.favorites));
          return
        }
        Vue.set(item, "inTheFavorites", true);
        state.favorites.push(item);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    });
    localStorage.setItem('items', JSON.stringify(state.items));
  },
  dataFromLocalStorage: state => {
    state.items = JSON.parse(localStorage.getItem('items'));
    state.basket = JSON.parse(localStorage.getItem('basket')) || [];
    state.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  }
}

