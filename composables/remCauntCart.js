
import { toRaw } from "vue";
import { useStore } from "../store/store";

export const remCauntCart = (product) => {
    const store = useStore()
    const index = store.cart.indexOf(product)

    if(store.cart[index].quantity > 1){
        store.cart[index].quantity --; 
    }
    
    localStorage.setItem("cart", JSON.stringify(store.cart))
} 