
<template>
  <div class="paymet">
    <div class="container">
      <div class="paymet-left">
        <h2 class="paymet-left__title">
          {{ t("purchase") }}
        </h2>

        <div class="paymet-left__sup-title">
          <span>1</span>
          <h2>Sizning Buyurtmangiz</h2>
        </div>
        <ul
          v-if="store.cart.length"
          role="list"
          class="-my-6 divide-y divide-gray-200"
        >
          <li class="flex py-6" v-for="item in store.cart" :key="item">
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
              <img
                :src="item?.thumbnail"
                :alt="item?.name"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div class="ml-4 flex flex justify-between w-[700px] flex-col">
              <div>
                <div
                  class="flex justify-between center text-base font-medium text-gray-900"
                >
                  <h3>
                    <nuxt-link :to="`/product/${item.id}`">
                      {{ item?.name }}
                    </nuxt-link>
                  </h3>
                  <p class="ml-4">
                    <span>{{ item?.quantity }}</span> ta
                    {{ (item?.price * item?.quantity)?.toFixed() }} so'm
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="paymet-left__sup-title">
          <span>2</span>
          <h2>To'lov Usulini Tanlang</h2>
        </div>

        <div class="paymet-left-wrapper__paymets">
          <div class="box">
            <input name="radio" type="radio" id="1" />
            <label class="" for="1">
              <span class="circle"></span>
              <span class="text"> Orqali To'lash Payme</span>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </label>
          </div>




          <div class="box">
            <input name="radio" type="radio" id="2" />
            <label class="" for="2">
              <span class="circle"></span>
              <span class="text"> Naqd Pul Orqali To'lash</span>

              <img src="https://mtdmarket.uz/_nuxt/money.67fec130.svg" alt="" />
            </label>
          </div>

          <div class="box">
            <input name="radio" type="radio" id="3" />
            <label class="" for="3">
              <span class="circle"></span>
              <span class="text"> Qabul Qilganda Naqt Pul Orqali To'lash</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT0SURBVHgB1VVpTFRXFD73zQwwMJsUZlhmYAAlwoyDKMpoEGqUza0qCIK0tYBaDNZWSKvGUqWaGiUttBpwqdaqtRpoUotL1ZqKInutyFICwgiyGZYBB5yB997tvJdAkILBpH/8kvfj3bN8537n3HsB3nRwJjM4KK2UHpq38mylfF/SYrDEqAcj/B8EEiVIfPwdsoeM+KQ23MnDWsTT9rdTKa5ekiCEULNBP6SD1wAa+zP3bWlqd6fpgCZQarFq03SwFvDY9UHDMJTfaoeCX1pIk5E2iCXirMZmXaZeB/opEfgE2K0AhL4TSCzkManeXFsZf0Ln2uLncOmbf2ChNhBu3LoK7m4z/mhsqEtt1Q38PSmBT5Ds9rCRClqf4kVM10yb0InZwW9HOsHwjIezDh9HKm8N9PXrIf7DaCgpLQKxnWUnRVL76ip6s8fHcuRuNvbkMJ7b0TRoyeHwCEc36/9UfWJXFawJ3wg5355BUnsZmzwpJRqaWh/hxHQNUnqJBQP9w8tpEu92U4l9AFFlBj3JysfBQLV5KNWBz3uGFM5Cf+LCkWIMJhsksKPgsrnqx6U0Pn3sInpnZSRLmP97LkTEhmB3P4TidqqQyNYSpAob8A2Sge9iGYemwLunw5Ts6C5Y7eBi3Ya8fBV6kVAk/j77J2C23vL0CVzKOw8nTh2FsNCVsG/PQRCLJKNV1zc9wtE7ZiJnD+FkskNP5wvI3FYOPCuijqh90CIhSTIrdFUARMaG08Wl9yBl+25QqzQQtXYDm7y6phL8Fk0HWtgCO47OmzQ506vLx+vhq/hi4FkSWbWl3TOJwOA5OSRFbvlk207Y8dFuorD4Lsxf5I1raqtGA6/fzAeRSGwe1Q42AVPheJTdaoOD8SXg5RgCCe8nAWnkJav9XB8Q5vH0NB8g9LS1BRRyF8g8lAN5F64hZyc5HpsgNjIBKu41sgmO76zBP+yvhIbKXvb7OrkMN1dYwu0rf8H2zXvNKRFwuTwD39omgw1Wae3Ou3lLSJVWSi+Lmo/zr+fiiJgwXFhUgBlkZB7A/oEqfCnvHNb39bJrP148ikMjZlM+C+X4TuENdu1i7lk8L8CLNkuItUGzrjHXDdddLekxM07betgXGG2ZirLOpkJNafdLEmj9A4CRLy39M4iOjIOEjUnwbtRWgrHdN68Hr1hAK+SuBLP7/v4+WLdheZi9nUMBMWgwzhFN4908mVZpYvS1lVnBB59rwH2W+CUCsVDMyldcUAVCoQgiYsJxQlIMbE/dQn3x5ad4355DxKmcn6Go5C6sWR9K2dtLjz0q17mMJmAuuSVR8oOes20NIXFKrF5gPypR+uGPsadGhpcs19KMTCNgJGE+BozvUrN99cZ5OHiDEpsPn8knUJqNJhq3RWsU6016IoMe4stiot7jtnc3QBcuA0+NA1TdMUHF3QbYHJ8M69bGstO1d/8uKH/4J162SYGUs/jsRF093WTiWqFDCF4Bpklqle85XfNjrZOHBWflphlsn5gxrb1Dw83carNcAhwc54I0iwVs/66faTQOGMiizid98R06o+6VBGPl81BKE/t6h9McXK3580OcuH5LHVkbc7gY/JpdP2Qm6LWwRIkP73Xlj8ROiWAsmKsdI5Q+ZKTU2jBn9sG4f6X1BY9PZFQXdqWN939tghEw8rl4SvYOG2lBU/OzxKk8Pm8m/gUuyzMXXGCYEwAAAABJRU5ErkJggg=="
                alt=""
              />
            </label>
          </div>

          <div class="box">
            <input name="radio" type="radio" id="4" />
            <label class="" for="4">
              <span class="circle"></span>
              <span class="text"> Qabul Qilganda Karta Orqali To'lash</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUeSURBVHgBvVVbbBRVGP7O7OzM7HavbbftthZqW5uWGvBBAiJolCikwYgxq6bS8GLiJT7omyY+EH2xSmJE44PGEuOLsTwYvEQhBRMDluClYCsttNAW2m27s/fZ3bmP/y6FGCgFXzzJnzmzZ8/3//93vvMNw50NFovFOIrKy+DgYOXZ3d3tlJ/79u1zlv/n3LQRtxm0mZscn37I6/O80tjY0MyBpUuanjV1PafqhpyUE/FMMhvXDGO+qKvpmqpIsTO6Nrn/y/2F8n7+NvhsYmxik9cXOnTf+u4aURRg2zY0XYNSKGJqchLDp07AcSqV2p6qgFUbrjaEiPA1dfsCdWqt1gHr7X2xnWPGj83NDa1VXomAHBiGgZmZaYz8OYLZmRlKaIExDqLHh+Y1bdi6aTO6OzsNgROie1/dm7xlB7FYH9FhHOJ5pzWdSmJxQUNBUTBJVU+ePw/TsuByueDiXOAFEXX1TXDxLmzb/giCHoktZZbYLSnq7X05XCik3ikUcusFgYdJVS/E40gkZNiWCV+oBm6eqibKlhYXURNppCRu7Ni5Ex1treBpzRvy2ism6OvrqzJN9SVFUfaEqsNUpZt+VdHY3Io1d3dAyecRCAcRDgYRbYzii4EB+IMBdHatw66enbCIMoF3s/Zou1DG43CDYgxD3OXY1hv19REuGAohR4CM2QgEqqDrOlFjwk3UpNNZnDn7NyKRBloL4LnYMxCJKl03kMspXDwn197UwdRUYmOplH876PcGeEFAPqvABRtNTWtgWA5Mm0fHPe1wiyLyBRXnx89B8njQ+/weNEXroROVDqlsenaeRaOUGRi7nqCnp6fB0Ar9got1eDwSsvkCNFWrcGqTSnSqnNk6QkRNJq8gPjeHXDqFzVu2YEN3F1RNg2Ga1sL8nP3HmXPFrlKzWlYif1UxMY9TdF5rSi492NK9DmfTaVKHhXXtd0EpqSgaQCIpI1oXwZIsI76QwOXZS2hrbcOzsadB51U4Nz4xS5JNnxo+KccT6dnvvv3qwjWKGM+8T4jJy6/HcgnebalI1AbQ9XgU0WgYP58cxWH4obeHcEErovG3eShLSfj9fjy1ezepideHho4eGzj4+bFMMnUpk8/MEuYiRZrC4Xc8sCNsGNZbdj4vXOTckOjwCpKNsK8BevEKVD2FmbVuqC1ecIYA/mgCEvH86PbtaG9t0cfGxr4/8NEHA7IsTy4Dly3CxFVfcnhZLzUtTU/da5FSZkUPyqK00iZGP/0LPOdALtqITJVgB8iFaNXHBNRGq/Hwtq3G3PyVI++/9+4BAp+gbRkKjcL+t3D4bDZrg3PMTCrhZhxH3HPgOIYyHGMU5fe4qzLn6NZa1bXY+Nj9jloqHv/m8OEPR8dHxwgnR6FjBTflfT42J4jVPyi51JO2ZRcJhLcdx00XhllEhWXZFb8xTYP4dsNybNzdsjY1dOynjw8e/Ow0YZQojJXAKxdtZGQka9nGcYu8paSqXLFYcLRSwdI01TZ0zTZNnWzH0KkBjSJfG2nQXAy/9Pf3/077i6uBX1dRTsmOSZJ3iqgJO7bjMU2TNy2DlZPalsXIRTmuQh/vXr9hg3zq9PDgDYeJ1RI4SkYekaSqN8kJGgiwhlyxRhCFOp5315Fj1jLO5RdFyRMIVju5tPzJ0JETvy5Tsyp4eVz7HpQ9ybMcEnmLx0dDFKv8PM/7HYd5JUkS/aEa6+KFs8OLi4sLKDvgf0hwbb5SlJO7ludlQP1OqPnfxj9Vc2wNWIaLTQAAAABJRU5ErkJggg=="
                alt=""
              />
            </label>
          </div>

          <div class="box">
            <input name="radio" type="radio" id="5" />
            <label class="" for="5">
              <span class="circle"></span>
              <span class="text"> Karta Orqali To'lash</span>

              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgBtZRLaBNRFIb/mU4TnRljUq31uRAEQV0UHzuhIpq2K12VShdJQF2pKAoWXIiKoGARpG77WIi6ULNQ0YpGaS2IUKFFxIVKDY2ktdN00mkek0k6c2nKpJN2bpL2X4R777n3+3MOcw6DEnQ/lHNrqvpCXx5hgMBlr6PH7g0DShnwjKqG9Af1pse2JlQGZviO6iFyFlb3U5nYGpjhe52v0CTeJucdk4NmyJImLC3cxUYW4N+TzQX3ckB3R1/aj1IyKFbzE+uuQs5uQUi5iCVglkwYO7g8GYVzrQgnL4BGE1L8+t3WDTfze3Y5+P+xP/j4pBO0ymhZRKTYjQu944eLGiyGDwa70BhoJ//+59cPtvAffyNQtQw0rjpsMVgOHnr8gAqeSqvY6Frf+rDNM5qPMTTwrbv2Yfeho1TwTt/mp+Y4yUCHB1cDTjKYny9TxuZN9x00nQqgZdMt5Du2HCljMSTG47Ha01EPKdG9t+kevVg+Y22AW1znUKn+9f+GsE28REp0pdHh19uxl7jLU1hJFTSakQkvvfN9evkZlWpoeBjnvXJXQR8YmVSp0hesoCyjIvy+oTmZ5F6jQg30STi4J3GNWxzYXqMkkEXFEnaOQqgRZ1mssrgS72NWPIkcWzhZBfkRslwdEvwxsudnguUbzLjPWs4MA62qDoqrjewdqRH9d8Te4PnAGjzr58na71Vw/EAKnon2onc59ddCzFjnZfmKct/q3Xq+Ro4NKFNkVETj07Vnou458bIvZH8Z3G4AAAAASUVORK5CYII="
                alt=""
              />
            </label>
          </div>
        </div>

        <div class="paymet-left__sup-title">
          <span>3</span>
          <h2>Olish Usuli</h2>
        </div>

        <div class="paymet-left__btn">
          <div
            class="box"
            @click="(ketish = false), (berish = true), (checkbox = true)"
          >
            <input name="radio1" checked type="radio" id="6" />
            <label class="" for="6">
              <span class="circle"></span>
              <span class="text"> Yetkazib Berish</span>
            </label>
          </div>
          <div
            class="box"
            @click="
              (ketish = true),
                (berish = false),
                (dastaf = false),
                (uygachor = false),
                (checkbox = false)
            "
          >
            <input name="radio1" type="radio" id="7" />
            <label class="" for="7">
              <span class="circle"></span>
              <span class="text"> Do'kondan Olib Ketish</span>
            </label>
          </div>
        </div>

        <div class="yetkazib-berish" v-if="berish">
          <h3 class="yetkazib-berish__title">Yetkazib Berish Manzili</h3>
          <div class="yetkazib-berish__mazil-wrapper">
            <div class="yetkazib-berish__mazil-left">
              <h4>Viloyat / Hudud*</h4>
              <button
                @click="RegionsWrapper = !RegionsWrapper"
                type="button"
                class="relative  shahar cursor-default rounded-md bg-white py-1 pl-3 pr-14 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <span class="flex items-center">
                  <span class="ml-3 block text-x truncate">
                    {{ region }}
                  </span>
                </span>
                <span
                  class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                >
                  <svg
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
              <ul v-if="RegionsWrapper">
                <li v-for="items in Regions?.data" :key="items" @click="region = items?.name, RegionsWrapper = false, regionDis = items.id, getRegionsDis()">
                  {{ items.name }}
                </li>
              </ul>
            </div>
            <div class="yetkazib-berish__mazil-right">
              <h4>Shahar / Tuman*</h4>
              <button
                @click="RegionsWrapperG = !RegionsWrapperG
