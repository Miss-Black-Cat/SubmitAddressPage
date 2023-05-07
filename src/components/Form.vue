<template>
    <v-app>
      <v-main>
       <v-card height="100%" >
        <div class="d-flex align-center flex-column ">
           <div class="mt-4 text-subtitle-2"><p class="persianFont">ثبت آدرس </p> </div>
      <v-card width="70%">     
        <v-form 
        ref="form"
        lazy-validation
        >
      <v-container  class="persianFont">
        <p dir="rtl">لطفا مشخصات و آدرس خود را وارد کنید</p>
        <v-row dir="rtl" >
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field 
              v-model="data.first_name"
              :rules="nameRules"
              label="نام"
              required
              filled
              clearable
            >
            </v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="data.last_name"
              :rules="nameRules"
              label="نام خانوادگی"
              required
              filled
              clearable
            >
            </v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="data.coordinate_mobile"
              :rules="numberRules"
              label=" تلفن همراه"
              required
              filled
              clearable
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
              v-model="data.coordinate_phone_number"
              label=" تلفن ثابت"
              filled
              clearable
            >
            </v-text-field>
          </v-col>  
          <v-col
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="data.address"
              :rules="addressRules"
              label="آدرس"
              required
              filled
              clearable
            >

            </v-text-field>
          </v-col>      
        </v-row>
        
          <v-radio-group
          v-model="data.gender"
          hide-details
          row
        >
        جنسیت
          <v-radio
            value="female"
            label="زن"
            ></v-radio>
          <v-radio
            value="male"
            label="مرد"
          ></v-radio>           
          </v-radio-group>
      </v-container>
    </v-form>
      </v-card>
    </div>
       </v-card>
      </v-main>
      <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
      <v-btn
          class="ma-2 mx-6 persianFont"
          color="#59CBB8"
          dark
          width="30%" 
          @click="submit"
        >
        ثبت و ادامه 
        </v-btn>
      </v-col>
    </v-footer>
    </v-app>
  </template>
  
  <script>


  export default {

    name: "InputForm",
    data() {
        return {
            data: {
                first_name: "",
                last_name: "",
                coordinate_mobile: null,
                coordinate_phone_number: null,
                region: "1",
                lat: null,
                lng: null,
                gender: null,
            },
            nameRules: [
                v => !!v || "پرکردن این فیلد ضروری است",
                v => (v && 3 <= v.length) || "نام باید شامل حداقل سه کاراکتر باشد",
            ],
            numberRules: [
                v => !!v || "پرکردن این فیلد ضروری است",
                v => (v && v.length == 11) || "شماره وارد شده صحیح نمی باشد",
            ],
            addressRules: [
                v => !!v || "پرکردن این فیلد ضروری است",
                v => (v && 3 <= v.length) || "آدرس باید شامل حداقل سه کاراکتر باشد",
            ],
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate();
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4" },
                body: JSON.stringify(this.data)
            };
            fetch("https://stage.achareh.ir/api/karfarmas/address", requestOptions)
                .then(async (response) => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.postId = data.id;
            })
                .catch(error => {
                this.errorMessage = error;
                console.error("There was an error!", error);
            });
        },
        change() {
            this.dialog = true;
        },
        print() {
            console.log(this.person);
        }
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