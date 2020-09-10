Vue.component('wp-digital-clock', {
    props: ['date'],
    template: `
        <div class='time'>
            <span>{{numberFmt(date.getHours())}}</span><span class='delimiter'>:</span><span>{{numberFmt(date.getMinutes())}}</span><span class='delimiter'>:</span><span>{{numberFmt(date.getSeconds())}}</span>
        </div>
    `,
    methods: {
        /**
         * 2位数字格式化
         **/
        numberFmt: function (number) {
            var numberStr = number + '';
            if (numberStr.length < 2) {
                return "0" + numberStr;
            }
            return numberStr;
        }
    }
});