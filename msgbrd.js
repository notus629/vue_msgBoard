/**
 * Created by Gene on 2017/4/30.
 */
$(function(){
    var vm = new Vue({
        el: '#box',
        data: {
            items: [],
            username: '',
            age: '',
            nowIndex: -2,
            modelTitle: "确认删除",
        },
        methods: {
            clickDelete: function(n){
                this.nowIndex = n;
                this.modelTitle = "确认删除该条数据吗?";
            },
            clickDeleteAll: function(){
                this.nowIndex = -1;
                this.modelTitle = '确认删除所有数据吗?'
            },
            addData: function(){
                if(this.username != '' && this.age != ''){
                    this.items.push({'username':this.username, 'age':this.age});
                    this.username = '';
                    this.age = '';
                }
            },
            deleteData: function(n){
                if(n >= 0){
                    this.items.splice(n, 1);
                } else if (n == -1){
                    this.items = [];
                }

            }
        }
    });
});