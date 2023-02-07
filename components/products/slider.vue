<template> 
    <div class="sliderWrap">
        <div class="imgWrap">
            <div class="text-4xl tex-red-500 font-bold">
                <transition name="slide-fade">
                    <img :src="imageList[theIndex].imageSrc" />
                </transition>
            </div>
            <p>{{ theIndex }}</p>
    <button @click="Increment" class="px-4 py-2 text-blue-900 bg-blue-100">
      Increment
    </button>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue';
    const currentImg = 'first'
    const theIndex = 0
    console.log(theIndex + 'setup console log')


export default {
  setup() {
    const imageList = [
    {
    id: 1,
    name: 'PANTS',
    href: '#',
    price: '$48',
    imageSrc: 'https://picsum.photos/id/447/500',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'DRESS',
    href: '#',
    price: '$35',
    imageSrc: 'https://picsum.photos/id/325/500',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'HOODIE',
    href: '#',
    price: '$89',
    imageSrc: 'https://picsum.photos/id/338/500',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'SWEATER',
    href: '#',
    price: '$35',
    imageSrc: 'https://picsum.photos/id/158/500',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

    ]
    const theIndex = ref(0);
    const Increment = () => theIndex.value++
    return { theIndex, Increment, imageList };
        /* setInterval(switchImg, 1000); */
        function switchImg() {

}
  },
};




</script>

<style scoped>

.main {
  position: relative;
}

img {
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  -webkit-transition: all 3s ease;
  transition: all 3s ease;
}

button {
  z-index: 100;
  position: relative;
  width: 200px;
  height: 25px;
  margin: 20px;
}

/* prefix with transition name */
.slide-fade-enter-active {
  opacity: 1;
  z-index: 10;
}

.slide-fade-leave-active {
  opacity: 1;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>