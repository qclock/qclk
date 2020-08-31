
function isTouchEvent (event) {
    const { type } = event;
    return type === 'touchmove' || type === 'touchstart' || type === 'touchend';
}

/**
 *
 *
 * @param {any} radians
 * @returns
 */
export function deg (radians) {
    return radians * 180 / Math.PI;
}

/**
 *
 *
 * @param {Object} {left, top, width, height, pageX, pageY}
 * @returns {Number}
 */
export function calculateTouchAngle ({ left, top, width, height, pageX, pageY }) {
    const centerX = Math.round(left + width / 2);
    const centerY = Math.round(top + height / 2);
    const A = pageX - centerX;
    const B = centerY - pageY;
    const C = Math.sqrt((Math.pow(A, 2) + Math.pow(B, 2)));

    let angle = 0;

    if (A > 0) {
        angle = deg(Math.asin(B * 1/C));
    }
    else {
        angle = 180 - deg(Math.acos(A * -1/C));
    }

    if (B < 0 && A < 0) {
        angle = 360 - angle;
    }
    else if (B < 0) {
        angle = 360 + angle;
    }

    return angle;
}

/**
 *
 *
 * @param {DOMEvent} event
 * @param {Function} callback
 */
export function getTouchAngle (event, callback) {
    const { currentTarget, pageX, pageY } = event;
    const { top, left, width, height } = currentTarget.getBoundingClientRect();

    const offsetTop = top + window.scrollY;
    const offsetLeft = left + window.scrollX;

    if (isTouchEvent(event)) {
        for (let touch of event.changedTouches) {
            const { pageX, pageY } = touch;
            let angle = calculateTouchAngle({
                top: offsetTop, left: offsetLeft, width, height, pageX, pageY
            });

            callback(angle);
        }
    }
    else {
        let angle = calculateTouchAngle({
            top: offsetTop, left: offsetLeft, width, height, pageX, pageY
        });

        callback(angle);
    }
}

/**
 *
 *
 * @param {Number} angle
 * @returns {Number}
 */
export function rotateAngle90 (angle) {

    if (angle < 0) {
        angle = 360 + angle;
    }

    let rotated = angle + 90;

    if (rotated > 360) {
        rotated = rotated - 360;
    }
    if (rotated < 0) {
        rotated = 360 + rotated;
    }

    return Math.floor(rotated);
}

/**
 *
 *
 * @param {any} angle
 * @returns
 */
export function rotateAngle90Back (angle) {
    if (angle < 0) {
        angle = 360 + angle;
    }

    let rotated = angle - 90;

    if (rotated > 360) {
        rotated = rotated - 360;
    }
    if (rotated < 0) {
        rotated = 360 + rotated;
    }

    return Math.floor(rotated);
}