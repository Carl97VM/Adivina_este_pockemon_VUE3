<template>
    <div class="pokemon-container">
        <img :src="imgSrc" alt="Pockemon" class="hidden-pockemon">
        <img
            v-if="showPockemon" 
            :src="imgSrc" 
            alt="Pockemon" 
            class="fade-in">
    </div>
    
</template>

<script>

export default {
    props: {
        pockemonId: {
            type: Number,
            required: true,
        },
        showPockemon:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pockemonId }.svg`
        }
    }

}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}


</style>