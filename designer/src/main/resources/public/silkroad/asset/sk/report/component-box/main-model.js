define(["report/component-box/components/table-config","report/component-box/components/chart-config","report/component-box/components/calendar-config","report/component-box/components/liteolap-config","report/component-box/components/form-config","report/component-box/components/select-config","report/component-box/components/text-config","report/component-box/components/h-button-config","report/component-box/components/ecui-input-tree-config","report/component-box/components/cascade-select-config","report/component-box/components/plane-table-config"],function(a,b,c,d,e,f,g,h,i,j,k){var l="snpt";return Backbone.Model.extend({url:"reports/",initialize:function(){},config:{defaultJson:{desc:"查询条件||多维表格",diKey:"DEPICT",clzDefs:[{clzKey:"OLAP_TABLE",dataOpt:{emptyHTML:"未查询到相关数据"}},{clzKey:"ECUI_SELECT",dataOpt:{optionSize:10}},{clzKey:"ECUI_MULTI_SELECT",dataOpt:{optionSize:10}}],entityDefs:[{id:l,clzType:"SNIPPET"}]},defaultVm:'<div data-o_o-di="'+l+'" class="di-o_o-body"></div>',global:"",componentList:[{id:"2",caption:"数据展示组件",items:[a,b,c,f,d,g,h,i,j,k]}],formModel:e},getComponentData:function(a){for(var b,c=this.config.componentList,d=0,e=c.length;e>d;d++){b=c[d].items;for(var f=0,g=b.length;g>f;f++)if(b[f].type==a)return b[f]}}})});