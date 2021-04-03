<template>
    <div class="table container ">

      <div class="d-flex justify-center mb-2 mt-14 ">
          <h1 style="font-size: 50px;" class="d-flex ">Information</h1>
      </div>
      <div class="d-flex justify-center">
          <p class="d-flex mb-0">ตารางเคสทั้งหมดที่เสร็จแล้ว</p>
      </div>

      <v-card>
        <v-simple-table class="mt-10">
            <template v-slot:default>
                <thead>
                    <tr>
                      <th class="text-left">
                          ID
                      </th>
                      <th class="text-left">
                          ประเภท
                      </th>
                      <th class="text-left">
                          Case
                      </th>
                      <th class="text-left">
                          ชื่อผู้แจ้ง
                      </th>
                      <th class="text-left">
                          ผู้รับเรื่อง
                      </th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="(el,i) in data" :key="i">
                      <td>{{ el.id }}</td>
                      <td>{{ el.type }}</td>
                      <td>{{ el.name }}</td>
                      <td>{{ el.informant }}</td>
                      <td>{{ el.officer }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
      </v-card>
    </div >
</template>

<script>
import axios from '../plugins/axios';
  export default {
    name: '',
     
    data(){
      return {
        data: [],
      }
    },
    
    computed:{ 
    },

    methods: {
      callapi(){
         axios.getData(`/status/TRUE`)   
        .then(res=>{
          this.data = res.data
        })
        .catch(err => console.log(err))
      },
    },

    mounted(){
      this.callapi()
    }
  }
</script>