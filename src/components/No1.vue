<template>
  <v-app>
    <v-container>
      <!-- input -->
      <v-form>
        <h1>1.1</h1>
        <v-container>
          <v-row style="justify-content: center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                label="Last name"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <div
            style="text-align: center"
            v-if="firstname != '' && lastname != ''"
          >
            <v-btn color="primary" @click="show(firstname, lastname)">
              show
            </v-btn>
          </div>
          <div style="text-align: center" v-else>
            <v-btn disabled> show </v-btn>
          </div>
        </v-container>
      </v-form>

      <!-- 1.1 show -->
      <div v-if="show_output != ''"><h1>1.2</h1></div>
      <div style="text-align: center" v-if="show_output != ''">
        <v-text-field
          style="text-align-last: center"
          readonly
          :value="show_output"
          id="myInput"
        />
        <!-- 1.2 copy -->
        <v-btn depressed color="primary" @click="copy()"> copy </v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "No1",
  data: function () {
    return {
      firstname: "",
      lastname: "",
      show_output: "",
    };
  },
  methods: {
    show(fname, lname) {
      // console.log(fname,lname)

      if (fname == "Shippop") {
        this.show_output = "Best Online Shipping Platform";
      } else {
        this.show_output = "Hello Shippop, My name is " + fname + " " + lname;
      }
    },
    copy() {
      var copyText = document.getElementById("myInput");
      copyText.select();
      document.execCommand("copy");
      alert("Copy the text: " + copyText.value);
    },
  },
};
</script>

