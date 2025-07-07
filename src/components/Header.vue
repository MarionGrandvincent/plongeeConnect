<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>

    <header>
        <div class="header mb-16 mt-8 w-full flex">
            <div>
                <p>LOGO PLONGEE CONNECT</p>
                <img src="" alt="">
            </div>
            <nav class="w-full flex">
                <ul class="text-primary flex flex-row ml-auto">
                    <li>
                        <RouterLink to="/" class="uppercase pl-0 px-4">Accueil</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/agence-web" class="uppercase px-4">Notre agence web</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact" class="uppercase px-4">Nous contacter</RouterLink>
                    </li>
                    <!--<li>
                        <RouterLink to="/carte-plongee" class="uppercase px-4">Carte plongée</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/encyclopedie-poisson" class="uppercase px-4">Encyclopedie poisson</RouterLink>
                    </li>-->
                </ul>
            </nav>
        </div>
    </header>

</template>




<style scoped>

</style>