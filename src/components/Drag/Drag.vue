<template>
  <div id="drag"></div>
</template>

<script>
(function () {
  function Code() {}
  Code.prototype = {
    addEvent: function () {
      var that = this;
      var oDiv = document.getElementById("drag"); //与html要拖拽的元素id名相同
      oDiv.onmousedown = function (ev) {
        var ev = ev || event;
        var distanceX = ev.clientX - this.offsetLeft;
        var distanceY = ev.clientY - this.offsetTop;
        if (oDiv.setCapture) {
          oDiv.setCapture();
        }
        document.onmousemove = function (ev) {
          var ev = ev || event;
          oDiv.style.left = ev.clientX - distanceX + "px";
          oDiv.style.top = ev.clientY - distanceY + "px";
        };
        document.onmouseup = function (ev) {
          document.onmousemove = document.onmouseup = null;
          if (oDiv.releaseCapture) {
            oDiv.releaseCapture();
          }
        };
      };
    },

    init: function () {
      var that = this;
      window.onload = that.addEvent;
    },
  };
  new Code().init();
})();
</script>

<style lang="less" scoped>
#drag {
  width: 100px;
  height: 100px;
  background: #000;
  position: fixed;
  color: #fff;
  cursor: pointer;
  outline: none;
}
</style>
