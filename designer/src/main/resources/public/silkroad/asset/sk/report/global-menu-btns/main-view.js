define(["dialog","report/global-menu-btns/component-menu-template","report/global-menu-btns/main-model"],function(a,b,c){return Backbone.View.extend({initialize:function(){this.model=new c},componentMenu:function(){return b.render()},shiftMenu:function(a){var b=$(a.target).parent().attr("id"),c=$(".global-menus").not("#"+b);c.hide();var d=$(".comp-menu").find("#"+b);"none"==d.css("display")?d.show():d.hide()},chanceTheme:function(a){var b="",c=$(a.target),d=window.dataInsight.main.id;b=-1!=c.attr("class").indexOf("j-skin-btn")?c.attr("id"):c.parent().attr("id"),this.model.getSkinType(d,b),$(".link-skin").attr("href","/silkroad/asset/"+b+"/css/-di-product-debug.css"),$(".skin-menu").hide()},referenceLine:function(){var b=$(".j-guide-line"),c=b.length;0==c?a.warning("未添加组件，或未找到参考线请添加组件并重试"):b.is(":visible")?(b.hide(),a.alert("参考线已关闭，再次点击启用。")):(b.show(),a.alert("参考线已打开，再次点击关闭。"))}})});