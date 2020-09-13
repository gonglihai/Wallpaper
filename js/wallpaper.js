var app = new Vue({
    el: '#app',
    data: {
        wallpaperSrc: 'https://book.glh.red/BingWallpaper/today',   //bing壁纸地址
        date: new Date(),
        pointerClock: {
            left: '540px',
            top: '20px',
            zIndex: 1
        },
        digitalClock: {
            left: '20px',
            top: '20px',
            zIndex: 2
        },
        calendar: {
            left: '20px',
            top: '187px',
            zIndex: 3
        }
    },
    mounted: function () {
        this.timer();
    },
    methods: {
        /**
         * 定时器
         **/
        timer: function () {
            var that = this;
            setInterval(function () {
                that.date = new Date();
            }, 1000);
        },
        /**
         * 子组件鼠标按下事件处理
         * @param {Event} e  事件
         * @param {Element} element 元素 
         * @param {String} styleName 样式key
         */
        onMousedown: function (e, element, styleName) {
            var componentNames = ['pointerClock', 'digitalClock', 'calendar'];
            var length = componentNames.length;
            if (app[styleName].zIndex != length) {
                componentNames.splice(componentNames.indexOf(styleName), 1);
                for (var i = 0; i < componentNames.length; i++) {
                    if (app[componentNames[i]].zIndex >= 1) {
                        app[componentNames[i]].zIndex--;
                    }
                }
                app[styleName].zIndex = length;
            }
            var drag = element;
            var diffX = e.clientX - drag.offsetLeft;
            var diffY = e.clientY - drag.offsetTop;
            //鼠标移动
            document.onmousemove = function (event) {
                var moveX = event.clientX - diffX;
                var moveY = event.clientY - diffY;
                if (moveX < 0) {
                    moveX = 0;
                } else if (moveX > window.innerWidth - drag.offsetWidth) {
                    moveX = window.innerWidth - drag.offsetWidth;
                }
                if (moveY < 0) {
                    moveY = 0;
                } else if (moveY > window.innerHeight - drag.offsetHeight) {
                    moveY = window.innerHeight - drag.offsetHeight;
                }
                app[styleName].left = moveX + 'px';
                app[styleName].top = moveY + 'px';
            }
            //鼠标抬起
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    },
    computed: {

    }
})