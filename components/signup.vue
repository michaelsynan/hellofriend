<template>
<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

  <div class="bg-stone-900 mt-16">
    <div class="mx-auto max-w-5xl py-12 px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl" id="newsletter-headline">Sign up for updates</h2>
        <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt.</p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form class="sm:flex">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email-address" type="email" autocomplete="email" required="" class="w-full border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs" placeholder="Enter your email" />
          <div class="mt-3 shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" class="flex w-full items-center justify-center border border-transparent bg-rose-800 px-5 py-3 text-base font-medium text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">Notify me</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
