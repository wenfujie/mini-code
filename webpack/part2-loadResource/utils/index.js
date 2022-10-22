/*
 * @Date: 2022-10
 * @LastEditors: wfj
 * @LastEditTime: 2022-10
 * @Description: 
 */

function genImgDomToBody() {
  const imgDom = document.createElement('img')
  imgDom.style.width = '100px'
  imgDom.style.height = '100px'
  imgDom.src = require('../../mock/img/lx.jpeg').default

  document.body.appendChild(imgDom)
}

module.exports = {
  genImgDomToBody
}