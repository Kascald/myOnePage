/* 
 TODO

 Header 에 관한 기능구현
 1. 로고 이미지에 대한 페이지 이동 , 기본동작 막기
 2. Nav 메뉴에 대한 페이지 이동 , 기본동작 막기

 Section > article 에 관한 기능구현
 1. 미들메뉴 선택시 해당 아티클 offsetY로 스크롤
 2. 
 3.
 4.
 5.

 Footer 에 관한 기능 구현
 1.
 2.
 3.
 
 Sidebar 에 관한 기능 구현
 1. To the Top
 2. To the Bottom
 3. To th Main

*/

window.addEventListener("DOMContentLoaded",()=>{

    const $topnav_menu = document.querySelector("header>.headcont>.topNav>div.menuCont> ul > li");
    const $topnav_menu2 = document.querySelector("header>.headcont>.topNav>div.iconCont>ul>li");

    const $articles_ = document.querySelectorAll("section > article");
    const $middle_menu_items = document.querySelectorAll("header>.headcont>nav>.navCon>.gnb>li");
    const $middle_menu_ = document.querySelector("header>.headcont>nav");
    const $sideBar = document.querySelector("aside>.sideBar");


    // console.log() test Area
    console.log($topnav_menu);
    console.log($topnav_menu2);
    console.log($sideBar);
    // console.log();
    // console.log();

    //For article offsetY save
    let article_page_y = [];
    $articles_.forEach(($article)=>{
        let article_Y = $article.offsetTop;
        article_page_y.push(article_Y);
    });// list save fin.

    console.log(article_page_y);

    //For video scroll action
    let vid_oldidx;
    let vid_nowidx = 0;

    //For graph scroll action
    let graph_oldidx;
    let graph_nowidx = 0;
    
    console.log($middle_menu_);
    console.log($middle_menu_.offsetTop);

    window.addEventListener('scroll',()=>{
        let $screenSize = document.body.offsetWidth;

        let $wSize = $screenSize < 1300? 0 :$screenSize;

        console.log("현재 스크린 너비 : ",$screenSize);
        

       
        let $nowScrollY = document.querySelector('html').scrollTop;
        console.log("현재 스크롤 Y : ",$nowScrollY);
        sideBar_toggle($nowScrollY,$wSize);
        
    });


    //FIXME 사이드바 스크롤 액션 고치기
    function sideBar_toggle(scrollY,windowSize) {
        let wSize = parseInt(windowSize);
        console.log("적용 스크린 너비 : ",wSize);
        console.log("예상 사이드바 이동거리 : ",Math.floor(wSize * 0.2),"px");
        if(scrollY > $middle_menu_.offsetTop){
            // console.log("현재 스크롤Y가 section article_1을 넘어섰습니다.");
            // console.log("$sideBar.style.display 를 block으로 변경합니다.");
            $sideBar.style =`display: block; transform: translateX(${Math.floor(wSize * -0.2)}%); transition: all 1.3s ease-in-out;`;

        }else if(scrollY < $middle_menu_.offsetTop) {
            // console.log("현재 스크롤Y가 section article_1보다 작습니다.");
            // console.log("$sideBar.style.display 를 이동시킨 후 none으로 변경합니다.");

            $sideBar.style =`display: none; transform: translateX((${Math.floor(wSize * 0.2)}%); transition: all 1.3s ease-in-out;`;
            // let delayStlye = setTimeout(function() {
            //     $sideBar.style='display:none;'}
            //     ,1300);
            
            // clearTimeout(delayStlye);
        }
    }
   
       
    // }

})//end