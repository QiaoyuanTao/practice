//用户登录和注册的表单项验证通用代码

/**
 * 对某一个表单项进行验证的构造函数
 */
class FieldValidator {
  /**
   * 构造器
   * @param {String} txtId 文本框ID
   * @param {Function} validatorFunc 验证规则函数
   */

  constructor(textId, validatorFunc) {
    this.input = $("#" + textId);
    this.p = this.input.nextElementSibling;
    this.validatorFunc = validatorFunc;
    this.input.onblur = () => {
      this.validate();
    };
  }

  /**
   *
   * @returns 验证 成功返回true 失败返回false
   */
  async validate() {
    const err = await this.validatorFunc(this.input.value);
    if (err) {
      this.p.innerText = err;
      return false;
    } else {
      this.p.textContent = "";
      return true;
    }
  }
  /**
   * 对传入的验证器做统一的验证，如果所有验证均通过返回 true 否则返回 false
   * @param {FieldValidator[]} validators
   */
  static async validate(...validators) {
    const proms = validators.map((r) => r.validate());
    const result = await Promise.all(proms);
    return result.every((r) => r);
  }
}
