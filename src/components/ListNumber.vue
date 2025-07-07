<script setup>
    const $data = [
        {
            id:"01",
            title:"titre",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero turpis, vestibulum at mi imperdiet, malesuada hendrerit orci"
        },
        {
            id:"02",
            title:"titre",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero turpis, vestibulum at mi imperdiet, malesuada hendrerit orci"
        },
        {
            id:"03",
            title:"titre",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero turpis, vestibulum at mi imperdiet, malesuada hendrerit orci"
        }
    ]
</script>


<template>
    <div class="flex w-full my-32">
        <div class="w-1/3 flex relative" v-for="_this in $data">
          <div class="w-1/3 relative">
            <div class="bg-small-double-form"><span class="font-pacifico font-semibold relative text-lg">{{ _this.id }}</span></div>
          </div>
          <div class="w-2/3 mx-8">
            <h6 class="text-sm mb-2">{{ _this.title }}</h6>
            <p class="text-grey">{{ _this.text }}</p>
          </div>
        </div>
    </div>
</template>
