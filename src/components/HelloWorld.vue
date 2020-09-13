<template>
  <v-container>
    <!-- <v-overlay v-model="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay> -->
  <v-row class="show">
    <v-card v-for="(el,i) in laf" :key="i" class="mx-auto ma-4 col-12 pa-0" max-width="344">
      <v-card-body>
        <v-list-item-avatar
          tile
          width="80%"
          size="120"
          color="grey"
          class="ml-9"
        ></v-list-item-avatar>
        <!-- <v-img>{{el.image}}</v-img>  --> <!-- ภาพ -->
      </v-card-body>

      <v-card-text>
        <p class="text--primary">Name: <span class="ml-3">{{el.name}}</span></p>
        <p class="text--primary">Charactor:<span class="ml-3">{{el.charactor}}</span></p>
        <p class="text--primary">Tel. <span class="ml-3">{{el.tell}}</span></p>
        <p class="text--primary">Informant: <span class="ml-3">{{el.informant}}</span></p>
        <p class="text--primary">Location: <span class="ml-3">{{el.location_info}}</span></p>
      </v-card-text>

      <v-card-actions>
        <v-btn class="done"
          text
          color="deep-purple accent-4"
          @click="clickbtn"
        >
          Done
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>

  <!-- <v-row>
      <v-card  v-for="(el,i) in laf" :key="i" class="mx-auto ma-4 col-12 pa-0" max-width="344">
          <v-card-text>
            <p class="font-weight-medium text--primary" >
              Name: <span class="ml-3">{{el.name}}</span>
            </p>
            <p class="font-weight-medium text--primary">
              charactor:
              <br> 
              <span>{{el.charactor}}</span>
            </p>
            <p class="font-weight-medium text--primary">
              Tel. <span class="ml-3">{{el.tell}}</span>
            </p>
            <p class="font-weight-medium text--primary">
              Informant: <span class="ml-3">{{el.informant}}</span>
            </p>
          </v-card-text>
            
          <v-card-actions>
            <p class="font-weight-medium text--primary ml-3">
              Location: <span>{{el.location_info}}</span>
            </p>
          </v-card-actions>
            <v-list-item-avatar
              tile
              size="120"
              color="grey"
            ></v-list-item-avatar>
            <br>
            <br>
            <br>
          <v-card-actions>
            <v-btn class="ml-5 mt-3"
              dark
              color="indigo darken-1"
            >
              Done
            </v-btn>
          </v-card-actions>

      </v-card>
    </v-row> -->
    
  </v-container>
</template>

<script>
import axios from '../plugins/axios';
  export default {
    name: '',
    // loading: false,
    data(){
      return {
        data: '',
      }
    },
    
    computed:{
      laf(){
        return this.data.items
      },
    },

    methods: {
      callapi(){
         axios.getData(`?path=/info&query={"status":false}`) 
        .then(res=>{
          this.data = res.data
        })
        .catch(err => console.log(err))
      },
      clickbtn(){
        axios({
          method: 'post',
          url: '/info/630903004',
          data: {
            done: '1',
          }
        });
      }
    },

    mounted(){
      this.callapi()
    }
  }
</script>
