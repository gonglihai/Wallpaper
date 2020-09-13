Vue.component('wp-digital-clock', {
    props: ['date'],
    template: `
        <div @mousedown='onMousedown' class='wp-digital-clock'>
            <span>{{numberFmt(date.getHours())}}</span><span class='delimiter'>:</span><span>{{numberFmt(date.getMinutes())}}</span><span class='delimiter'>:</span><span>{{numberFmt(date.getSeconds())}}</span>
        </div>
    `,
    methods: {
        /**
         * 2位数字格式化
         * @param {Number} number  小时,分钟,秒数
         **/
        numberFmt: function (number) {
            var numberStr = number + '';
            if (numberStr.length < 2) {
                return "0" + numberStr;
            }
            return numberStr;
        },
        /**
         * 鼠标按下事件
         * @param {Event} e  按下事件
         */
        onMousedown: function (e) {
            //触发父级事件
            this.$emit('component-onmousedown', e, this.$el, 'digitalClock');
        }
    }
});