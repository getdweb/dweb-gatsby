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
        if (typeof (window.pageYOffset) == 'number') {
            //Netscape compliant
            this._scrollY = window.pageYOffset;
            this._scrollX = window.pageXOffset;
        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            //DOM compliant
            this._scrollY = document.body.scrollTop;
            this._scrollX = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            //IE6 standards compliant mode
            this._scrollY = document.documentElement.scrollTop;
            this._scrollX = document.documentElement.scrollLeft;
        }
    }

    restoreX() {
        window.scrollTo(this._scrollX, 0);
    }

    restoreY() {
        window.scrollTo(0, this._scrollY);
    }

    restoreXY() {
        window.scrollTo(this._scrollX, this._scrollY);
    }

}
