var app = new Vue({
    el: '#app',
    data: {
        wallpaperSrc: 'https://book.glh.red/BingWallpaper/today',   //bing壁纸地址
        date: new Date()
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
        }
    },
    computed: {

    }
})