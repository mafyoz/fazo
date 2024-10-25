import { useStore } from "~~/store/store"

export const addToLike = (product) => {
   const store = useStore()
   const item = store.like.find((el) => el.id == product.id)
   if (!item) {
      store.like.push(product)
   } else {
      const index = store.like.indexOf(item);
      store.like.splice(index, 1)
   };
   localStorage.setItem("like", JSON.stringify(store.like))
}