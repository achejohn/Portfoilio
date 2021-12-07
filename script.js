$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrool-btn').addClass("show");
        }else{
            $('.scrool-btn').removeClass("show");
        }
    });    
        
        // slide up script
        $('.scrool-btn').click(function(){
            $('html').animate({scrollTop: 0});
        });
        
        //toggle menu/navbar script
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        })
    })
    //typing animation
    var typed = new Typed(".typing", {
        strings: ["Blogger","Developer","Freelancer","Designer","Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Blogger","Developer","Freelancer","Designer","Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

// define the load gist function
var loadGist = function(elem) {
    var gistUrl = $(elem).text().match(/\bhttps?:\/\/\S+(.js)/gi);
    if (typeof gistUrl === 'undefined' || gistUrl === null || gistUrl.length == 0) 
        return;
    //load gist
    $(elem).show();
    $(elem).empty();
    postscribe(elem, '<script src=' + gistUrl+ '><\/script>');
    };

var gists = $('p:contains("CODE:")');
gists.hide();
gists.toArray().forEach(loadGist);
