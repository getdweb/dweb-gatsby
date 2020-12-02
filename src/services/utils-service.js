export default class UtilsService {

    throttle(func, ms) {

        let isThrottled = false,
          savedArgs,
          savedThis;
      
        function wrapper() {
      
          if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
          }
      
          func.apply(this, arguments); // (1)
      
          isThrottled = true;
      
          setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
              wrapper.apply(savedThis, savedArgs);
              savedArgs = savedThis = null;
            }
          }, ms);
        }
      
        return wrapper;
    }

    debounce(func, wait, AT_THE_BEGINNING, AT_THE_END) {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                // clearTimeout(timeout);
                timeout = null;
                if (AT_THE_END) func.apply(context, args); // This function is executed at the END of timeout
            };
            if (!timeout) {
                if (AT_THE_BEGINNING) func.apply(context, args); // This function is executed at the BEGINNING of timeout
                timeout = setTimeout(later, wait);
            }

        };
    };

    getOffset(el) {
        if (typeof window === `undefined`) return {left: 0, top: 0};
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }
}