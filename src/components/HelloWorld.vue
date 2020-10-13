<template>
  <v-container> 
    <v-row class="show"><!-- v-if="renderComponent" -->

      <v-card v-for="(el,i) in data" :key="i" class="mx-auto ma-4 col-12 pa-0" max-width="344">
        <v-img
          height="250"
          :src="el.image" 
        ></v-img> 

        <v-card-text>
          <p class="text--primary">Name: <span class="ml-3">{{el.name}}</span></p>
          <p class="text--primary">Charactor:<span class="ml-3">{{el.charactor}}</span></p>
          <p class="text--primary">Tel. <span class="ml-3">{{el.tell}}</span></p>
          <p class="text--primary">Informant: <span class="ml-3">{{el.informant}}</span></p>
          <p class="text--primary">Location: <span class="ml-3">{{el.location_info}}</span></p>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="deep-purple accent-4"
            dark
            @click="clicked(el)"
          >
            Done
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Are you sure{{ transformer }} </v-card-title>
          <v-card-actions>
            <v-btn
              color="green darken-1"
              text
              @click="clickbtn()" 
            >
              Yes
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    
  </v-container>
</template>

<script>
import axios from '../plugins/axios';
  export default {
    name: '',
     
    data(){
      return {
        data: [],
        image:[],
        dialog: false,
        transformer: '',
        // renderComponent: true,
        // loading: false,
        reload:true,
      }
    },
    
    computed:{ 
    },

    methods: {
      callapi(){
         axios.getData(`/status/FALSE`)   
        .then(res=>{
          this.data = res.data
        })
        .catch(err => console.log(err))
      },

      clickbtn(){
        let id = this.transformer
        this.dialog = false
        let json = {done:"1"}   
          axios.patchData(`/tabs/updateTable/id/${id}`,json)
        .then(res=>{
          console.log(res)
          window.location.reload()
        })
        .catch(err => console.log(err))
        
      },

      clicked(c){
        this.dialog = true
        this.transformer = c.id
      }
    },

    mounted(){
      this.callapi()
    }
  }
</script>
