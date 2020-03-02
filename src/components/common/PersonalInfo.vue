<template>
  <div>
    <div class="c-people-title clearfix">
      <div class="c-info-name">个人信息设定</div>
      <div class="c-info-editor" @click="editor">编辑</div>
    </div>
    <div>
    <el-row :gutter="10" style="margin: 0;" v-show="!dialogEditor">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" style="padding: 0;">
        <div class="grid-content bg-purple clearfix lists">
          <div class="item clearfix">
            <div class="c-personal">
              <div class="c-avatar"><img src="@/assets/images/c-avatar.png" alt=""></div>
            </div>
            <div class="c-people-data">
              <div class="clearfix">
                <div class="c-people-name" style="margin-right: 15px;font-size: 20px;">{{userInfo.TrueName}}</div>
                <div class="c-people-icon"><i class="iconfont">&#xe668;</i>已认证</div>
              </div>
              <div class="clearfix" style="line-height: 35px;">
                <div class="c-people-sex" style="margin-right: 20px;">性别：<span>{{userInfo.sex}}</span></div>
                <div class="c-people-age">年龄：<span>{{getAge}}岁</span></div>
              </div>
              <div>联系方式：<span>{{userInfo.tel}}</span></div>
              <div>电子邮箱：<span>{{userInfo.email}}</span></div>
              <div>证书名称：<span>人力资源管理师二级</span></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" style="padding: 0;">
        <div class="grid-content bg-purple clearfix lists" style="padding: 32px 0;">
            <div class="c-recommend-info">
              <div class="invite">分销邀请码</div>
              <div class="code">{{userInfo.othersinvitecode}}</div>
              <div class="hint">您的下级在注册时也可填写邀请码</div>
            </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" style="padding: 0;">
        <div class="grid-content bg-purple clearfix lists" style="padding: 40px 0 42px 0;">
          <div class="c-grade-info">
            <div class="clearfix">
              <div class="c-grade">
                <div class="c-current-grade"><img src="@/assets/images/c-current-grade.png" alt=""></div>
                <div class="c-current-vip">普通会员</div>
              </div>
              <div class="c-invite-odds">
                <div class="c-count-odds">
                  <div style="margin: 5px 0;">{{jpcount}}</div>
                  <div>参与人数</div>
                </div>
                <div class="c-pass-odds">
                  <div style="margin: 5px 0;">{{dmprobability}}</div>
                  <div>通过率</div>
                </div>
                <div class="c-make-odds">
                  <div style="margin: 5px 0;">{{tgprobability}}</div>
                  <div>到面率</div>
                </div>
              </div>
            </div>
            <div class="c-hierarchy">
              <img src="@/assets/images/c-hierarchy.png" alt="">
              <div class="slider-wrap">
               <div class="slider-bg"></div>
               <div class="slider-point"></div>
               <div class="slider-before"></div>
              </div>
            </div>

          </div>
        </div>
      </el-col>
    </el-row>
    
    <!-- 编辑 -->

    <div  v-show="dialogEditor" style="padding: 20px;background: #fff;">
      <div style="border: 1px solid #FEAF1D; padding: 30px 0; background: #FAFAFA;">
                      
        <el-form label-width="80px" :model="editorForm" >
          <el-row>
            <el-col :span="10" style="padding: 0;margin-left: 100px;min-width: 480px;">
              <div style="float: left;margin-right: 38px;">
                  <div style="width:100px;"><img src="@/assets/images/c-avatar.png" alt="" style="width: 100%;"></div>
                  <div style="color: #FEB12C;text-align: center; line-height: 30px;">修改<span style="font-size: 12px;color: #ccc;margin: 0 5px;">|</span>删除</div>
              </div>
              <div style="float: left;">
                <div class="clearfix">
                  <div class="content-input">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="editorForm.name"></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="clearfix">
                  <div class="content-input">
                    <el-form-item label="性别" prop="sex">
                      <el-radio-group v-model="editorForm.sex">
                        <el-radio-button label="男" ></el-radio-button>
                        <el-radio-button label="女"></el-radio-button>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                </div>
                <div class="clearfix">
                  <div class="content-input">
                    <el-form-item label="出生日期" prop="time">
                        <el-date-picker v-model="editorForm.time" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                  </div>
                </div>
                <div class="clearfix">
                  <div class="content-input">
                    <el-form-item label="联系方式" prop="contact">
                      <el-input v-model="editorForm.contact"></el-input>
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
              </div>
            </el-col>

            
            <el-col  :span="8" style="padding: 0;margin-left: 100px;min-width: 480px;">
              <div class="clearfix">
                <div class="content-input">
                  <el-form-item label="邀请码" prop="credential">
                    <el-input v-model="editorForm.credential"></el-input>
                  </el-form-item>’
                  <el-form-item label="证书名称" prop="credential">
                    <el-input v-model="editorForm.credential"></el-input>
                  </el-form-item>
                </div>
              </div>
   <!-- :http-request="uploadImg" -->
              <div class="clearfix">
                <div class="content-input">
                  <el-form-item label="证件附件" prop="password" style="float: left;" >
                     <el-upload
                      class="avatar-uploader"
                      v-loading="loading"
                      :show-file-list="false"
                      :multiple="false"
                   
                      action="http://192.168.0.182/api/user/PostUpload"
                      :data="lists"
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

          <div style="width: 210px;margin:30px auto;">
            <el-button style="background: #FEAD1C; color: #fff;width: 95px; border: none;" @click="dialogEditor = false">保存</el-button>
            <el-button style="color: #959595;width: 95px;" @click="dialogEditor = false">取消</el-button>
          </div>
        </el-form>
      </div>
    </div> 

    </div>
  </div>
</template>

