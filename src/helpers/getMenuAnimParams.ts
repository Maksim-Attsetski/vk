
export const getAnimateParams = (type: string): string => {
    if(window.innerWidth > 768) {
        if(type === 'init') return '-100px'

        return '-20px'
    } else {
        if(type === 'init') return '100px'

        return '-60px'
    }
}
