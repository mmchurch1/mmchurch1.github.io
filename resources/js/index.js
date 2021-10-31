String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}
var nowobj={};
var kill_media="";
var start_card='c1';
var nowobj2=1;
var delaytime=2;
var oldVal="";
var imsiimg="";
var nowtime=Date.now();
var bg_bright=50;
var  _intval=1500;
var check_result="|";
var bricknumber=1;
function isMobile() {
    return navigator.userAgent.indexOf('Mobi')> -1;
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
for(var i=0;i<$('h2').length;i++) { $('h2').eq(i).html($('h2').eq(i).html().replaceAll("[","<b class='colyel'>").replaceAll("]","</b>")); }
    for(var i=0;i<$('h3').length;i++) { $('h3').eq(i).html($('h3').eq(i).html().replaceAll("[","<b class='colyel'>").replaceAll("]","</b>")); }    
    for(var i=0;i<$('h4').length;i++) { $('h4').eq(i).html($('h4').eq(i).html().replaceAll("[","<b class='colyel'>").replaceAll("]","</b>").replaceAll("\n","<br/>")); }
    for(var i=0;i<$('h5').length;i++) { $('h5').eq(i).html($('h5').eq(i).html().replaceAll("[","<b class='colyel'>").replaceAll("]","</b>").replaceAll("\n","<br/>")); }
$(document).ready(function(){
    var churchname = getParameterByName('church');
    $('.churchname').text(churchname);
    aup.loop=true;
    aup.volume=0.35;
    //$('body').css("backdrop-filter","brightness("+bg_bright+"%)");
    if($('#'+start_card).data('bg')!==undefined) chage_background_img($('#'+start_card).data('bg')) ;
    $('#'+start_card).show('slow'); 
    if(!isMobile()) {
        $('#main_fr').addClass('h-100');
        } else {
        $('#main_fr').removeClass('align-items-center ');
        $('#main_fr').css('padding-top','30px')
    }
    if(navigator.userAgent.indexOf('KAKAO')>0) {
        $('#btn_end').prop('href',"kakaoweb://closeBrowser");
        } else {
        $('#btn_end').detach();
    }
    $("#btn_end").click(function(){
        self.opener=self;
        self.close();
        window.close();
        window.open('','_self').close();  
        $(".maincard:last-child").fadeOut('slow',function() { 
            document.getElementById('aup').volume=0
            self.opener=self;
            self.close();
            window.close();
            window.open('','_self').close();  
            if(navigator.userAgent.includes("KAKAO")) location.href = "kakaotalk://inappbrowser/close";
        });
    });
    $(".btn_next").click(function(){
        //show_nav_pagenum();
        nowobj=$("#c"+($(this).prop('id').split("_")[1]-0+1));
        nowobj2=$(this).prop('id').split("_")[1]-0+1;
        kill_media=$(this).data('kill');
        $("#c"+$(this).prop('id').split("_")[1]).fadeOut('slow',function() { 
            if(kill_media!==undefined) $(kill_media).detach();
            if($('.maincard').eq(nowobj2-1).data('bg')!==undefined) {  // 배경화면이 카드에 있으면 바꾼다.
                chage_background_img($('.maincard').eq(nowobj2-1).data('bg')) ;
            }
            if(nowobj2==3&&!isMobile()) openFullScreenMode();
            nowobj.fadeIn('slow',function() {
                if($('#if1').width()>0) $('#if1').height($('#if1').width()/16*9);
                /*
                    nowobj.find(". ").each(function (index) {
                    if((nowobj2-0)==$(".maincard").length) last_fadeout()
                    });
                */
            });
        });
    });
    function chage_background_img(img_name) {
        $('body').css('background-image',"url('"+img_name+"'");
        console.log(img_name);
    }
    function openFullScreenMode() {
        var docV = document.documentElement;
        if (docV.requestFullscreen) 
        docV.requestFullscreen();
        else if (docV.webkitRequestFullscreen) // Chrome, Safari (webkit)
        docV.webkitRequestFullscreen();
        else if (docV.mozRequestFullScreen) // Firefox
        docV.mozRequestFullScreen();
        else if (docV.msRequestFullscreen) // IE or Edge
        docV.msRequestFullscreen();
    }
    function last_fadeout() {
        delaytime=3;
        setTimeout("$('body').css('backdrop-filter','brightness(0.4)')",delaytime++*1000);
        setTimeout("$('body').css('backdrop-filter','brightness(0.35)')",delaytime++*1000);
        setTimeout("$('body').css('backdrop-filter','brightness(0.3)')",delaytime++*1000);
        setTimeout("$('body').css('backdrop-filter','brightness(0.25)')",delaytime++*1000);
        setTimeout("$('body').css('backdrop-filter','brightness(0.20)')",delaytime++*1000);
        setTimeout("$('body').css('backdrop-filter','brightness(0.15)')",delaytime++*1000);
        setTimeout("$('body').css('backdrop-filter','brightness(0.1)')",delaytime++*1000);
        setTimeout("$('body').css('backdrop-filter','brightness(0)')",delaytime++*1000);
        setTimeout("aup.pause();"(delaytime+3)*1000);
        aup.loop=false;
    }
});