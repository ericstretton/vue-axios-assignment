import {defineStore} from 'pinia';
import axios from 'axios';

export const useJokeStore = defineStore('joke', {
    state: () =>{
        return {
            jokeResponse: ""
        }
    },
    actions : {
        async getJoke() {
            axios.request({
                url: 'https://geek-jokes.sameerkumar.website/api?format=json',
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                },
                params: {
                    "joke": this.jokeResponse
                }
                
            }).then((response)=>{
                this.jokeResponse = response;
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    getters: {
        jokeText: state => {
            if (state.jokeResponse){
                return state.jokeResponse.data.joke;
            }
            
        }
    }
})