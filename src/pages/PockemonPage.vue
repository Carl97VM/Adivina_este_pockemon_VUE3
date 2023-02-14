<template>
    <h1>
        ¿Quien es este pockemon? 
    </h1>
    <!-- IMG -->
    <Images :pockemonId="4" :showPockemon="true" />
    
    <!-- Options -->
    <Options />
</template>

<script>
import Options from '@/components/PockemonOptions.vue'
import Images from '@/components/PockemonPicture.vue'

import getPockemonsOption from '../helpers/getPockemonOptions'

console.log( getPockemonsOption() );

export default {
    components: { Options,Images}
}
</script>

<style>

</style>