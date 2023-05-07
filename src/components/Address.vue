<template>
    <v-app>
      <v-main>
       <v-card height="100%" >
        <div v-for="index in 10" :key="index" class="d-flex align-center flex-column" >
           <div class="mt-4 text-subtitle-2"> </div>
            <v-card width="70%">    
             <v-container  class="persianFont">
                <v-row dir="rtl" >
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field 
              v-model="allAddress[index].first_name"
              label="نام"
              readonly
            >
            </v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="allAddress[index].last_name"
              label="نام خانوادگی"
              readonly
            >
            </v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="allAddress[index].coordinate_mobile"
              label=" تلفن همراه"
              readonly

            >
            </v-text-field>
          </v-col>      
        </v-row>
        <v-row dir="rtl">
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="allAddress[index].coordinate_phone_number"
              label=" تلفن ثابت"
              readonly
            >
            </v-text-field>
          </v-col> 
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="allAddress[index].gender"
              label="جنسیت"
              readonly
              
            >
            </v-text-field>
          </v-col>   
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="allAddress[index].address"
              label="آدرس"
              readonly
            >
            </v-text-field>
          </v-col>      
        </v-row>
            </v-container>
            </v-card>
        </div>
       </v-card>
      </v-main>
   
    </v-app>
  </template>
  <script>
 
  export default {
    name: "AddressList",
    data(){
      return{  
        allAddress:[],
        data:{
          first_name:"",
          last_name:"",
          coordinate_mobile:null,
          coordinate_phone_number:null,
          region:'1',
          lat:null,
          lng:null,
          gender:null,
        },
        
      }
    },
    created() {
        const headers = { "Content-Type": "application/json" ,"Authorization":"Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4"};
        this.$http.get('https://stage.achareh.ir/api/karfarmas/address', { headers }).then(
            response =>{
              this.allAddress=response.body
            },
            error =>{
              console.log(error)
            });
},

  
  };
  </script>
  <style>
  @font-face{
    font-family: "IranYekan";
    src: url("@/assets/fonts/IRANYekanBold.ttf") format("truetype")
  }
  .persianFont{
    font-family: "IranYekan";
  }
  </style>