<template>
  <div class="modal-mask" v-show="isShowMessageBox" transition="modal">
      <div class="modal-confirm">
        <header class="c-modalCard__header">
          <h4 class="c-modalCard__title">{{ title }}</h4>
          <a role="button" class="c-modalCard__close" @click="cancel">
            <i class="i-remove"></i>
          </a>
        </header>
        <div class="c-modalCard__body">
          <div>
            {{ content }}
          </div>
          <div v-show="isShowInput" class="form-group" style="margin-top: 20px;">
            <div class="form-control">
              <input type="text" class="form-input" v-model="inputValue" placeholder="请输入内容">
            </div>
            <small class="form-help desc">{{ smalldesc }}</small>
          </div>
          <div v-show="isShowDatePick" class="form-group" style="margin-top: 20px;">
            <div>
              <date-picker v-model="selectedDates" :range="true"></date-picker>
            </div>
          </div>
        </div>
        <div class="confirm-btns">
          <footer class="c-modalCard__footer">
            <button type="button" class="btn btn--default" style="background: lightgrey;" @click="cancel">取 消</button>
            <button type="button" class="btn btn--primary" style="border-color: rgb(255,81,22);margin-left: 10px;" @click="confirm">确 定</button>
          </footer>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '标题'
            },
            content: {
                type: String,
                default: '这是弹框内容'
            },
            smalldesc: {
                type: String,
                default: '这是输入框描述'
            },
            isShowInput: false,
            isShowDatePick: false,
            inputValue: '',
            isShowCancelBtn: {
                type: Boolean,
                default: true
            },
            isShowConfimrBtn: {
                type: Boolean,
                default: false
            },
            cancelBtnText: {
                type: String,
                default: '取消'
            },
            confirmBtnText: {
                type: String,
                default: '确定'
            }
        },
        data () {
            return {
                selectedDates: new Date(),
                isShowMessageBox: false,
                resolve: '',
                reject: '',
                promise: '' // 保存promise对象
            };
        },
        methods: {
            // 确定,将promise断定为resolve状态
            confirm: function () {
                this.isShowMessageBox = false;
                if (this.isShowInput) {
                    this.resolve(this.inputValue);
                }else if(this.isShowDatePick){
                    this.resolve(this.selectedDates);
                } else {
                    this.resolve('confirm');
                }
                this.remove();
            },
            // 取消,将promise断定为reject状态
            cancel: function () {
                this.isShowMessageBox = false;
                this.reject('cancel');
                this.remove();
            },
            // 弹出messageBox,并创建promise对象
            showMsgBox: function () {
                this.isShowMessageBox = true;
                this.promise = new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                });
                // 返回promise对象
                return this.promise;
            },
            remove: function () {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy: function () {
                this.$destroy();
                document.body.removeChild(this.$el);
            }
        }
    };
</script>

<style scoped>
  .modal-mask{
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(55,55,55,.6);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-confirm{
    width: 600px;
    box-sizing: border-box;
    padding: 15px;
    background-color: #fff;
    border-radius: 6px;
  }
  .desc{
    margin-top: 20px;
    color: lightgrey;
  }
  @media only screen and (max-width: 640px) {
    .modal-confirm{
      width: 100%;
      margin: 0 20px;
      padding: 10px 20px;
    }
  }

  .modal-enter, .modal-leave {
    opacity: 0;
  }
  .modal-transition{
    transition: all .3s ease;
  }

  .modal-enter .modal-confirm,
  .modal-leave .modal-confirm {
    transform: scale(1.1);
  }
  .modal-transition{
    transition: all .3s ease;
  }
</style>
<!--
用法
open() {
        this.$msgBox.showMsgBox({
            title: '添加分类',
            content: '请填写分类名称',
            isShowInput: true
        }).then(async (val) => {
            // ...
        }).catch(() => {
            // ...
        });
},
-->