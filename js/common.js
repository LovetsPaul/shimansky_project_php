$(document).ready(function(){function e(){$("#add_reviews_form").submit(function(a){var b=$(this),c=new FormData($(this)[0]);return a.preventDefault(),$.ajax({type:"POST",url:"/includes/add_reviews.php",data:c,async:!1,cache:!1,contentType:!1,processData:!1}).done(function(){$(".reviews_modal").fadeIn("200"),setTimeout(function(){$(".reviews_modal").slideUp(),b.trigger("reset"),$("body, html").animate({scrollTop:$("body").offset().top},1200)},3e3)}),!1})}Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")});var a=document.location.href,b=a.substr(24),c="li a[href='"+b+"']";b.substr(16).length;"/blog/full_post"==b.substr(0,15)&&(b=b.substr(0,5),c="li a[href='"+b+"']",$(c).parent().addClass("active")),$(c).parent().addClass("active"),$(c).parent().parent().parent().addClass("active"),$("#coffee_form, #add_message").submit(function(){var a=$(this);return $.ajax({type:"POST",url:"mail.php",data:a.serialize()}).done(function(){$(".form_submit").fadeIn("200"),setTimeout(function(){$(".form_submit").slideUp(),a.trigger("reset"),$("body, html").animate({scrollTop:$("body").offset().top},1200)},2e3)}),!1}),$("#anketa_form").submit(function(){var a=$(this);return $.ajax({type:"POST",url:"mail.php",data:a.serialize()}).done(function(){$(".anketa_modal").fadeIn("200"),setTimeout(function(){$(".anketa_modal").slideUp(),a.trigger("reset"),$("body, html").animate({scrollTop:$("body").offset().top},1200)},2e3)}),!1}),$.validator.addMethod("filesize",function(a,b,c){return this.optional(b)||b.files[0].size<=c},"\u0420\u0430\u0437\u043c\u0435\u0440 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 {0}"),$("#add_img").change(function(){var a=this.files[0],b=a.size||a.fileSize,c=a.type.substr(6).toString(),d=["jpg","jpeg","png","gif"];found=!1,b>2e6&&($(this).val(""),$(this).remove(),alert("\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 2\u041c\u0431!"),$("#add_reviews_form").append('<input type="file" name="add_img" id="add_img">')),d.forEach(function(a){c==a&&(found=!0)}),found||($(this).val(""),$(this).remove(),alert("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f!\n\n \u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438:  jpg, jpeg, png, gif"),$("#add_reviews_form").append('<input type="file" name="add_img" id="add_img">'))}),$("#add_reviews_form").validate({rules:{your_name:"required",your_email:{required:!0,email:!0},your_text:"required",add_img:{required:!0,extension:"jpg,jpeg",filesize:5}},messages:{required:"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!",your_name:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f!",your_email:{required:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 E-mail \u0430\u0434\u0440\u0435\u0441!",email:"\u0412\u0430\u0448 E-mail \u0430\u0434\u0440\u0435\u0441 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 name@domain.com"},your_text:"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!"},submitHandler:function(){e()}});var f=!1;if((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(f=!0),!f){$("img, a").on("dragstart",function(a){a.preventDefault()});var g=$(".about_work_bg"),h=$(".s_inner_page");$(window).scroll(function(){var a=$(document).scrollTop();g.css({backgroundPosition:"16% "+(-1200+a/2.25)+"px"}),h.css({backgroundPosition:"0 "+a/8+"px"})})}$(".owl-carousel").owlCarousel({loop:!0,margin:0,nav:!0,autoHeight:!0,responsiveClass:!0,navText:["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],responsive:{0:{items:1}}}),$(".owl_clients").owlCarousel({loop:!0,margin:30,nav:!1,autoplay:!0,autoplaySpeed:500,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:2},500:{items:3},900:{items:4},1170:{items:4}}}),$(".owl_reviews").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoHeight:!0,autoplay:!0,autoplaySpeed:400,autoplayTimeout:1e4,autoplayHoverPause:!0,responsive:{0:{items:1}}}),$(".is_home .preloader").fadeOut(300);var i=$(".nav_container").children().clone();i.appendTo($("#mobile_menu")),$("#mobile_menu").mmenu({extensions:["widescreen","theme-dark","effect-menu-slide","pagedim-black","pageshadow","tileview"],counters:!0,iconPanels:!0,navbar:{title:"\u041c\u0435\u043d\u044e"},offCanvas:{pageSelector:"#my-page",position:"right"},counters:!0,columns:!0});var j=$("#mobile_menu").data("mmenu"),k=!1;$(".toggle-mnu").click(function(){return $(".toggle-mnu").toggleClass("on"),k?(j.close(),k=!1):(j.open(),k=!0),!1}),$("body").bind("click",function(){k&&($(".toggle-mnu").toggleClass("on"),k=!1)}),$("ul.sf-menu").superfish({delay:300,animation:{opacity:"show",height:"show"},speed:"fast",autoArrows:!1,dropShadows:!0}),$(window).scroll(function(){$(document).scrollTop()>1100?$("#back_to_top").fadeIn("slow"):$("#back_to_top").fadeOut("fast")});var l=$("nav.header_nav").offset().top;$(window).scroll(function(){var a=$(document).scrollTop();a>l?($("header nav.header_nav").addClass("fixed_menu"),$(window).innerWidth()>992&&($(".s_inner_page .s_page_title").css({"margin-top":"55px"}),$(".home_slider").css({"margin-top":"55px"}))):($("header nav.header_nav").removeClass("fixed_menu"),$(window).innerWidth()>992&&($(".s_inner_page .s_page_title").css({"margin-top":"0"}),$(".home_slider").css({"margin-top":"0"})))}),$("#back_to_top").click(function(){$("body, html").animate({scrollTop:$("body").offset().top},1200)}),$(".grid-item").imagefill(),$("#container").imagesLoaded(function(){$(".grid").masonry({columnWidth:".grid-sizer",itemSelector:".grid-item",percentPosition:!0});$(".grid").masonry({columnWidth:".grid-sizer",itemSelector:".grid-item",percentPosition:!0})}),$(".magnific").magnificPopup({type:"image",gallery:{enabled:!0}}),$("iframe[width]").attr("width",function(){return $(this).attr("width").replace("","100%")}),$("iframe[height]").attr("height",function(){return $(this).attr("height").replace("","300px")})});