<template>
    <h1>
        ¿Quien es este pockemon? 
    </h1>
    <!-- IMG -->
    <Images />
    
    <!-- Options -->
    <Options />
</template>

<script>
import Options from '@/components/PockemonOptions.vue'
import Images from '@/components/PockemonPicture.vue'

export default {
    components: { Options,Images}
}
</script>

<style>

</style>