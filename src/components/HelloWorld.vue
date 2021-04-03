<template>
  <v-container class="fon"> 

    <div class="d-flex justify-center mb-2 mt-14 ">
      <h1 style="font-size: 50px;" class="d-flex ">Information</h1>
    </div>
    <div class="d-flex justify-center">
      <p class="d-flex mb-0">ติดต่อสอบถาม</p>
    </div>
    <div class="d-flex justify-center">
      <p class="d-flex mb-0">เก็บของได้ - เเจ้งของหาย - แจ้งคนพลัดหลง</p>
    </div>
    <div class="d-flex justify-center">
      <p class="d-flex mb-16">- ญาติตามหาคนพลัดหลง</p>
    </div>
    <v-form>
      <v-container>
        <v-row>
          <v-col
          cols="11"
          >
          <v-text-field
            v-model="Case"
            label="ค้นหาเคส"
            solo
          ></v-text-field>
          <v-text
            
          >
          {{ Case }}
          </v-text>
        </v-col>
        <v-col
          cols="1"
        >
          <v-btn 
            dark
            color="blue lighten-1"
            @click="caseFilter(Case)"
          >
            Search
          </v-btn>
        </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-row class="show mt-6"><!-- v-if="renderComponent" -->
    
      <v-card v-for="(el,i) in data" :key="i" class="mx-auto ma-4 col-12 pa-0" max-width="344">

          <v-img @click="full_image(el)"
            height="250"
            :src="el.image"
          ></v-img> 

        <v-card-text class="fon">
          <h2 class="text--primary pb-5"> <span class="ml-3">Case: {{el.name}}</span></h2>
          <p class="text--primary">ประเภท:<span class="ml-3">{{el.type}}</span></p>
          <p class="text--primary">ลักษณะ:<span class="ml-3">{{el.charactor}}</span></p>
          <p class="text--primary">ชื่อผู้แจ้ง:<span class="ml-3">{{el.informant}}</span></p>
          <p class="text--primary">เบอร์โทรศัพท์ <a :href="`tel:${el.tel}`" data-rel="external" target="_black"><span class="ml-3">{{el.tel}}</span></a></p>
          <p class="text--primary">ข้อมูลเพิ่มเติม: <span class="ml-3">{{el.add_info}}</span></p>
          <p class="text--primary">ผู้รับเรื่อง: <span class="ml-3">{{el.officer}}</span></p>
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

    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      color="purple lighten-4"
    >
      {{text}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink lighten-2"
          text
          v-bind="attrs"
          @click="snackbar = false"
          style="background:#ffffff"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    
  </v-container>
</template>

<script>
import axios from '../plugins/axios';
  export default {
    // name: '',
     
    data(){
      return {
        data: [],
        image:[],
        dialog: false,
        transformer: '',
        fullimage: false,
        reload:true,
        showname: '',
        snackbar: true,
        text: 'เว็บไซต์สำหรับเจ้าหน้าที่กองติดต่อสอบถามเพื่อการปฏิสันถารดูแลผู้ที่มาร่วมบุญให้ปลื้มตลอดทั้งวัน'
      }
    },
    
    computed:{
      caseFilter () {
        return this
      },
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
<<<<<<< HEAD

      search(input){
        if(input.length!==0){
          // alert(input)
          // let lll = this.data.filter(el => el.name === input)
          // console.log(lll[0])
        } else {
          this.label_search='กรุณาใส่คำที่่ต้องการค้นหา'
        }

      }

      // dial: function(number){
      //   window.location ='tel:'+number;
      // },
=======
>>>>>>> 6262a8bf8d978a28a52d5d7f75dc02cb922efe9a
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

.banner {
  display: flex;
  justify-content: space-around;
  background-color:#c77dff;
  color:#ffffff;
  padding:1rem 0;
  position: sticky;
  top: 0;
  z-index: 1;
}
.cross {
  position: absolute;
  cursor: pointer;
}
</style>
