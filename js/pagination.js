Stringformat = function (string, obj) {
    var result = string;
    if (arguments.length > 1) {
        if (arguments.length == 2 && typeof (obj) == "object") {
            for (var key in obj) {
                if (obj[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, obj[key]);
                }
            }
        } else {
            for (var i = 1; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}


///实际使用时修改此代码
window.gotoPage = function (pageNum) {

    showPaginate(pageNum, pageSize, totalCount);
}

window.showPaginate = function (pageNum, pageSize, totalCount) {

        $(".am-pagination-prev").empty();
        $(".am-pagination-select-el").empty();
        $(".am-pagination-next").empty();

        var opts = jQuery.extend({
            pageNum: 0,
            PageSize: 10,
            link_to: "javascript:void(0)", //兼容
            //link_to: "#",
            prev_text: "上一页",
            next_text: "下一页",
            frist_text: "第一页",
            last_text: "最后一页",
            ellipse_text: "...",
            StartPageNum: 1, //从第0页开始的
            callback: function () {
                return false;
            }
        }, opts || {});

        var RowCounts = totalCount;

        opts.PageSize = pageSize == 0 ? 20 : pageSize;
        opts.CurrentPageNum = pageNum == undefined ? opts.StartPageNum : pageNum;
        opts.RowCounts = RowCounts ? RowCounts : 0;
        opts.endPageNum = (RowCounts / opts.PageSize);

        var endindex = parseInt(opts.endPageNum); //取整
        opts.endPageNum = opts.endPageNum - endindex > 0 ? endindex + 1 : endindex; //多1行都算一页

        opts.leftPageNum = Math.max(opts.StartPageNum, opts.CurrentPageNum - 5); //左边最多显示5页

        opts.rightPageNum = Math.min(opts.endPageNum, opts.CurrentPageNum + 5); //右边最多显示5页


        if ($(".am-pagination-select-el").data("changeBind") != true) {
            $(".am-pagination-select-el").change(function () {
                    var index = $(this).find(":selected").data("PageNum");
                    //if (index  == undefined) {
                    //    alert(999);
                    //} 
                    gotoPage(index);
                })
                .data("changeBind", true);
        }


        //$(".am-pagination-prev").append( Stringformat('<a href="javascript:gotoPage({StartPageNum})">{frist_text}</a> ',opts));
        if (opts.CurrentPageNum > opts.StartPageNum) {
            opts.TmpPageNum = opts.CurrentPageNum - 1;
            $(".am-pagination-prev").append(Stringformat('<a href="javascript:gotoPage({TmpPageNum})">{prev_text}</a>', opts));
        } else {
            $(".am-pagination-prev").append(Stringformat('<a href="javascript:void({TmpPageNum})">{prev_text}</a>', opts));
        }

        // 从开始到结束
        opts.TmpPageNum = opts.leftPageNum;
        while (opts.TmpPageNum < opts.rightPageNum) {
            var s = $(Stringformat('<option>{TmpPageNum}/{endPageNum}</option>', opts));
            s.data("PageNum", opts.TmpPageNum);
            $(".am-pagination-select-el").append(s);

            opts.TmpPageNum++;
        }

        //给当前页加样式数据
        $(".am-pagination-select-el").find("option").each(function () {
            var PageNum = $(this).data("PageNum");
            if (PageNum == opts.CurrentPageNum) {
                $(this).attr("selected", "selected");
            }
        });

        if (opts.CurrentPageNum < opts.endPageNum - 1) //-1 最后一页就不再下一页了
        {
            opts.TmpPageNum = opts.CurrentPageNum + 1;
            $(".am-pagination-next").append(Stringformat('<a href="javascript:gotoPage({TmpPageNum})">{next_text}</a>', opts));
        } else {
            $(".am-pagination-next").append(Stringformat('<a href="javascript:void({TmpPageNum})">{next_text}</a>', opts));
        }
        //$(".am-pagination-next").append(Stringformat('<a href="javascript:gotoPage({endPageNum})">{last_text}</a>',opts));



    }
    