<template>
  <v-app>
    <div>
      <v-app-bar
        color="white"
        dense
        style="padding-top: 10px; padding-bottom: 60px"
      >
        <a
          @click="refresh()"
          style="color: initial; padding-left: 100px; margin-right: 20px"
          ><v-toolbar-title><h1>Book</h1></v-toolbar-title></a
        >
        <a style="color: initial; margin-right: 20px"
          ><v-toolbar-title>สินค้าใหม่</v-toolbar-title></a
        >
        <a style="color: initial; margin-right: 20px"
          ><v-toolbar-title>สินค้าขายดี</v-toolbar-title></a
        >
        <a style="color: initial; margin-right: 20px"
          ><v-toolbar-title>สินค้าลดราคา</v-toolbar-title></a
        >
        <a style="color: initial; margin-right: 20px"
          ><v-toolbar-title>สินค้าแนะนำ</v-toolbar-title></a
        >

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="openCart()">
          <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <v-container>
      <div v-if="show_detail == false && cart == false && pay == false">
        <v-carousel v-model="model">
          <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-sheet :color="color" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">Slide {{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
      <br />

      <v-container v-if="show_detail == false && cart == false && pay == false">
        <div>
          <h3>สินค้าขายดี</h3>
          <v-container>
            <section>
              <v-carousel hide-delimiters>
                <v-carousel-item v-for="(value, i) in data_book" :key="i">
                  <a @click="detail(value)">
                    <v-row class="fill-height" align="center" justify="center">
                      <v-card height="150px" width="150px" align="center">
                        <v-img src="../assets/bookshow.png" />
                        <v-btn rounded outlined x-small> Add to cart </v-btn>
                        <div>{{ value.bookname }}</div>
                        <div style="text-decoration-line: line-through">
                          {{ value.max_price }}
                        </div>
                        <div>{{ value.price }}</div>
                      </v-card>
                    </v-row>
                  </a>
                </v-carousel-item>
              </v-carousel>
            </section>
          </v-container>
        </div>
      </v-container>
      <br />

      <v-container v-if="show_detail == false && cart == false && pay == false">
        <div>
          <h3>สินค้าแนะนำ</h3>
          <v-container>
            <section>
              <v-carousel hide-delimiters>
                <v-carousel-item v-for="(value, i) in data_book" :key="i">
                  <a @click="detail(value)">
                    <v-row class="fill-height" align="center" justify="center">
                      <v-card height="150px" width="150px" align="center">
                        <v-img src="../assets/bookshow.png" />
                        <v-btn rounded outlined x-small> Add to cart </v-btn>
                        <div>{{ value.bookname }}</div>
                        <div style="text-decoration-line: line-through">
                          {{ value.max_price }}
                        </div>
                        <div>{{ value.price }}</div>
                      </v-card>
                    </v-row>
                  </a>
                </v-carousel-item>
              </v-carousel>
            </section>
          </v-container>
        </div>
      </v-container>

      <v-container v-if="show_detail == true">
        <v-row>
          <v-col style="text-align: -webkit-center;">
            <v-img width="50%" src="../assets/bookshow.png" />
          </v-col>
          <v-col>
            <h1>{{ book_detail.bookname }}</h1>

            <div>ผู้เขียน : {{ book_detail.writer }}</div>
            <div>หมวดหมู่ : {{ book_detail.book_type }}</div>
            <div>ประเภทสินค้า : {{ book_detail.type }}</div>
            <v-row>
              <v-col cols="2" style="align-self: center">ราคา</v-col>
              <v-col style="align-self: center">
                <h1>THB{{ book_detail.price }}</h1>
              </v-col>
              <v-col style="align-self: center">
                <h3 style="text-decoration-line: line-through">
                  THB{{ book_detail.max_price }}
                </h3>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div>
                  <v-text-field
                    solo
                    type="number"
                    style="width: 100px"
                    v-model="count"
                  >
                  </v-text-field>
                </div>
              </v-col>
              <v-col>
                <div>
                  <v-btn
                    style="margin-right: 5px"
                    rounded
                    block
                    color="primary"
                    @click="add(book_detail)"
                    >ADD
                  </v-btn>
                </div>
              </v-col>
              <v-col>
                <v-btn color="warning" rounded block>wishlist</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-container v-if="cart == true && list != ''">
        <h1>ตะกร้าสินค้า</h1>

        <v-row>
          <v-col>
            <v-simple-table striped>
              <thead>
                <tr>
                  <th class="text-left">id</th>
                  <th class="text-left">สินค้า</th>
                  <th class="text-left">ราคา</th>
                  <th class="text-left">จำนวน</th>
                  <th class="text-left">ยอดรวม</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="(item, i) in list" :key="i">
              <td>{{ item.id }}</td>
              <td>{{ item.bookname }}</td>
              <td>{{ item.price }}</td>
              <td>{{ count }}</td>
              <td>{{ total }}</td>
            </tr> -->
                <tr>
                  <td>{{ list.id }}</td>
                  <td>
                    <v-img src="../assets/bookshow.png" width="20%" />{{
                      list.bookname
                    }}
                  </td>
                  <td>THB{{ list.price }}</td>
                  <td>{{ count }}</td>
                  <td>THB{{ total }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-col>

          <v-col>
            <v-card
              style="
                padding-left: 10px;
                padding-bottom: 10px;
                padding-right: 10px;
              "
            >
              <h3>สรุปคำสั่งซื้อ</h3>
              <div>ยอดรวม {{ total }}</div>
              <div>ค่าส่ง THB{{ shipping }}</div>
              <div>ยอดสุทธิ {{ total + shipping }}</div>
              <br />
              <v-btn color="primary" rounded block @click="payMoney()">ไปชำระเงิน</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container v-if="pay == true">
        <v-row>
          <v-col>
            <h1>ชำระเงิน</h1>
            <div>ที่อยู่ในการจัดส่ง</div>
            <br />

            <v-row>
              <v-col>
                <v-text-field
                  label="ชื่อ"
                  outlined
                  rounded
                  dense
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  label="นามสกุล"
                  outlined
                  rounded
                  dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-select
              outlined
              rounded
              dense
              :items="country"
              label="ประเทศ"
            ></v-select>
            <v-text-field
              label="ที่อยู่(บ้านเลขที่/หมู่บ้าน/หมู่ที่/ซอย/ถนน)"
              outlined
              rounded
              dense
            ></v-text-field>

            <v-row>
              <v-col>
                <v-text-field
                  label="แขวง/ตำบล"
                  outlined
                  rounded
                  dense
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  label="เขต/อำเภอ"
                  outlined
                  rounded
                  dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  label="จังหวัด"
                  outlined
                  rounded
                  dense
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  label="รหัสไปรษณีย์"
                  outlined
                  rounded
                  dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              label="เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)"
              type="number"
              outlined
              rounded
              dense
            ></v-text-field
            ><br />

            <div>เลือกขนส่ง</div>
            <br />

            <v-radio-group v-model="shipping" mandatory>
              <v-card height="100px" style="display: flex">
                <v-radio
                  style="padding-left: 10px"
                  label="Free Shipping"
                  :value="0"
                ></v-radio>
                <v-row style="padding-right: 10px">
                  <v-col style="text-align: right; align-self: center"
                    >THB0</v-col
                  ></v-row
                > </v-card
              ><br />
              <v-card height="100px" style="display: flex">
                <v-radio
                  style="padding-left: 10px"
                  label="Kerry Express"
                  :value="40"
                ></v-radio>
                <v-row style="padding-right: 10px">
                  <v-col style="text-align: right; align-self: center"
                    >THB40</v-col
                  ></v-row
                >
              </v-card>
            </v-radio-group>

            <div>วิธีการชำระเงิน</div>
            <br />

            <v-radio-group v-model="payment" mandatory>
              <v-card height="100px" style="display: flex">
                <v-radio
                  style="padding-left: 10px"
                  label="Cash"
                  value="radio-3"
                ></v-radio> </v-card
              ><br />
              <v-card height="100px" style="display: flex">
                <v-radio
                  style="padding-left: 10px"
                  label="Credit/Debits"
                  value="radio-4"
                ></v-radio>
              </v-card> </v-radio-group
          ></v-col>
          <v-col>
            <v-card
              style="
                padding-left: 10px;
                padding-bottom: 10px;
                padding-right: 10px;
                padding-top:10px;
              "
            >
              <h3>สรุปคำสั่งซื้อ</h3>
              <div>ยอดรวม {{ total }}</div>
              <div>ค่าส่ง THB{{ shipping }}</div>
              <div>ยอดสุทธิ {{ total + shipping }}</div>
              <br />
              <v-btn color="primary" rounded block @click="Radio()">ไปชำระเงิน</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "No3",
  data: function () {
    return {
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      data_book: [
        {
          id: 1,
          bookname: "ONE",
          max_price: 599,
          price: 499,
          writer: "I don't know",
          type: "book",
          book_type: "game",
        },
        {
          id: 2,
          bookname: "TWO",
          max_price: 599,
          price: 499,
          writer: "I don't know",
          type: "book",
          book_type: "manga",
        },
      ],
      book_detail: "",
      show_detail: false,
      cart: false,
      count: 1,
      //   list:[],
      list: "",
      total: "",
      shipping: 0,
      country: ["ประเทศไทย", "ลาว", "พม่า", "กัมภูชา"],
      pay:false,
      payment:"",
    };
  },
  mounted() {},
  methods: {
    detail(a) {
      this.book_detail = a;
      this.show_detail = true;
      console.log(a);
    },
    add(b) {
      this.total = this.count * b.price;
      //   this.list.push(b);
      this.list = b;
      this.cart = true;
      this.show_detail = false;
    },
    openCart() {
      this.cart = true;
    },
    payMoney(){
        this.pay = true;
        this.cart = false;
    },
    Radio(){
        console.log(this.shipping )
    },
    refresh() {
      window.location.reload();
    },
  },
};
</script>

