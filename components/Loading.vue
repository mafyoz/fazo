<script setup>
import { useStore } from '~~/store/store';
const store = useStore();
</script>

<template>
    <div class="loading" v-if="store.loading">
        
         <div class="loader"></div> 

    </div>
</template>


<style lang="scss">
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #4675ff;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
}
</style>