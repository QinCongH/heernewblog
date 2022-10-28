const copyText=async (text)=> {
    try {
      var copyInput = document.getElementById("COPY_INPUT");
      if (!copyInput) {
        copyInput = document.createElement("input");
        copyInput.setAttribute("id", "COPY_INPUT");
        copyInput.style.position = "fixed";
        copyInput.style.left = "-100%";
        copyInput.style.top = "0";
        copyInput.style.zIndex = -100;
        copyInput.style.opacity = 0;
        document.body.appendChild(copyInput);
      }
      copyInput.value = text;
      copyInput.focus();
      copyInput.select();
      // document.execCommand 可能会被废弃
      if (document.execCommand("copy")) {
        document.execCommand("copy");
      }
      copyInput.blur();
    } catch (error) {
      throw error;
    }
  }
  export default copyText