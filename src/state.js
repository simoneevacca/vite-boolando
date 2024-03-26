import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive ({
    products: [],

GetProduct(url) {

    axios.get(url)
    .then(response => {
      this.products = response.data
    })   
}
})


