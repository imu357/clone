
    const header = document.querySelector('header');
    const top1 = document.querySelector('.top1 ul li a');

    window.addEventListener('scroll',function(){
        if(window.scrollY){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    });

    
    const topSub1 = document.querySelector('.top1 ul');
    const topSub2 = document.querySelector('.topSub2');

    function nav(){
        if(event.target.className !== 'topSub1'){
            topSub2.classList.add('active');
        }else{
            topSub2.classList.remove('active');
        }
    }
    topSub1.addEventListener('mouseover',nav);
    topSub2.addEventListener('mouseout',function(){
        topSub2.classList.remove('active');
    });




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
    const subside = document.querySelector('.side .subside');
    const subQuit = document.querySelector('.side a');

    menu.addEventListener('click',function(){
        side.classList.toggle('active');
        subside.classList.toggle('active');
    });

    subQuit.addEventListener('click',function(){
        side.classList.remove('active');
        subside.classList.remove('active');
    });


    const unfold = document.querySelectorAll('.side .subside ul li p');
    const unfoldFont = document.querySelectorAll('.side .subside ul li p a:nth-of-type(2)');
    const subMenu = document.querySelectorAll('.side .subside ul li div');
    
    for(let i=0; i<subMenu.length; i++){
        unfold[i].addEventListener('click',function(){
            subMenu[i].classList.toggle('active');
            unfoldFont[i].classList.toggle('active');
        });
    }


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
    
    

    const joinIn = document.querySelector('.agreeimg .agree .choose a:nth-of-type(2)');
    const join = document.querySelector('.joinimg');
    const joinOut = document.querySelector('.joinimg .join a');

    joinIn.addEventListener('click',function(){
        agree.classList.remove('active');
        join.classList.add('active');
    });
    
    joinOut.addEventListener('click',function(){
        join.classList.remove('active');
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