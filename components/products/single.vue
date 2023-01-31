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
    <div class="mx-auto max-w-4xl px-2 py-16 sm:px-6 lg:max-w-5xl lg:px-8">
      <h2 class="text-slate-200 text-2xl font-bold py-4">COLLECTIONS</h2>
      <p class="text-slate-200 text-lg pb-4">These are some collections.</p>
      <div class="grid grid-cols-3 w-full gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group col-span-1">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-2 text-sm text-slate-400">{{ product.name }}</h3>
          <p class="mt-0.5 text-sm font-medium text-slate-200">{{ product.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [


  {
    id: 1,
    name: 'CLOTHES',
    href: '#',
    description: 'This is a category description.',
    imageSrc: 'https://picsum.photos/id/428/500',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'JEWELRY',
    href: '#',
    description: 'This is also a description.',
    imageSrc: 'https://picsum.photos/id/267/500',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'MISC',
    href: '#',
    description: 'Misc category description.',
    imageSrc: 'https://picsum.photos/id/112/500',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
]
</script>