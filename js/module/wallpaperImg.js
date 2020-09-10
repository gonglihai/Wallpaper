Vue.component('wp-wallpaper-img', {
    props: ['date', 'src'],
    template: `
        <transition name="wallpaper">
            <img v-show='show' :src='imgSrc' @load="imgOnLoad" draggable="false" />
        </transition>
    `,
    data: function () {
        return {
            imgSrc: this.src,           //组件内图片图片地址
            show: false,                //是否显示
            oldDay: this.date.getDay()  //老的天
        }
    },
    watch: {
        /**
         * 当date更新时
         * @param {Date} newValue date的新值 
         */
        date: function (newValue) {
            var newDay = newValue.getDay();
            //当 当前天 不等于 老的天 且 当前分钟大于5时 重加载壁纸
            if (this.oldDay != newDay) {
                if (newValue.getMinutes() > 5) {
                    this.oldDay = newDay;
                    this.reload();
                }
            }
        }
    },
    methods: {
        /**
         * img标签加载完事件
         **/
        imgOnLoad: function () {
            this.show = true;
        },
        /**
         * 重新加载壁纸
         */
        reload: function () {
            this.show = false;
            this.imgSrc = this.src + "?" + new Date().getTime();
        }
    }
});