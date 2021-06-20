<template>
  <v-app>
    <v-container>
      <v-card style="margin-top: 100px"
        ><br />
        <div>
          <h2>Domain values and table management</h2>
        </div>
        <div>
          <label
            >* เป็นฐานข้อมูลที่ใช้โมเดลเชิงสัมพันธ์ (Relational Database Model)
            โดยจะมีการเชื่อมความสัมพันธ์ระหว่างตาราง โดยจะมีการกำหนด Primary key
            ของแต่ละตาราง และในการเชื่อมแต่ละตารางเข้าด้วยกัน จะใช้ Foreign Key
            ในกาเชื่อกับตารางที่ต้องการ โดยในการเชื่อมตาราง จะมีอยู่ 3 แบบ คือ
            1.one to one 2.one to many และ 3.many to many
          </label>
        </div>
        <div>
          <label
            >** ปัญหาที่เคยเกิด คือ การกำหนดความสัมพันธ์ระหว่าง many to many
            ไม่สามารถทำได้โดยตรง
          </label>
        </div>
        <div>
          <label
            >*** วิธีแก้ปัญหา คือ เปลี่ยนจาก many to many เป็นแบบ one to many
            โดยวิธีการทำ คือต้อง เพิ่มตารางขึ้นมาอีก 1 ตาราง
            เป็นตารางตรงกลางระหว่าง 2 ตารางที่เราจะทำการเชื่อม ให้เป็นแบบ one to
            many กับทั้งสองตารางนั้น
          </label>
        </div>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "No2",
  data: function () {
    return {};
  },
  methods: {},
};
</script>



