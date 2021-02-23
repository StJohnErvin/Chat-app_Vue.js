<template>
  <div class="mt-4">

          
    <h2 > Private Chat App</h2>
    <van-form @submit="onSubmit">
      <div class="form-group my-3">
        <h4>Register</h4>

             <van-field
        name="name"
        label="Name"
          v-model="email"
          placeholder="Enter your name..."
          :rules="[{ required: true, message: 'name is required' }]"
          
        />
        <van-field
        name="email"
        label="Email"
          v-model="email"
          placeholder="Enter your email..."
          :rules="[{ required: true, message: 'email is required' }]"
          
        />
     
        <van-field
    v-model="password"
    type="password"
    name="Password"
    label="Password"
    placeholder="Password"
    :rules="[{ required: true, message: 'Password is required' }]"
  />
        <router-link :to="{ path: 'signup' }">
          <h6 class="mb-3" style="font-weight: 600">Create an account</h6>
        </router-link>

        <van-button
          type="primary"
            size="normal"
        >Register</van-button>
      </div>
    </van-form>
  </div>
</template>


<script>


export default {
  app: "Login",
  data() {
    return {
      name:"",
      email: "",
      password: ""
    }
    },
    methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
   };
  
  
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  margin: 0 auto;
  width: 80%;
  border: 1px solid rgb(0, 0, 0);
}
.detail-box {
  padding: 5px;
  border: 1px solid rgb(0, 0, 0);
  width: 400px;
  min-height: 250px;
  margin: 0 auto;
}
h2,
h4,
.van-field,
.van-button{
  color: dodgerblue;
  font-weight: 600;
}
</style>