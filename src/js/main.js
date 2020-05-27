window.addEventListener('DOMContentLoaded', function() {
    // setMobileMenuMaxHeight();
    // moveAuctionBlocks();

    window.onresize = function(){
        // setMobileMenuMaxHeight();
        // slickInit();
        // moveAuctionBlocks();
    };

    // window.onload = function(){
    //     preload([
    //         template_url+'/static/images/loader-tail-spin.svg'
    //     ]);
    // };
        
    // window.addEventListener('DOMContentLoaded', function() {
    //     var btn = document.getElementById("cookie-alert-btn");
    //     btn.onclick = function(){
    //         var expiration_date = new Date();
    //         expiration_date.setFullYear( expiration_date.getFullYear() + 10 );
    //         cookie('cookie_got_it', '1', {path: "/", expires: expiration_date});
    //         document.getElementById("cookie-alert").remove();
    //     };
    // });
        
        

    // if (cookie('cookie_got_it') != 1){
    //     document.getElementById("cookie-alert").style.display("flex");
    // }

    // slickInit();

    // loaderShow();
    // loaderHide();

    var popupsCloseBtns = document.querySelectorAll(".popup .x");
    popupsCloseBtns.forEach(function(btn){
        btn.onclick = function(){
            showBodyScroll();
            this.closest(".popup").style.opacity = 0.01;
            setTimeout(function(){
                this.style.display = "none";
            }, 400);
        };
    });
    
});


var popupShow = function(el){
    hideBodyScroll();
    el.style.display = "flex";
    // TO DO: Make CSS transition for opacity!!!
    el.style.opacity = 1;
}

var loaderShow = function(){
    document.getElementById("loader").style.zIndex = 9999;
    document.getElementById("loader").style.opacity = 1;
}
var loaderHide = function(){
    document.getElementById("loader").style.opacity = 0;
}

var disableBodyScroll = function(){
    window.body_scroll_pos = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelector('body').style.overflowY = 'hidden';
}

var enableBodyScroll = function(){
    document.querySelector('body').style.overflowY = 'scroll';
    window.scrollTop = window.body_scroll_pos;
}


/* Preload some images: */
// var preload = function (imageArray, index) {
//     index = index || 0;
//     if (imageArray && imageArray.length > index) {
//         var img = new Image ();
//         img.onload = function() {
//             preload(imageArray, index + 1);
//         };
//         img.src = imageArray[index];
//     }
// };


// document.getElementById("menulink").onclick = function(){
//     document.getElementById("blog-categories-menulink").classList.remove("open");
//     document.getElementById("blog-categories-menu").classList.remove("open");
//     this.classList.toggle("open");
//     document.getElementById("menu").classList.toggle("open");
// };


var mobileMenuTopOffset = false;
// var viewportMinHeight = false; // This value will contain initial height of viewport when page is just loaded and top mobile browser panel (the one with address bar) is still displayed.
var setMobileMenuMaxHeight = function(){
    if (document.querySelector('body').innerWidth < 559){
        if (!mobileMenuTopOffset){
            mobileMenuTopOffset = parseFloat(document.getElementById("topbar").height) + parseFloat(document.getElementById("navbar").height); // mobile browser panel is about 70px
        }
        document.getElementById("menu").style.height = 'calc(100vh - ' + mobileMenuTopOffset + 'px)';
    }else{
        document.getElementById("menu").style.height = ''; // Remove inline "height" style
    }
};



var cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // NOTE Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = trim(cookies[i], " ");
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}
 
function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

var hideBodyScroll = function(){
    document.querySelector("body").style.overflowY = 'hidden';
    document.getElementById("navbar").style.opacity = 0;
    document.getElementById("content").style.opacity = 0;
    document.getElementById("footer").style.opacity = 0;
}

var showBodyScroll = function(){
    document.querySelector("body").style.overflowY = 'auto';
    document.getElementById("navbar").style.opacity = 1;
    document.getElementById("content").style.opacity = 1;
    document.getElementById("footer").style.opacity = 1;
}