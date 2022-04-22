<template>
    <div>
        <JokeButton/>
        <NormalJoke/>
        <SnakeJoke/>
        <LoudJoke/>
    </div>
</template>

<script>
import JokeButton from './JokeButton.vue'
import LoudJoke from './LoudJoke.vue'
import NormalJoke from './NormalJoke.vue'
import SnakeJoke from './SnakeJoke.vue'

    export default {
  components: { JokeButton, NormalJoke, SnakeJoke, LoudJoke },
        
    }
</script>

<style lang="sass" scoped>

</style>