<template>
  <div>
    <div class="c_header_nav_jz">
      <div class="c_jzheaader clearfix">
        <div class="c_jzlogo">
          <img src="@/assets/images/perfect-logo.png" alt="">
        </div>
        <div class="c_talent_soon">专注人才快招！</div>
      </div>
    </div>
    <div class="c_talent_w" style="border: 1px solid #ccc;">
      <div class="container">
        <div class="perfect">
          完善个人信息<span class="hint">（个人注册信息为猎头的唯一凭证，请按如实填写）</span>
        </div>
      </div>
      <div style="padding: 20px;background: #fff;">
        <div style="padding: 30px 0; ">
          <el-form label-width="80px" :model="editorForm">
            <el-row>
              <el-col :span="10" style="padding: 0;margin-left: 100px">
                <div style="float: left;margin-right: 38px;">
                    <div style="width:100px;"><img src="@/assets/images/c-avatar.png" alt="" style="width: 100%;"></div>
                    <div style="color: #FEB12C;text-align: center; line-height: 30px;">修改<span style="font-size: 12px;color: #ccc;margin: 0 5px;">|</span>删除</div>
                </div>
                <div style="float: left;">
                  <div class="clearfix">
                    <div class="content-input">
                      <el-form-item label="用户名" prop="loginuser">
                          <el-input v-model="editorForm.loginuser"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="content-input">
                      <el-form-item label="真实姓名" prop="TrueName">
                          <el-input v-model="editorForm.TrueName"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="content-input">
                      <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="editorForm.sex">
                          <el-radio-button label="1" >男</el-radio-button>
                          <el-radio-button label="2">女</el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="content-input">
                      <el-form-item label="出生日期" prop="create ">
                          <el-date-picker v-model="editorForm.create " type="date" placeholder="选择日期"></el-date-picker>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="content-input">
                      <el-form-item label="联系方式" prop="xtel">
                        <el-input v-model="editorForm.xtel"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="content-input">
                      <el-form-item label="电子邮箱" prop="email">
                        <el-input v-model="editorForm.email"></el-input>
                      </el-form-item>
                    </div>
                  </div>

                  <div class="clearfix">
                    <div class="content-input">
                      <el-form-item label="邀请码" prop="othersinvitecode">
                        <el-input v-model="editorForm.othersinvitecode"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </div>
              </el-col>
              
              <el-col  :span="10" style="padding: 0;margin-left: 60px;">
                <div class="clearfix">
                  <div class="content-input">
                    <el-form-item label="证书名称" prop="imagename">
                      <el-input v-model="editorForm.imagename"></el-input>
                    </el-form-item>
                  </div>
                </div>

                <div class="clearfix">
                  <div class="icon"><img src="" alt=""></div>
                  <div class="content-input">
                    <el-form-item label="证件附件" prop="password" style="float: left;">
                         <el-upload
                          class="avatar-uploader"
                          :show-file-list="false"
                          :multiple="false"
                          action="/api/user/PostUpload"
                          :data="{guid: editorForm.guid,tel: editorForm.tel}"
                          :on-change="handleChange"
                          :http-request="uploadFile"
                        >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>


                    </el-form-item>
                    <el-form-item label="示例" prop="password" style="float: left;">
                      <div style="width: 140px; margin-left: 20px; padding:15px 25px;;box-sizing: border-box;float:left; border: 2px solid #E9E9E9;line-height:0;">
                        <img width="100%" src="@/assets/images/upload-img.png" alt="">
                      </div>
                    </el-form-item>
                  </div>
                </div>
              </el-col>
            </el-row>

            <div style="width: 150px;margin:60px auto 0 auto;">
              <el-button style="background: #FEAD1C; color: #fff;width:100%; border: none;"  @click="saveInfo">保存</el-button>
            </div>
          </el-form>
        </div>
      </div>

    </div>
    <Footer style="position: fixed;bottom: 0; left: 0;width: 100%;"></Footer>
  </div>
</template>

<script>
import { perInfo2,uploadImg } from "@/api/serve"
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"

import Footer from "@/components/footer/Footer"
export default {
  name: "Register",
  components: {
    Footer
  },
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      dialogEditor: false,
      imageUrl: '',
      editorForm: {
        sex: '', // 性别
        othersinvitecode: '', // 邀请码
        loginuser : '', // 昵称 用户名
        TrueName:'',  // 真实姓名
        xtel: '',  // 联系电话
        create: '', // 生日
        email: '', // 邮箱
        guid: '', //token
        tel: 'tel', // 加密手机号
        imageid: '' // 图片id
      },
      imageUrl: '', // 证书名称
    }
  },
  created () {
    this.editorForm.guid = getToken()
    this.editorForm.tel = getTel(this.editorForm.tel)
    console.log(this.editorForm.tel)
  },
  methods: {
    // 发送请求完善信息
    saveInfo () {
      console.log("456465")
      perInfo2(this.editorForm).then ( res => {
        if (res.data.Message == 'success') {
          this.$router.push("./home")
        }
      })
    },

      // 上传文件，获取文件流
    handleChange(file) {
      this.file = file.raw
    },
    // 上传
    uploadFile () {
      this.formData = new FormData()
      this.formData.append('file', this.file)
      this.formData.append('guid', this.editorForm.guid)
      this.formData.append('tel', this.editorForm.tel)
      // this.formData.append('imagename', this.editorForm.imagename)
      uploadImg(this.formData).then(res => {
        console.log(res)
        this.imageUrl = res.data.url
        this.editorForm.imageid = res.data.imageid
        console.log(this.editorForm.imageid)
      })
    },
  }
}
</script>


<style scoped>
  .c_header_nav_jz {
    width: 100%;
    background: #000;
  }

  .c_jzheaader {
    width: 1200px;
    margin: auto;
  }

  .c_jzlogo {
    width: 92px;
    float: left;
    box-sizing: border-box;
    line-height: 50px;
  }
  .c_jzlogo img {
    width: 100%;
    vertical-align: middle;
  }

  .c_talent_soon {
    float: left;
    font-size: 18px;
    color: #fff;
    margin-left: 12px;
    line-height: 50px;
  }


      
  .c_talent_w {
    width: 1200px;
    margin: 30px auto;
  }

  .container {
    width: 100%;
  }

  .perfect {
    line-height: 50px;
    font-size: 16px;
    color: #333;
    background: #F1F5FE;
    padding: 0 20px;
  }

  .hint {
    color: #ff5777;
  }

  .el-form-item {
    margin-bottom: 0;
  }

  /deep/ .el-input__inner {
    height: 30px;
    line-height: 30px;
  }

  /deep/ .el-radio-button__inner {
    width: 110px;
    height: 30px;
    line-height: 30px;
    padding: 0;
  }

 /deep/ .el-upload--picture-card {
    background-color: #fff;
    border: 2px solid #E9E9E9;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 140px;
    height: 160px;
    line-height: 160px;
    vertical-align: top;
 }

 .el-upload--picture-card i {
    font-size: 50px;
    color: #FEAD1C;
  }

  /deep/ .el-form-item__content div{
    float: left;
  }

   /deep/  .el-input__icon {
     line-height: 30px;
  }

  /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #FFF;
    background-color: #FEAD1C;
    border-color: #FEAD1C;
    box-shadow: -1px 0 0 0 #FEAD1C;
  }

  /deep/  .el-date-table td.current:not(.disabled) span {
    color: #FFF;
    background-color: #FEAD1C;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 140px;
    height: 160px;
    line-height: 160px;
    text-align: center;
  }
  .avatar {
    width: 140px;
    height: 160px;
    display: block;
  }
</style>