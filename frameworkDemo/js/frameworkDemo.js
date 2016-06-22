/***
 * Script对象，所有对象的父类
 * 1、objectId为改对象的id，用来获取该对象
 * 2、对象初始化的x坐标
 * 3、对象初始化的y坐标
 * @param objectId
 * @param x
 * @param y
 */
function script(objectId, x, y) {

	//位置参数
	this.x = x;
	this.y = y;
	//尺寸参数
	this.width;
	this.height;
	//是否显示参数
	this.isDisplay;

	//用于内部函数的调用内部的参数
	var _this = this;

	//一些涉及到的对象
	this.objectId = objectId;
	this.objectHander;
	this.parentScript;

	/**
	 * 设置位置参数
	 * 1、对象的x坐标
	 * 2、对象的y坐标
	 * @param x
	 * @param y
	 */
	script.prototype.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	}
	/**
	 * 取得位置数组
	 * @returns {Array}
	 */
	script.prototype.getPosition = function() {
		var tmp = this.x + ',' + this.y;
		return tmp.split(",");
	}
	/**
	 * 设置尺寸参数
	 * 1、对象的宽度
	 * 2、对象的高度
	 * @param width
	 * @param height
	 */
	script.prototype.setSize = function(width, height) {
		this.width = width;
		this.height = height;
	}
	/**
	 * 取得尺寸数组
	 * @returns {Array}
	 */
	script.prototype.getSize = function() {
		var tmp = this.width + ',' + this.height;
		return tmp.split(",");
	}
	/***
	 * 显示一个对象，在父节点的上
	 * 1、父节点的元素，可为id或者元素本身
	 * 2、是否显示对象
	 * @param parent
	 * @param isDisplay
	 */
	script.prototype.display = function(parent, isDisplay) {
		this.isDisplay = isDisplay;
		if(this.isDisplay) {
			this.objectHander = window.document.createElement("div");
			this.objectHander.id = this.objectId;
			this.parentScript = parent;
				if(this.parentScript != null) {
					this.objectHander.style.position = "absolute";
					this.objectHander.style.left = this.x + "px";
					this.objectHander.style.top = this.y + "px";
					this.objectHander.style.width = this.width + "px";
					this.objectHander.style.height = this.height + "px";
					//边框测试
					this.objectHander.style.borderWidth = "1px";
					this.objectHander.style.borderStyle = "solid";
					this.objectHander.style.borderColor = "gray";
					this.parentScript.appendChild(this.objectHander);
					this.objectHander.style.display = "block";
				}
		}
	}
	/**
	 * 1、2、对象移动移动到的位置
	 * 3、对象移动的间隔时间
	 * @param x
	 * @param y
	 * @param interval
	 */
	script.prototype.moveTo = function(x, y, interval){
		var s = interval/1000;
		var speedX = ((this.x - x)/s) >= 0 ? ((this.x - x)/s) : ((x - this.x)/s);
		var speedY = ((this.y - y)/s) >= 0 ? ((this.y - y)/s) : ((y - this.y)/s);
		var moveId = setInterval(function () {
			if(_this.x != x && _this.y != y) {
				if(_this.x < x || _this.y < y) {
					_this.objectHander.style.left = (speedX += _this.x) + "px";
					_this.objectHander.style.top = (speedY += _this.y) + "px";
				} else {
					_this.objectHander.style.left = (_this.x -= speedX) + "px";
					_this.objectHander.style.top = (_this.y -=speedY) + "px";
				}
			} else {
				window.console.log("in 3");
				clearInterval(moveId);
			}
		},100);
	}
}

//生成
window.onload = function() {
	//初始化承载的容器
	var container = document.getElementById("container");
	//显示容器
	container.style.display = "block";
	//初始化画布
	var canvas = new script("canvas" , 0, 0);
	//设置画布的大小
	canvas.setSize(500, 500);
	//显示对象
	canvas.display(container, true);
	//移动尝试
	//canvas.moveTo(150,200, 5000);

	//初始化移动对象
	var player = new script("player" , 0, 0);
	//设置对象的大小
	player.setSize(100, 100);
	//显示对象
	player.display(canvas.objectHander, false);

}