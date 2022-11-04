
    const header = document.querySelector('header');
    const headertop = document.querySelector('header .top');
    const top1 = document.querySelector('.top1');

    window.addEventListener('scroll',function(){
        if(window.scrollY > 0){
            header.classList.add('active');
            headertop.classList.add('active');
            top1.classList.add('active');
        }else{
            header.classList.remove('active');
            headertop.classList.remove('active');
            top1.classList.remove('active');
        }
    });
    


    const topSub1 = document.querySelector('.topSub1');
    const topSub2 = document.querySelector('.topSub2');

    function head(n){
        if(n){
            topSub2.classList.add('active');
        }else{
            topSub2.classList.remove('active');
        }
    }

    topSub1.addEventListener('mouseover',function(){
        head(true);
    })
    topSub2.addEventListener('mouseover',function(){
        head(true);
    })

    topSub1.addEventListener('mouseleave',function(){
        head(false);
    })
    topSub2.addEventListener('mouseleave',function(){
        head(false);
    })



    const search = document.querySelector('header .top a:nth-of-type(3)');
    const headQuit = document.querySelector('.hide a');
    const hide = document.querySelector('.hide');

    search.addEventListener('click',function(){
        hide.classList.add('active');
    });

    headQuit.addEventListener('click',function(){
        hide.classList.remove('active');
    });


    const menu = document.querySelector('header .top .menu');
    const side = document.querySelector('.side');
    const subQuit = document.querySelector('.side a');

    menu.addEventListener('click',function(){
        side.classList.toggle('active');
    });

    subQuit.addEventListener('click',function(){
        side.classList.add('active2');
        setTimeout(()=>{
            side.classList.remove('active');
            side.classList.remove('active2');
        },500)
    });

    side.addEventListener('click',function(){
        if(event.target.className == 'side active'){
            side.classList.add('active2');
            setTimeout(()=>{
                side.classList.remove('active');
                side.classList.remove('active2');
            },500)
        }
    });



    const unfold = document.querySelectorAll('.side .subside ul li');
    const unfoldFont = document.querySelectorAll('.side .subside ul li p a:nth-of-type(2)');
    const subMenu = document.querySelectorAll('.side .subside ul li div');
    
    for(let i=0; i<subMenu.length; i++){
        unfold[i].addEventListener('click',function(){
            subMenu[i].classList.toggle('active');
            unfoldFont[i].classList.toggle('active');
        });
    }

    $('.subside ul li').on('click',function(){
        $(this).find('div').stop().slideToggle();
    });



    const loginIn = document.querySelector('.side .subside div');
    const login = document.querySelector('.logimg');
    const loginOut = document.querySelector('.logimg .login a');
        
    loginIn.addEventListener('click',function(){
        login.classList.add('active');
        side.classList.remove('active');
        subside.classList.remove('active');
    });

    loginOut.addEventListener('click',function(){
        login.classList.remove('active');
    });

    login.addEventListener('click',function(){
        if(event.target.className == 'logimg active'){
            login.classList.remove('active');
        }
    });



    const agreeIn = document.querySelector('.logimg .login form p:nth-of-type(2) a:nth-of-type(1)');
    const agree = document.querySelector('.agreeimg');
    const agreeOut = document.querySelector('.agreeimg .agree a');
    const agreeCancel = document.querySelector('.agreeimg .agree .choose a:nth-of-type(1)');

    agreeIn.addEventListener('click',function(){
        login.classList.remove('active');
        agree.classList.add('active');
    });

    agreeOut.addEventListener('click',function(){
        agree.classList.remove('active');
    });

    agreeCancel.addEventListener('click',function(){
        agree.classList.remove('active');
    });

    agree.addEventListener('click',function(){
        if(event.target.className == 'agreeimg active'){
            agree.classList.remove('active');
        }
    });

    
    
    const agreeAll = document.querySelector('.detail p input');
    const agreeFirst = document.querySelector('.detail .check1 input');
    const agreeSecond = document.querySelector('.detail .check2 input');

    function Join(){
        agreeAll.addEventListener('click',function(){
            if(agreeAll.checked){
                agreeFirst.checked=true;
                agreeSecond.checked=true;
            }else{
                agreeFirst.checked=false;
                agreeSecond.checked=false;
            }
        });
    }
    Join();

    agreeFirst.addEventListener('click',function(){
        if(agreeSecond.checked && agreeAll.checked==false){
            agreeAll.checked=true;
        } 
        if(agreeAll.checked && agreeFirst.checked==false && agreeSecond.checked){
            agreeAll.checked=false;
        }
    });

    agreeSecond.addEventListener('click',function(){
        if(agreeFirst.checked  && agreeAll.checked==false){
            agreeAll.checked=true;
        }
        if(agreeAll.checked && agreeFirst.checked && agreeSecond.checked==false){
            agreeAll.checked=false;
        }
    });



    const joinIn = document.querySelector('.agreeimg .agree .choose a:nth-of-type(2)');
    const join = document.querySelector('.joinimg');
    const joinOut = document.querySelector('.joinimg .join a');

    joinIn.addEventListener('click',function(){
        if(agreeAll.checked && agreeFirst.checked && agreeSecond.checked){
            agree.classList.remove('active');
            join.classList.add('active');
        }else{
            alert('이용약관 및 개인정보 처리방침에 동의하셔야 가입이 가능합니다.');
        }
    });
    
    joinOut.addEventListener('click',function(){
        join.classList.remove('active');
    });

    join.addEventListener('click',function(){
        if(event.target.className == 'joinimg active'){
            join.classList.remove('active');
        }
    });



    const findIn = document.querySelector('.logimg .login form p:nth-of-type(2) a:nth-of-type(2)');
    const find = document.querySelector('.findimg');
    const findOut = document.querySelector('.findimg .idfind a');
    const findBtn = document.querySelectorAll('.findimg .idfind .findtwo .selecttwo div:nth-of-type(1) button');
    const findBtn2 = document.querySelectorAll('.findimg .idfind .findtwo .selecttwo div:nth-of-type(2) button');
    const findDoc = document.querySelectorAll('.findimg .idfind .findtwo .con div');
    const findH2 = document.querySelectorAll('.findimg .idfind h2');
    const findSelect = document.querySelectorAll('.findimg .idfind .findtwo .selecttwo div');

    findIn.addEventListener('click',function(){
        login.classList.remove('active');
        find.classList.add('active');
    });

    findOut.addEventListener('click',function(){
        find.classList.remove('active');
    });

    find.addEventListener('click',function(){
        if(event.target.className == 'findimg active'){
            find.classList.remove('active');
        }
    });


    let idx=0;

    findBtn.forEach(function(btn,key){
        btn.addEventListener('click',function(){
            findBtn[idx].classList.remove('active');
            findDoc[idx].classList.remove('active');
            findH2[idx].classList.remove('active');
            findSelect[idx].classList.remove('active');

            this.classList.add('active');
            findDoc[key].classList.add('active');
            findH2[key].classList.add('active');
            findSelect[key].classList.add('active');

            idx=key;
        });
    });

    findBtn2.forEach(function(btn,key){
        btn.addEventListener('click',function(){
            findBtn[idx].classList.remove('active');
            findDoc[idx].classList.remove('active');
            findH2[idx].classList.remove('active');
            findSelect[idx].classList.remove('active');

            this.classList.add('active');
            findDoc[key].classList.add('active');
            findH2[key].classList.add('active');
            findSelect[key].classList.add('active');

            idx=key;
        });
    });


    // console.log($(window).scrollTop())
    // console.log($(window).height())
    // console.log($('.intro p:nth-of-type(2)').offset().top)
    // console.log($(`.list li:nth-of-type(${i})`).find('img').offset().top)

    for(let i=1; i<5; i++){
        $(window).on('scroll',function(){
            if(matchMedia('(max-width:991px)').matches){
                $(`.list li:nth-of-type(${i})`).find('img').show();
            }else{
                if($(window).scrollTop() > $(`.list li:nth-of-type(${i})`).find('img').offset().top - $(window).height()){
                    $(`.list li:nth-of-type(${i})`).find('img').fadeIn()
                }else(
                    $(`.list li:nth-of-type(${i})`).find('img').hide()
                )
            }
        });
    }

    $(window).on('scroll',function(){
        if(matchMedia('(max-width:991px)').matches){
            $('.intro p:nth-of-type(2)').show()
        }else{
            if($(window).scrollTop() > $('.intro p:nth-of-type(2)').offset().top - $(window).height()){
                $('.intro p:nth-of-type(2)').fadeIn()
            }else(
                $('.intro p:nth-of-type(2)').hide()
            )
        }
    });
