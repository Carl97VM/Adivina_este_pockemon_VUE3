<template>
    <h1>
        ¿Quien es este pockemon? 
    </h1>
    <!-- IMG -->
    <Images :pockemonId="4" :showPockemon="true" />
    
    <!-- Options -->
    <Options :pockemons="pockemonArr"/>
</template>

<script>
import Options from '@/components/PockemonOptions.vue'
import Images from '@/components/PockemonPicture.vue'

import getPockemonsOption from '../helpers/getPockemonOptions'

console.log( getPockemonsOption() );

export default {
    components: { Options,Images},
    data() {
        return {
            pockemonArr: []
        }
    },
    methods: {
        async mixPockemonArray() {
            this.pockemonArr = await getPockemonsOption()
            // console.log( this.pockemonArr );
        }
    },
    mounted() {
        this.mixPockemonArray()
    }
}
</script>

<style>

</style>