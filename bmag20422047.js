  <script type='text/javascript'> 
            //<![CDATA[
            $("#LinkList100").each(function(){var e="<ul id='nav'><li><ul id='sub-menu'>";$("#LinkList100 li").each(function(){var t=$(this).text(),n=t.substr(0,1),r=t.substr(1);"_"==n?(n=$(this).find("a").attr("href"),e+='<li><a href="'+n+'">'+r+"</a></li>"):(n=$(this).find("a").attr("href"),e+='</ul></li><li><a href="'+n+'">'+t+"</a><ul id='sub-menu'>")});e+="</ul></li></ul>";$(this).html(e);$("#LinkList100 ul").each(function(){var e=$(this);if(e.html().replace(/\s|&nbsp;/g,"").length==0)e.remove()});$("#LinkList100 li").each(function(){var e=$(this);if(e.html().replace(/\s|&nbsp;/g,"").length==0)e.remove()})});
            //]]>
            </script>
