<template>
  <div class="login">
    <div class="login-screen">
      <div class="app-title">
        <p>登录</p>
        <div class="line"></div>
      </div>
      <div class="login-form">
        <div class="control-group">
          <input
            onkeyup="this.value=this.value.replace([a-z0-9]+(?:\.{0,1}[\w|-]+)*@[\w|-]+\.[a-z]{2,}(?:\.{0,1}[a-z]+)*,'')"
            type="email"
            class="login-field"
            v-model="email"
            placeholder="email"
            id="login-name"
          />
          <label class="login-field-icon fui-user" for="login-name"></label>
        </div>

        <div class="control-group">
          <input
            type="password"
            class="login-field"
            v-model="password"
            placeholder="password"
            id="login-pass"
          />
          <label class="login-field-icon fui-lock" for="login-pass"></label>
        </div>

        <a class="btn btn-primary btn-large btn-block" @click="submit">login</a>
        <a class="login-link">Lost your password?</a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onBeforeUpdate,
  getCurrentInstance,
  onMounted,
  reactive,
} from "vue";
export default defineComponent({
  setup() {
    // 处理登录
    const email = ref("");
    const password = ref("");
    const submit=()=>{
        console.log(email.value,password.value)
    }
    return {
      email,
      password,
      submit
    };
  },
});
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

.login {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #16161487;
}
.login-screen {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.app-title {
  text-align: center;
  color: #777;
  font-weight: 400;
  margin-bottom: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  //   .line {
  //     width: 70%;
  //     margin: auto;
  //     padding-bottom: 1px;
  //     margin: 2px 0px;
  //     background: #fff;
  // }
}

.login-form {
  text-align: center;
}
.control-group {
  margin-bottom: 10px;
}

input {
  text-align: center;
  background-color: #ecf0f1;
  border: 2px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 200;
  padding: 10px 0;
  width: 250px;
  transition: border 0.5s;
}

input:focus {
  border: 2px solid #8199a9;
  box-shadow: none;
}

.btn {
  border: 2px solid transparent;
  background: #5e6366;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 250px;
  margin: 0 auto;
}

.btn:hover {
  background-color: #8199a9;
}

.login-link {
  font-size: 12px;
  color: #444;
  display: block;
  margin-top: 12px;
}
</style>
