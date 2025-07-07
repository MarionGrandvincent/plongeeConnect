<script setup lang="ts">
  import FunFact from '../components/FunFactFish.vue'
</script>

<template>

  <main>

    <h1 class="text-xl font-semibold leading-[1.35]">Nous sommes une agence web<br /> entierement dédié au monde de la <br /><span class="font-pacifico font-semibold text-secondary text-xxl">plongée</span></h1>


    <div class="flex w-full my-32">
        <div class="w-1/3 flex relative">
          <div class="w-1/3 relative">
            <div class="bg-small-double-form"><span class="font-pacifico font-semibold relative text-lg">01</span></div>
          </div>
          <div class="w-2/3 mx-8">
            <h6 class="text-sm mb-2">titre</h6>
            <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero turpis, vestibulum at mi imperdiet, malesuada hendrerit orci</p>
          </div>
        </div>
        <div class="w-1/3 flex relative">
          <div class="w-1/3 relative">
            <div class="bg-small-double-form"><span class="font-pacifico font-semibold relative text-lg">02</span></div>
          </div>
          <div class="w-2/3 mx-8">
             <h6 class="text-sm mb-2">titre</h6>
            <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero turpis, vestibulum at mi imperdiet, malesuada hendrerit orci.</p>
          </div>
        </div>
        <div class="w-1/3 flex relative">
          <div class="w-1/3 relative">
            <div class="bg-small-double-form"><span class="font-pacifico font-semibold relative text-lg">03</span></div>
          </div>
          <div class="w-2/3 mx-8">
             <h6 class="text-sm mb-2">titre</h6>
            <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero turpis, vestibulum at mi imperdiet, malesuada hendrerit orci.</p>
          </div>
        </div>
    </div>

    <FunFact />

    

  </main>
  
</template>
