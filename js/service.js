/**
 * Created by Leslie on 2017/3/8.
 */
/**
 * Book服务
 */
app.service('Book', [function () {
    // 数据源
    var bookList = [
        {'id': 1, 'name': '荷叶边金丝绒连衣裙', 'price': 369, sale: '12', "img":'image/a.jpg'},
        {'id': 2, 'name': '欧根纱礼服裙', 'price': 285, sale: '6', "img":'image/b.jpg'},
        {'id': 3, 'name': '蝴蝶结修身礼服裙', 'price': 199, sale: '4', "img":'image/c.jpg'},
        {'id': 4, 'name': '网纱度假连衣裙', 'price': 467, sale: '1', "img":'image/d.jpg'},
        {'id': 5, 'name': '复古修身蕾丝打底裙', 'price': 288, sale: '33', "img":'image/e.jpg'},
        {'id': 6, 'name': '名媛宴会两件套', 'price': 599, sale: '5', "img":'image/f.jpg'},
        {'id': 7, 'name': '重工刺绣敬酒裙', 'price': 178, sale: '2', "img":'image/g.jpg'},
        {'id': 8, 'name': '条纹印花礼服裙', 'price': 225, sale: '34', "img":'image/h.jpg'},
        {'id': 9, 'name': '甜美瘦身礼服裙', 'price': 389, sale: '22', "img":'image/i.jpg'},
        {'id': 10, 'name': '雪纺绣花钉珠连衣裙', 'price': 259, sale: '19', "img":'image/j.jpg'}
    ];
    var bookPrice = [
        {'id':1, price: 198.99},
        {'id':2, price: 298.99},
        {'id':3, price: 398.99},
        {'id':4, price: 498.99},
        {'id':5, price: 598.99},
        {'id':6, price: 698.99},
        {'id':7, price: 798.99},
        {'id':8, price: 898.99},
        {'id':9, price: 798.99},
        {'id':10, price: 898.99},
    ];
    // 1. 获取书本的列表页信息
    this.getList = function () {
        // ajax -> 后台 -> mysql 获取
        return bookList;
    }
    // 2. 通过id获取书本的详细信息
    this.getOne = function (id) {
        if(id){
            for(i in bookList){
                if(id==bookList[i].id){
                    return bookList[i];
                }
            }
        }
        return false;
    }
    // 3. 通过id获取书本价格
    this.getPrice = function (id) {
        if(id){
            for(i in bookPrice){
                if(id == bookPrice[i].id){
                    return bookPrice[i].price;
                }
            }
        }
        return false;
    }
}]);


app.factory('User',['$http',function($http){
    return{
        log :function (user) {
                                            //php中$_GET会获取?后的键值对
                                           // 用来判断到底需要做什么事,这样的话一个接口可以做许多事,写在一个php里,if($_GET['action']==login)就做登陆的事情,反之同理
                   return  $http.post('login.php', $.param(user));//如果写在服务里就把这句话return 出去就好,实际上就是把promise弹出去,调用此方法获得一个promise,在控制器里判断返回值
          },
        reg:function(user){

            return  $http.post('reg.php', $.param(user));//如果写在服务里就把这句话return 出去就好,在控制器里判断返回值

        },

        check:function(user){
            return  $http.post('login.php?action=check', $.param(user));
        }
    }
}]);

app.factory('save',['$window',function($window){
    return{
        set:function(key,value){
            $window.localStorage[key]=value;
        },
        get:function(key,defaultValue){
            return $window.localStorage[key]||defaultValue;
        },
        setObject:function(key,value){
            $window.localStorage[key]=JSON.stringify(value);
        } ,
        getObject:function(key){
           return  JSON.parse($window.localStorage[key]||'{ }');
        }
    }
}]);