"
                type="button"
                class="relative w-[300px] tumanlar cursor-default rounded-md bg-white py-1 pl-3 pr-16 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <span class="flex items-center"
                  ><span class="ml-3 block text-x truncate"
                    >{{ tumanlar }}</span
                  ></span
                ><span
                  class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                  ><svg
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >


                    <path
                      fill-rule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
              <ul v-if="RegionsWrapperG">
                <li v-for="items1 in RegionsDis?.data" :key="items1" @click="tumanlar = items1.name, getItem(items1)">
                  {{ items1.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div v-if="ketish">
          <div class="manzil-wrapper">
            <div class="manzil" v-for="item1 in stores?.data" :key="item1">
              <div class="manzil-left">
                <h1 class="manzil__address">
                  {{ item1?.regionName }}
                </h1>
                <h3 class="manzil__title">
                  {{ item1?.address }}
                </h3>
                <span class="manzil__time">
                  {{ item1?.work_time }}
                </span>
              </div>

              <div class="manzil-right">
                <button>MEN SHU JOYDAN OLAMAN</button>
              </div>
            </div>
          </div>
        </div>

        <div class="yetkazib-berishuygachor__wrapper" v-if="checkbox">
          <div class="yetkazib-berishuygachor__title">
            <input
              type="checkbox"
              @click="(dastaf = !dastaf), (uygachor = !uygachor) , deliveryPric = dastafka?.data?.home_delivery_price"
            />
            <span>Uygacha Yetkazib Berish</span>
          </div>

          <div class="yetkazib-berishuygachor" v-if="uygachor">
            <div class="yetkazib-berishuygachor__left">
              <span>Manzil</span>
              <input type="text" />
            </div>
            <div class="yetkazib-berishuygachor__right">
              <span>Qavat</span>
              <input type="number" />
            </div>
          </div>
        </div>
      </div>
      <div class="paymet-right">
        <div class="paymet-right__wrapper">
          <h2 class="paymet-right__wrapper-title">Sizning Ma'lumotlaringiz</h2>
          <div class="paymet-right__wrapper-price">
            <h4>Jami Mahsulot</h4>
            <p class="ml-4">{{ allProductPrice?.toFixed() }} so'm</p>
          </div>

          <div class="paymet-right__wrapper-price__dasrafka" v-if="checkbox">
            <h4>Yetkazib Berish</h4>
            <p>{{deliveryPriceFormat}}</p>
          </div>

          <div class="paymet-right__wrapper-price__dasrafka" v-if="dastaf">
            <h4>Uygacha Yetkazib Berish</h4>
            <!-- <pre>{{ dastafka?.data }}</pre> -->
            <p>{{ dastafka?.data?.homeDeliveryPriceFormat }} </p>
          </div>

          <div class="line"></div>

          <div class="paymet-right__wrapper-prise__wrap">
            <h4>Buyurtma Summasi:</h4>
            <p>{{ Number(allProductPrice?.toFixed())+deliveryPrice+deliveryPric }} so'm </p>
          </div>

          <button>Xarid Qilish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, t } = useI18n();
import services from "~/services/services";
import { useStore } from "~/store/store";
const index = ref()
// console.log(index.value);
async function getItem(item){
  deliveryPriceFormat.value = item.deliveryPriceFormat
  deliveryPrice.value = item.delivery_price
}

const store = useStore();
const deliveryPriceFormat = ref(0)
const deliveryPrice = ref(0)
const deliveryPric = ref(0)
const region = ref("Qoraqalpog‘iston")
const tumanlar = ref("Amudaryo")
const regionDis = ref(1)
const paymet = ref({});
const stores = ref({});
const Regions = ref({});
const RegionsDis = ref({});
const dastafka = ref({});
const ketish = ref(false);
const berish = ref(true);
const dastaf = ref(false);
const RegionsWrapper = ref(false);
const RegionsWrapperG = ref(false);
const uygachor = ref(false);
const checkbox = ref(true);
import { computed } from "vue";




const allProductPrice = computed(() => {
  let price = 0;
  store.cart.forEach((el) => {
    price += el.quantity * el.price;
  });
  return price;
});

async function changeReg() {
  // region.value = name
  console.log(id);
}

async function getPaymetCategories(l) {
  store.loading = true;
  const res = await services.getPaymet(locale.value);
  paymet.value = res;
  store.loading = false;
}

async function getStoresCategories(l) {
  store.loading = true;
  const res = await services.getStores(locale.value);
  stores.value = res;
  store.loading = false;
}

async function getDastafkaCategories(l) {
  store.loading = true;
  const res = await services.getDastafka(locale.value);
  dastafka.value = res;
  store.loading = false;
}
getDastafkaCategories();

async function getRegions(l) {
  store.loading = true;
  const res = await services.getRegions(locale.value);
  Regions.value = res;
  store.loading = false;
}
async function getRegionsDis(l, id) {
  store.loading = true;
  const res = await services.getRegionsDis(locale.value, regionDis.value);
  RegionsDis.value = res;
  store.loading = false;
}
getRegions();
getPaymetCategories();
getStoresCategories();
getRegionsDis()
</script>

<style lang="scss" scoped>
</style>