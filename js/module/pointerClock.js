Vue.component('wp-pointer-clock', {
    props: ['date'],
    template: `
        <div @mousedown='onMousedown' class='wp-pointer-clock'>
            
            <div class='hour-hand' :style="{transform: 'rotate(' + (date.getHours() * 15 - 90)+ 'deg) translate(0,-50%)'}"></div>
            <div class='minute-hand' :style="{transform: 'rotate(' + (date.getMinutes() * 6 - 90) + 'deg) translate(0,-50%)'}"></div>
            <div class='second-hand' :style="{transform: 'rotate(' + seconds + 'deg) translate(0,-50%)'}"></div>
            <div class='center'></div>
        </div>
    `,
    watch: {
        date: function (newValue) {
            this.seconds += 6;
        }
    },
    data: function () {
        return {
            seconds: this.date.getSeconds() * 6 - 90
        }
    },
    methods: {
        /**
         * 鼠标按下事件
         * @param {Event} e  按下事件
         */
        onMousedown: function (e) {
            //触发父级事件
            this.$emit('component-onmousedown', e, this.$el, 'pointerClock');
        }
    }
});