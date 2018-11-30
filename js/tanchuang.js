document.write('<style>#tanchuang-bg{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,0.5);z-index:9999;display:none}#tanchuang{position:fixed;top:20%;left:50%;margin-left:-385px;background:#3e2b20;color:#fff;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;padding:20px;text-align:center;z-index:10000;display:block;opacity:0;-webkit-transform:translate(100%, 100px) scale(0);transform:translate(100%, 100px) scale(0)}#tanchuang .border{border:4px solid #ffdf94;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;width:730px;height:440px}#tanchuang h3{color:#e93b3b;font-size:30px;line-height:3em}#tanchuang p{font-size:24px;text-indent:2em;line-height:2em;text-align:justify;padding:0 40px}#tanchuang .close{position:absolute;cursor:pointer;top:-5px;right:-5px;background:#ffdf94;color:#3e2b20;width:46px;height:46px;line-height:46px;text-align:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;font-weight:bold;font-size:30px}#fixed-wx{position:fixed;right:0;top:500px;cursor:pointer;}@-webkit-keyframes tanchuangIn{0%{opacity:0;-webkit-transform:translate(100%, 100px) scale(0);transform:translate(100%, 100px) scale(0)}100%{opacity:1;-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}}@-webkit-keyframes tanchuangOut{0%{opacity:1;-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}100%{opacity:0;-webkit-transform:translate(100%, 100px) scale(0);transform:translate(100%, 100px) scale(0)}}@keyframes tanchuangIn{0%{opacity:0;-webkit-transform:translate(100%, 100px) scale(0);transform:translate(100%, 100px) scale(0)}100%{opacity:1;-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}}@keyframes tanchuangOut{0%{opacity:1;-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}100%{opacity:0;-webkit-transform:translate(100%, 100px) scale(0);transform:translate(100%, 100px) scale(0)}}.tanchuangOut{-webkit-animation:tanchuangOut 0.5s;animation:tanchuangOut 0.5s;animation-fill-mode:forwards}.tanchuangIn{-webkit-animation:tanchuangIn 0.5s;animation:tanchuangIn 0.5s;animation-fill-mode:forwards}</style>');
document.write('<div id="tanchuang-bg"></div>	');
document.write('<div id="tanchuang">');
document.write('	<div class="border">');
document.write('		<h3>荻胜堂公告</h3>');
document.write('		<p>荻胜堂不供电商！只为给微商起家的代理一个公平的发展平台！荻胜堂旗下所有产品全国统一零售价！公司再次声明！淘宝不卖！京东不卖！亚马逊不卖！拼多多不卖！能直接下单购买的平台都是无保障产品！公司不授权第三方平台！凡在上述第三方平台购买的荻胜堂产品所产生的不确定因素，均与本公司无关！</p>');
document.write('	</div>');
document.write('	<div class="close" id="close">X</div>');
document.write('</div>');

document.write('<div id="fixed-wx"><img src="images/xinxi.gif" /></div>');


  $("#fixed-wx").click(function(){	
     $("#tanchuang").addClass("tanchuangIn").removeClass("tanchuangOut");
     $("#fixed-wx").css("display","none");
     $("#tanchuang-bg").css("display","block");     
  });
  
  
  $("#close").click(function(){
 	
     $("#tanchuang").addClass('tanchuangOut').removeClass("tanchuangIn");
     $("#fixed-wx").css("display","block");
     $("#tanchuang-bg").css("display","none");       
  });
  
  
  
   function openwx(){
     $("#tanchuang").addClass("tanchuangIn").removeClass("tanchuangOut");
     $("#fixed-wx").css("display","none");
     $("#tanchuang-bg").css("display","block");  
	 }   
	 setTimeout(openwx,2000);  