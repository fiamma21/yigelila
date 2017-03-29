/**
 * Created by Leslie on 2017/3/8.
 */
app

    .controller('home.ctrl', ['$scope', function ($scope) {

    }])
    //.controller('nav', ['$scope', 'save',function ($scope,save) {
    //
    //
    //}])
    .controller('list.ctrl', ['$scope', 'Book', function ($scope, Book) {
        $scope.bookList = Book.getList();
    }])
    .controller('detail.ctrl', ['$scope', '$routeParams', 'Book', '$location',function ($scope, $routeParams, Book,$location) {
        var id = $routeParams.id;
        $scope.bookInfo = Book.getOne(id);
        if (!$scope.bookInfo) {
            // 跳转到列表页
            $location.path('/list'); // 路由跳转
        }
        $scope.bookInfo.price = Book.getPrice(id)
    }])
    .controller('login.ctrl',['$scope','$http','User','$location','save',function($scope,$http,User,$location,save){
        $scope.show=function(){
            $location.path('/home');
        };
       $scope.send = function () {

            var  data= {username: $scope.username, password:$scope.password };
           var user=$scope.username;
           User.log(data)
             .then(function (res) {//then()方法是异步执行//就是当.then()前的方法执行完后再执行then()内部的程序
                                                                // 这样就避免了，数据没获取到等的问题
                             if(res.data.status){
                               alert('登陆成功');
                                 save.set('username',user);
                                // console.log(user)
                                 $location.path('/home');
                             }else{
                                 alert('您的用户名或密码错误!');
                             }
                            })
        }

    }])

    .controller('reg.ctrl',['$scope','$http','User','$location',function($scope,$http,User,$location){

        $scope.check=function(){


            User.check( $scope.username)
                .then(function(res){
                  alert(res.data.msg);
                    if(res.data.status){
                        alert(res.data.msg);
                        $location.path('/login')
                    }
                })
        }
        $scope.show=function(){
           $location.path('/home');
        };
        $scope.reg=function(){
            var  data= {username: $scope.username, password:$scope.password };
          User.reg(data)
              .then(function(res){
                  console.log(res.data);
                if(res.data){
                    alert("注册成功，请登录！")
                    $location.path('/login')
                }
              })

        }

    }])

