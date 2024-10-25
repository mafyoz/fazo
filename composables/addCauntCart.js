
import { toRaw } from "vue";
import { useStore } from "../store/store";

export const addCauntCart = (product) => {
    const store = useStore()
    const index = store.cart.indexOf(product)

    if(store.cart[index].quantity < 5){
        store.cart[index].quantity ++; 
    }
    
    localStorage.setItem("cart", JSON.stringify(store.cart))
} 