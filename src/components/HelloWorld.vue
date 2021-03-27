<template>
  <v-container> 
    <v-row class="show"><!-- v-if="renderComponent" -->

      <v-card v-for="(el,i) in data" :key="i" class="mx-auto ma-4 col-12 pa-0" max-width="344">

          <v-img @click="full_image(el)"
            height="250"
            :src="el.image"
          ></v-img> 

        <v-card-text class="fon">
          <h2 class="text--primary pb-5"> <span class="ml-3">Case {{el.id}}: {{el.name}}</span></h2>
          <p class="text--primary">ลักษณะ:<span class="ml-3">{{el.charactor}}</span></p>
          <p class="text--primary">เบอร์โทรศัพท์ <a :href="`tel:${el.tel}`" data-rel="external" target="_black"><span class="ml-3">{{el.tel}}</span></a></p>
          <p class="text--primary">ข้อมูลเพิ่มเติม: <span class="ml-3">{{el.add_info}}</span></p>
          <p class="text--primary">จุดรับเรื่อง: <span class="ml-3">{{el.location_info}}</span></p>
        </v-card-text>

        <v-card-actions class="fon d-flex flex-row-reverse">
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
          <p class="pt-5 pl-5">ตามหา {{ showname }} เจอเเล้ว</p>
          <v-card-actions class="d-flex justify-end">
            <v-btn
              style="background:#0096c7"
              dark
              @click="clickbtn()"
              
            >
              ใช่
            </v-btn>

            <v-btn
              style="background:#ff97b7"
              dark
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
        showname: ''
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
        this.showname = c.name
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
}
</style>
