// src/mixins/windowResize.js
export const windowResizeMixin = {
    data() {
        return {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth
            this.windowHeight = window.innerHeight
            this.$emit('resize', {
                width: this.windowWidth,
                height: this.windowHeight
            })
        }
    },
    computed: {
        isMobile() {
            return this.windowWidth < 768
        },
        isTablet() {
            return this.windowWidth >= 768 && this.windowWidth < 1024
        },
        isDesktop() {
            return this.windowWidth >= 1024
        },
        screenType() {
            if (this.isMobile) return 'mobile'
            if (this.isTablet) return 'tablet'
            return 'desktop'
        }
    }
}