tinymce.create("tinymce.plugins.WPDialogs",{init:function(e,i){tinymce.create("tinymce.WPWindowManager:tinymce.InlineWindowManager",{WPWindowManager:function(e){this.parent(e)},open:function(e,i){var n,t=this;if(!e.wpDialog)return this.parent(e,i);e.id&&(n=jQuery("#"+e.id)).length&&(t.features=e,t.params=i,t.onOpen.dispatch(t,e,i),t.element=t.windows[e.id]=n,t.bookmark=t.editor.selection.getBookmark(1),n.data("wpdialog")||n.wpdialog({title:e.title,width:e.width,height:e.height,modal:!0,dialogClass:"wp-dialog",zIndex:3e5}),n.wpdialog("open"))},close:function(){if(!this.features.wpDialog)return this.parent.apply(this,arguments);this.element.wpdialog("close")}}),e.onBeforeRenderUI.add(function(){e.windowManager=new tinymce.WPWindowManager(e)})},getInfo:function(){return{longname:"WPDialogs",author:"WordPress",authorurl:"http://wordpress.org",infourl:"http://wordpress.org",version:"0.1"}}}),tinymce.PluginManager.add("wpdialogs",tinymce.plugins.WPDialogs);