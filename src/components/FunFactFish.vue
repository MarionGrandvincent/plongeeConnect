<script setup lang="ts">
  import { ref } from 'vue'

  const funFact = [
    {
        id:1,
        title: "Les poissons peuvent apprendre des tours",
        text: "Oui, comme les chiens ! Certains poissons, comme les poissons rouges, peuvent apprendre à nager à travers des cerceaux, reconnaître leurs propriétaires, ou venir manger à un signal sonore."
    },
    {
        id:2,
        title: "Les poissons rouges n’ont pas une mémoire de 3 secondes",
        text: "Contrairement à la croyance populaire, un poisson rouge peut se souvenir d’une information pendant plusieurs mois. Donc s’il t’ignore, c’est pas l’amnésie… c’est personnel."
    },
    {
        id:3,
        title: "Certains poissons changent de sexe",
        text: "Des espèces comme le poisson-clown peuvent changer de sexe au cours de leur vie. Et oui, dans 'Nemo', si la mère meurt… le père devient la mère. Disney a zappé cette partie."
    },
    {
        id:4,
        title: "Des poissons peuvent survivre dans la glace",
        text: "Les poissons des régions polaires produisent une sorte d'antigel naturel dans leur sang. Idéal pour les soirées raclette sous l’eau."
    },
    {
        id:5,
        title: "Certains poissons... chantent !",
        text: "Le toadfish (poisson-crapaud) émet des sons qu’on peut entendre à travers les coques des bateaux. Il fait des concerts sous-marins, surtout pendant la saison des amours."
    },
    {
        id:6,
        title: "Le requin dort les yeux ouverts",
        text: "Certains requins dorment en nageant lentement pour faire passer l'eau sur leurs branchies, tout en gardant les yeux ouverts. Un vrai multitâche flippant."
    },
    {
        id:7,
        title: "Les poissons se reconnaissent… et se souviennent",
        text: "Contrairement à ce qu'on croit, beaucoup de poissons ont une bonne mémoire, se rappellent d'autres poissons, reconnaissent les visages humains, et savent qui est sympa ou non."
    },
    {
        id:8,
        title: "Certains poissons fabriquent des nids",
        text: "Le gourami mâle crée un nid de bulles pour protéger ses œufs. C’est mignon ET ingénieux."
    },
    {
        id:9,
        title: "Le poisson-globe est un mets... potentiellement mortel",
        text: "Le fugu japonais contient une toxine mortelle. Un mauvais coup de couteau par le chef, et c’est ton dernier repas."
    },
    {
        id:10,
        title: "Il y a un poisson qui danse pour séduire",
        text: "Le poisson-mandarin fait une parade amoureuse chorégraphiée à la tombée de la nuit, tous les soirs. Romantisme + moves de danse = combo gagnant. "
    }
  ]
  const $data = ref((funFact.sort(() => 0.5 - Math.random())).slice(0, 3));

  const $pos = () => {
    let _index = 0;
    if(_index != 0 && _index != 2) {
        return false
    }
  }
  console.log($pos)
  

</script>


<template>

    <div>
        <ul class="flex">
            <li class="w-1/3 relative py-50" v-for="(_this, _index) in $data" :class="[{ 'mx-8' : _index != 0 && _index != $data.length-1}, `bgStyle-`+ _index]">
                <div class="px-12 text-center">
                    <h2 class="mb-3 font-semibold leading-[1.5]">{{ _this.title }}</h2>
                    <p class="italic leading-[1.25] text-grey">{{ _this.text }}</p>
                </div>
            </li>
        </ul>
    </div>



</template>


<style scoped>
    .bgStyle-0:before,
    .bgStyle-1:before,
    .bgStyle-2:before {
        content:"";
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        z-index: -1;
    }
    .bgStyle-0:before {
        background-image: url("/bg-form-5.png");
    }
    .bgStyle-1:before {
        background-image: url("/bg-form-3.png");
    }
    .bgStyle-2:before {
        background-image: url("/bg-form-4.png");
    }
</style>