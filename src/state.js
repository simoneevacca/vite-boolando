import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive ({
    products: [],

GetProduct(url) {

    axios.get(url)
    .then(response => {
      console.log(response)
      this.products = response.data
    }),
    console.log(this.products);
}
})


