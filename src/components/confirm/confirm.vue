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
            <small class="desc">{{ smalldesc }}</small>
          </div>
        </div>
        <div class="confirm-btns">
          <footer class="c-modalCard__footer">
            <button type="button" class="btn btn--default" style="background: lightgrey;" @click="cancel">取 消</button>
            <button type="button" class="btn btn--primary" @click="confirm">确 定</button>
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
                default: '弹框内容'
            },
            smalldesc: {
                type: String,
                default: '输入框描述'
            },
            isShowInput: false,
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
    display: block;
    margin-top: 15px;
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
  .c-modalCard__header {
    position: relative;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #e1e1e1;
  }
  .c-modalCard__title {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0%;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    min-width: 0;
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    max-width: 100%;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .c-modalCard__close {
    font-size: 22px;
    line-height: 1;
    opacity: 0.75;
    cursor: pointer;
  }
  .c-modalCard__body {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 16px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
  }

  .c-modalCard__close {
    font-size: 22px;
    line-height: 1;
    opacity: 0.75;
    cursor: pointer;
  }
  .i-remove {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    outline: none;
    cursor: pointer;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    opacity: 0.5;
    color: #000;
  }

  .i-remove:before, .i-remove:after {
    background-color: currentColor;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    margin-left: -25%;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 50%;
  }

  .i-remove:before {
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .i-remove:after {
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .form-control {
    position: relative;
    margin-right: 15px;
  }

  .form-group {
    margin-bottom: 16px;
  }
  .form-input {
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    border: 1px solid #DFE3E9;
    border-radius: 3px;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .form-input:focus {
    outline: none;
    border-color: #7872ff;
  }

  .c-modalCard__footer {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 16px;
    border-top: 1px solid #e1e1e1;
    text-align: right;
  }

  .btn {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #0073AA;
    height: 34px;
    min-width: 34px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    background: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .btn--default {
    color: #333333;
    border-color: #ddd;
    background-color: #fff;
  }

  .btn--primary {
    color: #fff;
    border-color: #7872ff;
    background-color: #7872ff;
    margin-left: 20px;
  }
</style>
