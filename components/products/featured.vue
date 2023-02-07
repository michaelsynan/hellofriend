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
    <div class="mx-auto max-w-2xl px-4 -mt-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div class="w-20 mt-10 absolute -ml-20 pt-14">
            <h3 class="font-bold text-2xl text-slate-100 h-16 -rotate-90 absolute">FEATURED</h3>
          </div>
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-2 text-sm text-slate-400 font-bold">{{ product.name }}</h3>
          <p class="mt-0.5 text-sm font-medium text-slate-200">{{ product.price }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [


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
  // More products...
]
</script>