<template>
  <div class="container">
    <!-- <pre>{{ pageCategory2 }}</pre> -->
    <div class="detail flex gap-10 items-center">
      <ul class="detail__nav">
        <li v-for="item in pageCategory2?.data" :key="item">
          <NuxtLink class="li" :to="`/${item?.id}`">{{ item?.name }}</NuxtLink>
        </li>
      </ul>
      <button class="help-menu-btn" @click="navmenu = true">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
          data-v-inspector="components/Header.vue:57:21" data-v-a81738bd="">
          <path d="M6.66675 9.33333H25.3334" stroke="white" stroke-width="2" stroke-linecap="round"
            data-v-inspector="components/Header.vue:58:25" data-v-a81738bd=""></path>
          <path d="M6.66675 16H25.3334" stroke="white" stroke-width="2" stroke-linecap="round"
            data-v-inspector="components/Header.vue:59:25" data-v-a81738bd=""></path>
          <path d="M6.66675 22.6667H25.3334" stroke="white" stroke-width="2" stroke-linecap="round"
            data-v-inspector="components/Header.vue:60:25" data-v-a81738bd=""></path>
        </svg>
        <span>Ma'lumotlar</span>
      </button>
      <div class="navmenu" v-if="navmenu">
        <div class="navmenu__title">
          <h2>Ma'lumot</h2>
          <button @click="navmenu = false"><svg fill="none" height="24" viewBox="0 0 24 24" width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="currentColor"></path>
            </svg></button>
        </div>
        <ul >
        <li v-for="item in pageCategory2?.data" :key="item">
          <NuxtLink class="li" :to="`/${item?.id}`">{{ item?.name }}</NuxtLink>
        </li>
      </ul>
      </div>
      <div class="detail-info">
        <div class="card1" v-for="item in deliveryDetail?.data" :key="item">
          <h1>{{ item?.title }}</h1>
          <p>{{ item?.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~~/store/store";
import services from "~/services/services";
const { locale, locales, t } = useI18n()
const store = useStore();


const { id } = useRoute().params;
const pageCategory2 = ref({});
const deliveryDetail = ref({});
const navmenu = ref(false)

async function getDetail(l) {
  const res = await services.pageCategoryDet(id,locale.value);
  deliveryDetail.value = res;
}

async function pageCategory1(l) {
  const res = await services.getPageCategory(locale.value);
  pageCategory2.value = res;
}

getDetail();
pageCategory1();


  watch(()=> locale.value, ()=> {
    getDetail();
    pageCategory1();
})

</script>

<style lang="scss" scoped>
.detail {
  padding-top: 30px;

  .detail__nav {
    li {
      width: 300px;
      border-radius: 5px;
      padding: 20px;
      //   border: 1px solid black;
      background-color: #fff;
    }

    li:hover {
      background-color: #f2f2f2;
    }
  }

  .help-menu-btn {
    display: none;
  }

  &-info {
    width: 100%;
    max-width: 500px;

    .card1 {
      margin-bottom: 30px;
    }

    h1 {
      font-weight: 400;
      font-size: 22px;
      line-height: 1.2;
      margin-bottom: 17px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 1.2;
      color: #909090;
    }
  }
}

@media (max-width: 750px) {
  .detail {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    .detail__nav {
      display: none;
    }

    .help-menu-btn {
      display: block;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px;
      cursor: pointer;
      border-radius: 5px;
      background-color: #4675ff;

      span {
        color: #fff;
      }
    }

    .navmenu{
      overflow-y: auto;
      position: fixed;
      height: 100%;
      width: 70%;
      top: 0;
      left: 0;
      background-color: #fff;
      border-right: 1px solid #f2f2f2;
      border-radius: 0px 5px 5px 0px;
      z-index: 20;
      // padding: 20px 20px;
      
      &__title{
      padding: 20px 20px;
        display: flex;
        justify-content: space-between;
      }
      ul {
        margin-top: 10px;
    li {
      width: 100%;
      border-radius: 5px;
      padding: 20px 20px;
      
      //   border: 1px solid black;
      background-color: #fff;
    }

    li:hover {
      background-color: #f2f2f2;
    }
  }

    }

    &-info {
      width: 100%;
      max-width: 500px;

      .card1 {
        margin-bottom: 30px;
      }

      h1 {
        font-weight: 400;
        font-size: 22px;
        line-height: 1.2;
        margin-bottom: 17px;
      }

      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 1.2;
        color: #909090;
      }
    }
  }
}

@media (max-width: 450px) {
  .detail {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    .detail__nav {
      display: none;
    }

    .help-menu-btn {
      display: block;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px;
      cursor: pointer;
      border-radius: 5px;
      background-color: #4675ff;

      span {
        color: #fff;
      }
    }

    .navmenu{
      overflow-y: auto;
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: #fff;
      border-right: 1px solid #f2f2f2;
      border-radius: 0px 5px 5px 0px;
      z-index: 20;
      // padding: 20px 20px;
      
      &__title{
      padding: 20px 20px;
        display: flex;
        justify-content: space-between;
      }
      ul {
        margin-top: 10px;
    li {
      width: 100%;
      border-radius: 5px;
      padding: 20px 20px;
      
      //   border: 1px solid black;
      background-color: #fff;
    }

    li:hover {
      background-color: #f2f2f2;
    }
  }

    }

    &-info {
      width: 100%;
      max-width: 500px;

      .card1 {
        margin-bottom: 30px;
      }

      h1 {
        font-weight: 400;
        font-size: 22px;
        line-height: 1.2;
        margin-bottom: 17px;
      }

      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 1.2;
        color: #909090;
      }
    }
  }
}
</style>