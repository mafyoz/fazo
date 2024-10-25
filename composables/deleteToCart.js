
import { toRaw } from "vue";
import { useStore } from "../store/store";

export const deleteToCart = (product) => {
    const store = useStore()

    const index = store.cart.indexOf(product)
    store.cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(store.cart))
} 