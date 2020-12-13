/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  
    let array = str.split(/[ ,]+/);
    let minV = +array[0];
    let maxV = minV;
    for (let i = 0; i < array.length; i++) {
      let x = +array[i];
      if (x < minV) minV = x;
      if (x > maxV) maxV = x;
    }
    return {min: minV, max: maxV};
  
}
