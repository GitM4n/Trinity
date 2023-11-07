export default {
    data() {
        return {
           device: '',
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize(){
            const winWidth = window.innerWidth;
            if(winWidth < 269){
                this.device = 'notShow'
            }
            else if(winWidth <= 768){
                this.device = 'mobile'
            }else if (winWidth <= 1024){
                this.device = 'tablet'
            }else{
                this.device = 'desktop'
            }

            this.$emit('winResized', this.device)
        }
    },
}   