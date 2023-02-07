<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div >
    <div class="mx-auto max-w-7xl sm:px-6 lg:max-w-6xl lg:px-8 grid place-items-center h-screen">
      <div>
        <p class="pb-8 text-slate-200 font-bold text-5xl text-left w-4/5 md:w-auto mx-auto leading-snug">We design clean, impactful & <span id="animated-heading" class="text-purp"></span><br />websites and marketing campaigns.</p>
        <div class="grid grid-cols-3 w-full gap-8">
          <a v-for="(product, index) in products" :key="product.id" :href="product.href" class="group col-span-3 md:col-span-1 w-4/5 md:w-auto mx-auto" :class="{ 'first': index === 0 }">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 class="mt-2 text-xl text-slate-400 group-hover:text-purp font-bold">{{ product.name }}</h3>
            <p class="mt-0.5 text-lg font-medium text-slate-200">{{ product.description }}</p>
          </a>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const words = ['fun', 'intelligent', 'sophisticated']
const products = [


  {
    id: 1,
    name: 'DESIGN',
    href: '#',
    description: 'Your ideas, brought to life.',
    imageSrc: 'https://picsum.photos/id/428/500',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'DEVELOPMENT',
    href: '#',
    description: 'Advanced tech stack made simple.',
    imageSrc: 'https://picsum.photos/id/267/500',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'MARKETING',
    href: '#',
    description: 'Data-driven, human-centric.',
    imageSrc: 'https://picsum.photos/id/112/500',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
]

var thankYouWords = ['fun', 'intelligent', 'sophisticated'];

onMounted(() =>  {
function displayThankYouWords(index) {
  if (index >= thankYouWords.length) {
      index = 0;
  }

  var animatedHeading = document.getElementById("animated-heading") 

  animatedHeading.innerHTML = thankYouWords[index];

  setTimeout(function() {
      displayThankYouWords(index + 1)
  }, 1500);
}

displayThankYouWords(0);
})
</script>
