
import { toRaw } from "vue";
import { useStore } from "../store/store";

export const addToCart = (product)=>{
   const store = useStore()
   const item = store.cart.find((el) => el.id == product.id)
   if(!item){
      store.cart.push(product)
   }else{
      const index = store.cart.indexOf(item)
      store.cart.splice(index, 1)
      console.log(toRaw(store.cart));
   }
   localStorage.setItem("cart", JSON.stringify(store.cart))
} 