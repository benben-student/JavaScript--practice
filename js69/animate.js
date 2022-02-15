function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft
        var temp = 10;
        temp = curent < target ? temp : -temp
        curent += temp
        if (Math.abs(target - current) > Math.abs(temp)) {
            element.style.left = current + 'px'
        } else {
            clearInterval(element.timeId)
            element.style.left = target + 'px'
        }
    }, 5)
}