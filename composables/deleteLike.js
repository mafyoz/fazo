import { useStore } from "~~/store/store"

export const deleteLike = (product) => {
    const store = useStore()
  
    const index = store.like.indexOf(product);
    store.like.splice(index, 1)
    localStorage.setItem("like" , JSON.stringify(store.like))
}