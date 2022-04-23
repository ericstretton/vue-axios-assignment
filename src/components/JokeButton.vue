<template>
    <div>   
        <h1>{{joke}}</h1>
        <v-btn
            @click="getJoke"
            elevation="2"
            large
            outlined
            plain
            rounded
            class="font-medium-weight"
            >New Joke
        </v-btn>
    </div>
</template>

<script>
import axios from 'axios'


    export default {
        name : "JokeButton",
        data:() => {
            return{
                joke: undefined
            }
        },
        methods: {
            getJoke() {
                axios.request({
                    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
                    method: 'GET',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    params: {
                        "joke": this.joke
                    }
                    
                }).then((response)=>{
                    this.joke = response.data.joke
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
div{
    
    button{
        
        position: absolute;
        left: 17vw;
        top: 5vh;
}
}


</style>