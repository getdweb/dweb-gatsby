export default class ScrollService {

    _scrollX = 0;
    _scrollY = 0;

    getX() {
        return this._scrollX;
    }
    getY() {
        return this._scrollY;
    }

    saveScroll() {
        const coords = this.getScroll();
        this._scrollX = coords.x;
        this._scrollY = coords.y;
    }

    getScroll() {
        if (typeof window === `undefined`) return;
        let scrollX = 0;
        let scrollY = 0;
        if (typeof (window.pageYOffset) == 'number') {
            //Netscape compliant
            scrollY = window.pageYOffset;
            scrollX = window.pageXOffset;
        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            //DOM compliant
            scrollY = document.body.scrollTop;
            scrollX = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            //IE6 standards compliant mode
            scrollY = document.documentElement.scrollTop;
            scrollX = document.documentElement.scrollLeft;
        }
        return {x: scrollX, y: scrollY};
    }

    restoreX() {
        if (typeof window === `undefined`) return;
        window.scrollTo(this._scrollX, 0);
    }

    restoreY() {
        if (typeof window === `undefined`) return;
        window.scrollTo(0, this._scrollY);
    }

    restoreXY() {
        if (typeof window === `undefined`) return;
        window.scrollTo(this._scrollX, this._scrollY);
    }

}
