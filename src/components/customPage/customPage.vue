<template>
    <nav class="c-pagination c-pagination--bordered">
        <span class="c-pagination__item" :class="{'disabled': current == 1}" @click="setCurrent(1)"><a
                href="javascript:;"> 首页 </a></span>
        <span class="c-pagination__item" v-for="p in grouplist" :class="{'is-active': current == p.val}"
              @click="setCurrent(p.val)"><a href="javascript:;"> {{ p.text }} </a></span>
        <span class="c-pagination__item" :class="{'disabled': current == page}" @click="setCurrent(current + 1)"><a
                href="javascript:;"> 下一页 </a></span>
    </nav>
</template>

<script>
    export default {
        name: 'custom-page',
        data() {
            return {
                current: this.currentPage
            }
        },
        props: {
            total: {// 数据总条数
                // type: Number,
                default: 0
            },
            currentPage: {// 当前页码
                type: Number,
                default: 1
            },
            pagegroup: {// 分页条数
                type: Number,
                default: 10,
                coerce: function (v) {
                    v = v > 0 ? v : 5;
                    return v % 2 === 1 ? v : v + 1;
                }
            }
        },
        computed: {
            page: function () { // 总页数
                return Math.ceil(this.total);
            },
            grouplist: function () { // 获取分页页码
                var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2),
                    center = this.current;
                if (len <= this.pagegroup) {
                    while (len--) {
                        temp.push({text: this.page - len, val: this.page - len});
                    }
                    ;
                    return temp;
                }
                while (len--) {
                    temp.push(this.page - len);
                }
                ;
                var idx = temp.indexOf(center);
                (idx < count) && (center = center + count - idx);
                (this.current > this.page - count) && (center = this.page - count);
                temp = temp.splice(center - count - 1, this.pagegroup);
                do {
                    var t = temp.shift();
                    list.push({
                        text: t,
                        val: t
                    });
                } while (temp.length);
                if (this.page > this.pagegroup) {
                    (this.current > count + 1) && list.unshift({
                        text: '...',
                        val: list[0].val - 1
                    }) && list.unshift({text: '1', val: 1});
                    (this.current < this.page - count) && list.push({
                        text: '...',
                        val: list[list.length - 1].val + 1
                    }) && list.push({text: this.total, val: this.total});
                }
                return list;
            }
        },
        methods: {
            setCurrent: function (idx) {
                if (this.current != idx && idx > 0 && idx < this.page + 1) {
                    this.current = idx;
                    this.$emit('pagechange', this.current);
                }
            },
            resetCurrent: function (idx) {
                this.current = idx
            }
        }
    }
</script>

<style scoped>
    .c-pagination__item a {
        color: black;
    }

    .c-pagination__item.is-active {
        background: #7872ff;
        border-color: #7872ff;
        color: white;
    }

    .c-pagination__item.is-active a {
        color: white;
    }

    a {
        display: block;
        min-width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    a:hover {
        background: #dddee1;
    }
</style>
