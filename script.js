const container = document.querySelector('.container');
const botol = container.querySelectorAll('.botol');


const btl = botol.forEach((item, i) => {
  item.addEventListener('click', function btlfirst(e) {
    const color = item.querySelectorAll('.color');
    const colorLength = color.length;
    const salmonColor = color[colorLength - 1].style.backgroundColor == 'salmon';
    const redColor = color[colorLength - 1].style.backgroundColor == 'red';
    if (salmonColor) {
      e.stopImmediatePropagation();
      this.removeEventListener('click', btlfirst);
      document.onclick = function(k) {
        const targetColor = k.target.parentElement.querySelectorAll('.color');
        const targetColorLength = targetColor.length;
        const targetNullColor = targetColor[targetColorLength - 1].style.backgroundColor == '';
        const targetSalmonColor = targetColor[targetColorLength - 1].style.backgroundColor == 'salmon';
        if (targetSalmonColor || targetNullColor) {
        item.style.animation ='botol 2s';
        setTimeout(function () {
          targetColor[targetColorLength - 4].style.backgroundColor = 'salmon';
          color[colorLength - 1].style.backgroundColor = '';
        }, 2000);
        }
      }
    }
  });
});
