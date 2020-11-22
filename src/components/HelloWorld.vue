<template>
  <v-container> 
    <v-row class="show"><!-- v-if="renderComponent" -->

      <v-card v-for="(el,i) in data" :key="i" class="mx-auto ma-4 col-12 pa-0" max-width="344">

          <v-img @click="full_image(el)"
            height="250"
            :src="el.image"
          ></v-img> 

        <v-card-text class="fon">
          <p class="text--primary">ชื่อ นานสกุล: <span class="ml-3">{{el.name}}</span></p>
          <p class="text--primary">ลักษณะ:<span class="ml-3">{{el.charactor}}</span></p>
          <p class="text--primary">เบอร์โทรศัพท์ <a :href="`tel:${el.tel}`" data-rel="external" target="_black"><span class="ml-3">{{el.tel}}</span></a></p>
          <p class="text--primary">ข้อมูลเพิ่มเติม: <span class="ml-3">{{el.informant}}</span></p>
          <p class="text--primary">จุดรับเรื่อง: <span class="ml-3">{{el.location_info}}</span></p>
        </v-card-text>

        <v-card-actions class="fon">
          <v-btn
            style="background:#ff97b7"
            dark
            @click="clicked(el)"
          >
            เสร็จ
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card class="fon">
          <v-card-title class="headline">ตามหา {{ transformer }} เจอเเล้ว</v-card-title>
          <v-card-actions>
            <v-btn
              color="green darken-1"
              text
              @click="clickbtn()"
              
            >
              ใช่
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              ไม่ใช่
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
        fullimage: false,
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
      },

      full_image: function(c){   
        window.open(c.full_image);    
      },

      // dial: function(number){
      //   window.location ='tel:'+number;
      // },
    },

    mounted(){
      this.callapi()
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
.fon {
  font-family: 'Sarabun', sans-serif;
  font-size: 1.5rem;
}
</style>
