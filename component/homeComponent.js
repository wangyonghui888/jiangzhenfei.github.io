var homeApp=angular.module('homeApp',[]);
homeApp.component('homeComponent',{
	templateUrl:'component/home.html',
	controller:['$scope','$state','$stateParams',function($scope,$state,$stateParams){//$scope可以不写，不过在ng1.2前习惯写了
		//注意组件内不再用$scope.people表示，而用this，
		//同时在组建的html中要用$ctrl.people.name代表这个作用域中的对象people.name,例如
		//<td>{{$ctrl.people.name}}</td>
		//当然这些数据都是要从后台获取的，这里为了方便演示
		this.names=['fei','long','wode']
		this.people={
			name:'江振飞',
			age:25,
			where:'安徽',
			id:341021199202108397
		};


		//同样的效果，都可以拿到地址栏的参数
		//两种传参数的方法
		//<a ui-sref = "index({age:18})">
		//<a ng-href="#/user/18">
		console.log($stateParams)
		console.log($state.params)

		//$state.go('class',{classId:333})//直接跳转到另一个路由
		//后面是如何传参数的设置
	}]
})