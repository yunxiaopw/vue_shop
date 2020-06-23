<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png"
             alt />
      </div>
      <!-- 表单 -->
      <v-form class="login_form"
              ref="form"
              v-model="valid"
              :lazy-validation="lazy">
        <v-text-field v-model="username"
                      :rules="usernameRules"
                      label="username"
                      required>
        </v-text-field>
        <v-text-field v-model="passwrod"
                      :rules="passwordRules"
                      label="password"
                      required>
        </v-text-field>
        <div class="my-2">
          <v-btn depressed
                 large
                 color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn depressed
                 large
                 color="primary">Primary</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: '',
    usernameRules: [
      v => !!v || '请输入用户名',
      v => v.length <= 10 || '长度在 3 到 12 个字符',
      v => v.length >= 3 || '长度在 3 到 12 个字符'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
}
</script>
<style lang="less" scoped>
.login_container {
  // background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  // background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    // background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      // background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
