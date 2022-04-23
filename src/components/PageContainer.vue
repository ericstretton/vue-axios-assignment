<template>
    <div class="pageLayout">
        <h1
            id="pageHeader">
            Chuck Norris Jokes</h1>
        <JokeButton
        @click="getJoke"
        id="getbutton"
        />
        <div>
            <NormalJoke
            id="normalSelect"
            />
            <SnakeJoke
            id="snakeSelect"
            />
            <LoudJoke
            id="LoudSelect"
            />
        </div>
        
    </div>
</template>

<script>
import JokeButton from './JokeButton.vue'
import LoudJoke from './LoudJoke.vue'
import NormalJoke from './NormalJoke.vue'
import SnakeJoke from './SnakeJoke.vue'
import {useJokeStore} from '@/stores/joke'
import {mapState} from 'pinia'

    export default {
        name: "PageContainer",
        components: { JokeButton, NormalJoke, SnakeJoke, LoudJoke },
        computed: {
            // State

            // Getters
            ...mapState(useJokeStore, ['jokeText']),
            // Actions
            ...mapState(useJokeStore, ["getJoke"])
        }
    }
</script>

<style lang="scss" scoped>
    .pageLayout{
        display: grid;
        grid-template-rows: 0.5fr 2fr 1fr;
        #getButton{
            grid-row: 2;
        }
        #pageHeader{
            grid-row: 1;
        }
        #normalSelect{
            grid-row: 3;
        }
        #snakeSelect{
            grid-row: 3;
        }
        #LoudSelect{
            grid-row: 3;
        }
    }
    
    

</style>