// 1.任意参数的加法运算
		function add(){
		   var sum = 0
		   for(var i=0;i<arguments.length;i++){
		       if(!isNaN(arguments[i])){
		         sum += parseFloat(arguments[i])
		       }
		   }
		   return sum
		}
		console.log(add(1,2))
		console.log(add(1,2，3,4,5,6))


// 2.闭包
		var name = "cynthia"
		var obj = {
		    name : "wuqian",
		    sex : "girl",
		    getName : function(){
		         return this.name
		    } 
		}
		console.log(obj.getName()) //wuqian
		console.log(name)  //cynthai



// 3.调用对象字面量里的方法
		var cyn = {
		    name : "wuqian",
		    sex : "girl",
		    Add : function(){
			    var sum = 0
			    for(var i=0;i<arguments.length;i++){
			       if(!isNaN(arguments[i])){
			         sum += parseFloat(arguments[i])        
			       }
			    }
			    return sum
			}  
		};
		cyn.say = function(){
			return "给对象字面量添加方法"
		}
		cyn.socre = "给对象字面量添加变量"

		console.log(cyn.Add(100,300))  //400
        console.log(cyn.say())  //给对象字面量添加方法
        console.log(cyn.socre)  //给对象字面量添加变量
