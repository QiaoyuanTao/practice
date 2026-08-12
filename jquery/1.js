//等待所有dom对象解析完成
$(function () {
  //mock拦截请求
  Mock.mock("api/cart", "get", {
    code: 0,
    msg: "",
    "data|5-20": [
      {
        productName: "@csentence(5,15)",
        productUrl: "@image(120x90, #327854, #FFFFFF, jpg, imageTest)",
        "unitPrice|10-500.2": 0,
        "count|1-10": 0,
      },
    ],
  });
  //axios发送请求和接收响应

  axios.get("api/cart").then((resp) => {
    console.log(resp.data.data);
    const product = resp.data.data;

    //根据products将元素添加到页面中去
    //  <div class="item" data-id="1" data-price="599.00">
    //           <div class="check">
    //             <input type="checkbox" class="checkItem" name="checkItem" />
    //           </div>
    //           <div class="info">
    //             <img src="" alt="散热器" />
    //             <a href="#">
    //               酷冷至尊 冰神B360ARGB电脑散热器白色 台式主机水冷散热器
    //             </a>
    //           </div>
    //           <div class="price"><em>¥599.00</em></div>
    //           <div class="num">
    //             <a href="javascript:void(0)" class="decr">-</a>
    //             <input type="text" value="1" class="txt" />
    //             <a href="javascript:void(0)" class="incr">+</a>
    //           </div>
    //           <div class="sum"><em>¥599.00</em></div>
    //           <div class="del">
    //             <a href="javascript:void(0)" class="delete">删除</a>
    //           </div>
    //         </div>

    const html = product
      .map(
        (item) => `  
     <div class="item" data-id="1" data-price="${item.unitPrice}">
              <div class="check">
                <input type="checkbox" class="checkItem" name="checkItem" />
              </div>
              <div class="info">
                <img src="${item.productUrl}" alt=" ${item.productName}" />
                <a href="#">
                  ${item.productName}
                </a>
              </div>
              <div class="price"><em>¥${item.unitPrice}</em></div>
              <div class="num">
                <a href="javascript:void(0)" class="decr">-</a>
                <input type="text" value="${item.count}" class="txt" />
                <a href="javascript:void(0)" class="incr">+</a>
              </div>
              <div class="sum"><em>¥${item.unitPrice * item.count}</em></div>
              <div class="del">
                <a href="javascript:void(0)" class="delete">删除</a>
              </div>
            </div>`,
      )
      .join("");

    $(".cart-list").html(html);
    //设置汇总信息 价格和总商品数
    function setTotal() {
      let sum = 0;
      //获取选中项中的单价和总价
      const checked = $(".checkItem:checked").each(function (i) {
        const container = $(this).parents(".item");
        const price = +container.attr("data-price");
        const total = +container.find(".sum em").text().slice(1);
        sum += total;
      });
      $("#selectedCount").text(checked.length);
      $("#totalPrice").text(`¥${sum.toFixed(2)}`);
    }

    //设置全选
    $(".checkAll").change(function () {
      $(":checkbox").not($(this)).prop("checked", $(this).prop("checked"));
      setTotal();
    });
    $(".checkItem").change(function () {
      const allChecked =
        $(".checkItem").length === $(".checkItem:checked").length;
      $(".checkAll").prop("checked", allChecked);
      setTotal();
    });

    //减少商品数量 同时更新单件商品总价格
    $(".decr").click(function (e) {
      e.preventDefault();

      $(this)
        .next(".txt")
        .prop("value", function () {
          const currentValue = +this.value;
          if (currentValue > 1) {
            const newValue = currentValue - 1;
            const singlePrice = +$(this)
              .parent(".num")
              .prev(".price")
              .find("em")
              .text()
              .slice(1);
            $(this)
              .parents(".item")
              .find(".sum em")
              .text(`¥${(singlePrice * newValue).toFixed(2)}`);

            $(this)
              .prev(".decr")
              .prop("disabled", newValue === 1);
            return newValue;
          } else {
            return this.value;
          }
        });
      setTotal();
    });

    //增加商品数量 同时更新单件商品总价格
    $(".incr").click(function (e) {
      e.preventDefault();
      $(this)
        .prev(".txt")
        .prop("value", function () {
          const newValue = +this.value + 1;
          const singlePrice = +$(this)
            .parent(".num")
            .prev(".price")
            .find("em")
            .text()
            .slice(1);
          $(this)
            .parents(".item")
            .find(".sum em")
            .text(`¥${(singlePrice * newValue).toFixed(2)}`);

          $(this).prev(".decr").prop("disabled", false);
          return newValue;
        });
      setTotal();
    });

    //删除商品操作
    $(".delete").click(function (e) {
      $(this).parents(".item").remove();
      setTotal();
    });

    //删除选中的商品
    $("#deleteSelected").click(function (e) {
      e.preventDefault();
      $(".checkItem:checked").parents(".item").remove();
    });

    //清空购物车
    $("#clearCart").click(function (e) {
      e.preventDefault();
      $(".checkItem").parents(".item").remove();
      setTotal();
    });
  });
});
