define(["url"],function(a){return Backbone.Model.extend({loadDataSourcesList:function(){var b=this;$.ajax({url:a.loadDsgroupList(),success:function(a){b.set("dataSourcesList",a.data)}})},loadDsGroupActive:function(){var b=this;$.ajax({url:a.loadDsGroupActive(),success:function(a){b.set("activeDataSourcesList",a.data)}})},deleteDataSources:function(b,c){var d=this;$.ajax({url:a.deleteDataSources(b,c),type:"DELETE",success:function(){d.loadDataSourcesList()}})},loadTables:function(b,c,d){$.ajax({url:a.loadTables(b,c),success:function(a){d(a.data)}})},addDsGroup:function(b,c){$.ajax({url:a.addDsGroup(),type:"POST",data:{name:b},success:function(a){c(a.data.id)}})},editDsGroup:function(b,c,d){$.ajax({url:a.editDsGroup(b),type:"POST",data:{groupName:c},success:function(){d()}})},delDsGroup:function(b,c){$.ajax({url:a.editDsGroup(b),type:"DELETE",success:function(){c()}})},changeDataSourceActive:function(b,c,d){$.ajax({url:a.changeDsActive(b,c),type:"POST",success:function(){d&&d()}})}})});