<script>
import { personInfo, personEarnings,uploadImg } from "@/api/serve"
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"
export default {
  name: 'PersonalInfo',
  data () {
    return {
      loading: false,
      imageUrl: '',
      dialogVisible: false,
      dialogEditor: false,
      imageUrl: '',
      editorForm: {
        name: '陈小姐姐',
        sex: '',
        time: '1996-02-14',
        contact: '123545266325',
        email: '21235412@qq.com',
        credential: '蓝桥杯二等奖',
        imageUrl: '',
      },
      userInfo: {
        sex: '', // 性别
        loginuser: '', // 用户名
        TrueName: '', // 真实姓名
        tel: '',  // 联系电话
        create: '', // 出生日期
        eamil: '', // 邮箱
        userAge: ''
      },
      lists: {
        guid: '', //token
        tel: 'tel',  // 加密得电话号码
      },
      jpcount: '', //参与人数
      dmprobability: '', // 通过
      tgprobability: '' // 到面
    }
  },

  created () {
    this.lists.guid = getToken()
    this.lists.tel = getTel(this.lists.tel)
    this.personInfo()
    this.personEarnings()
  },

  computed: {
    getAge () {
      var d = new Date()
      return d.getFullYear() - new Date(this.userInfo.create).getFullYear() - (d.getMonth() < new Date(this.userInfo.create).getMonth() || (d.getMonth() == new Date(this.userInfo.create).getMonth() && d.getDate() < new Date(this.userInfo.create).getDate()) ? 1 : 0)
    } 
  },

  methods: {
    personInfo () {

      personInfo(this.lists).then( res => {
        this.userInfo = res.data.data
      })
    },

    // 通过
    personEarnings () {
      personEarnings(this.lists).then( res => {
        this.jpcount = res.data.data.jpcount
        this.dmprobability = res.data.data.dmprobability
        this.tgprobability = res.data.data.tgprobability
      })
    },

    // 上传
    // uploadImg () {
    //   console.log(this.lists)
    //   uploadImg(this.lists).then( res => {
    //     console.log(res)
    //   })
    // },
    

    // 编辑
    editor () {
      this.dialogEditor = true
    },
  }
}
</script>

<style scoped> 

.c-people-title {
  border-bottom: 1px solid #EEEEEE;
  background: #fff;
  
}

.c-info-name {
  float: left;
  line-height: 46px;
  font-size: 15px;
  margin-left: 10px;

}

.c-info-editor {
  float: right;
  line-height: 46px;
  font-size: 15px;
  margin-right: 20px;
  color: #FEB12C;
  cursor: pointer;
}

.c-info-name::before {
  display: inline-block;
  content: '';
  width: 3px;
  height: 15px;
  background: #FEAD1C;
  margin-right: 10px;
  border-radius: 15px;
}
.lists {
  background: #fff;
  padding: 50px 0;
}

.item {
  width: 420px;
  margin: auto;
}

.c-people-data,.c-personal,.c-people-name,.c-people-icon,.c-people-sex {
  float: left;
}

.c-people-data {
  margin-left: 20px;
  line-height: 28px;
}

.c-people-icon {
  color: #18C52A;
}

.c-recommend-info {
  width: 363px;
  height: 184px;
  margin: auto;
  background: url("../../assets/images/c-bg.png") no-repeat;
}

.invite {
  padding-top: 60px;
  font-size: 20px;
  padding-left: 120px;
  width: 330px;
  text-align: center;
  box-sizing: border-box;
  line-height: 38px;
}

.code {
  padding-left: 120px;
  width: 330px;
  text-align: center;
  box-sizing: border-box;
  color: #FE5536;
  font-size: 24px;
  letter-spacing: 2px;
}

.hint {
  width: 360px;
  text-align: center;
  margin-top: 28px;
  color: #959595;
}

.c-grade-info {
    width: 380px;
    margin: 0 auto;
    position: relative;
}


.c-grade,.c-invite-odds {
  float: left;
  margin-left: 20px;

}

.c-pass-odds {
  float: left;
  width: 83px;
  height: 60px;
  background: url("../../assets/images/c-pass.png") no-repeat;
  text-align: center;
  color: #fff;
  padding-top: 6px;
  box-sizing: border-box;
  margin-right: 12px;
}

.c-make-odds {
  float: left;
  width: 83px;
  height: 60px;
  background: url("../../assets/images/c-make.png") no-repeat;
  text-align: center;
  color: #fff;
  padding-top: 6px;
  box-sizing: border-box;
}

.c-count-odds {
  float: left;
  width: 83px;
  height: 60px;
  background: url("../../assets/images/c-people-count.png") no-repeat;
  text-align: center;
  color: #fff;
  padding-top: 6px;
  box-sizing: border-box;
  margin-right: 12px;
  background-size: 100%;
}

.c-current-grade{
  margin-left: 3px;
}


.c-current-vip {
  color: #89B4E6;
  font-size: 14px;
  text-align: center;
  line-height: 26px;
}

.c-hierarchy {
  margin-top: 20px;
  margin-left: 30px;
  position: relative;
  z-index: 3;
}

.c-hierarchy img {
  position: relative;
  z-index: 3;
}

  .slider-wrap {
    position: absolute;
    top: 20px;
    left: 3px;
    width: 100%;
    height: 4px;
    z-index: 0;
  }

  .slider-bg {
    position: absolute;
    top: 0;
    width: 300px;
    height: 4px;
    background: #CCCCCC;
  }

  .slider-before {
    position: absolute;
    top: 0;
    width: 50px;
    height: 4px;
    background: #FEAD1C;
  }

  .slider-point {
    position: absolute;
    top: -2px;
    left: 50px;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #FEAD1C;
  }


/* 2020.2.11 */

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

  /* /deep/ .el-upload {
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

  .el-icon-plus {
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
  } */

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