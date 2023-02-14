<template>
    <h1 v-if="!pockemon" >Espere por favor...</h1>
    <div v-else>
        <h1>
            ¿Quien es este pockemon? 
        </h1>
        <!-- IMG -->
        <Images 
        :pockemonId="pockemon.id" :showPockemon="showPockemon" />
        
        <!-- Options -->
        <Options 
            :pockemons="pockemonArr"
            @selection="checkAnswer"
        />
        <div v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="restarGame">New Game</button>
        </div> 
    </div>
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
            pockemonArr: [],
            pockemon: null,
            showPockemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPockemonArray() {
            this.pockemonArr = await getPockemonsOption()
            // console.log( this.pockemonArr );
            const rndInt = Math.floor( Math.random() * 4 )
            this.pockemon = this.pockemonArr[ rndInt ]
        },
        checkAnswer( selectedId ) {

            this.showPockemon = true
            this.showAnswer = true

            if ( selectedId === this.pockemon.id ) {
                this.message = `Correcto, ${ this.pockemon.name }`
            }else{
                this.message = `Ups..., era ${ this.pockemon.name }`
            }
        },
        restarGame(){

            this.showPockemon = false,
            this.showAnswer   = false,
            this.pockemon     = null,
            this.pockemonArr  = [],
            this.mixPockemonArray()

        }
    },
    mounted() {
        this.mixPockemonArray()
    }
}
</script>

<style>

</style>