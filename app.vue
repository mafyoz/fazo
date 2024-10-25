<template>
  <div>
    <!-- <h2>{{ store.token }}</h2> -->
    <Loading/>
       <Header/>
       <NuxtLayout />
       <login />
       <EnterPhone />
       <VerifyCode />
       <SignUp />
    <Footer/>
    <CartMenu />
     <likeMenu />
    <!-- <div class="">
      <h2>{{ store.userInfo?.firstname }} {{ store.userInfo?.lastname }}</h2>
      <h4>{{ store.userInfo?.username }}</h4>
    </div> -->
  </div>
</template>

<script setup>
import { useStore } from "~/store/store"
const store = useStore()


onMounted(() => {
  if (process.client) {
    store.token = localStorage.getItem("authKey") ? localStorage.getItem("authKey") : null
  }
})

watch(() => store.token, () => {
  
})

</script>

<style lang="scss" scoped></style>