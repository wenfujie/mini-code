/*
 * @Date: 2022-10
 * @LastEditors: wfj
 * @LastEditTime: 2022-10
 * @Description:
 */

module.exports = function (resouce) {
  if (this.cacheable) this.cacheable();

  let json = resouce;
  if (typeof resouce === "string") {
    json = JSON.parse(json);
  }

  // 给所有的json添加 user 字段
  json.user = "i am Batman";

  json = JSON.stringify(json);

  return `module.exports = ${json}`;
};
