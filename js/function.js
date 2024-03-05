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

window.addEventListener("DOMContentLoaded", () => {


    const $topNavMenu = document.querySelectorAll("header>.headcont>.topNav>div.menuCont> ul > li");    //topNavMenu
    const $topNavIconMenu = document.querySelectorAll("header>.headcont>.topNav>div.iconCont>ul>li");   //topNavMyMenu
    const $logo = document.querySelector('header>.headcont>.topNav > h1');


    const $articles_ = document.querySelectorAll("section > article");
    const $middle_menu_items = document.querySelectorAll("header>.headcont>nav>.navCon>.gnb>li");
    const $middle_menu_ = document.querySelector("header>.headcont>nav");

    const $sideBar = document.querySelector("aside>.sideBar");

    // console.log() test Area
    // console.log($topnav_menu);
    // console.log($topnav_menu2);
    // console.log($sideBar);
    // console.log();
    // console.log();

    //For article-offsetY save
    let article_page_y = [];
    $articles_.forEach(($article) => {
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

    // Top Navigation 클릭 비활성화
    //Header 메뉴 클릭 비활성화1
    $topNavMenu.forEach((menuItems) => {
        menuItems.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
    //Header 메뉴 클릭 비활성화2
    $topNavIconMenu.forEach((iconItems) => {
        iconItems.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
    //logo 클릭 비활성화
    $logo.addEventListener('click', (e) => {
        e.preventDefault();
    });
    //middle menu 클릭 기본기능 비활성화
    $middle_menu_items.forEach((mMenuItems) => {
        mMenuItems.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    //화면 스크롤에 따른 사이드바 표시 여부 결정
    var sideBar = true;
    window.addEventListener('scroll', () => {
        let scrollY = this.scrollY;
        let windowSize = window.innerWidth;
        $sideBar.style.display = 'block';
        $sideBar.style.transition = 'all 1.2s ease-in-out;';

        if (scrollY > $middle_menu_.offsetTop) {
            sideBar_ViewAction(windowSize); }
        if (scrollY < $middle_menu_.offsetTop) {
            sideBar_HideAction(windowSize);
           
            //sideBar slide 후 none으로 변경
            let HA1 = setTimeout(($sideBar.style.display = 'block'),1000);
            clearTimeout(HA1);
            sideBar = false;
            let HA2 = setTimeout({
                if(sideBar) {
                    $sideBar.style.display='none'
                }
            },3000);
            clearTimeout(HA2);
        }
        //TODO sideBar 위치가 '숨김위치'로 이동한 후에 display:none; 처리 고민해보기
        // 잘 작동되는지 log 찍을 방법 고민하기
    });

    
    //사이드바 표시액션 메서드
    function sideBar_ViewAction(winSize) {
        let windowSize = parseInt(winSize);  //현재 윈도우 사이즈 받아서 parseInt
        $sideBar.style = `display: block; transform: translateX(${Math.floor(windowSize * -0.1)}%);`;
        }
    
    function sideBar_HideAction(winSize) {
        let windowSize = parseInt(winSize);  //현재 윈도우 사이즈 받아서 parseInt
        $sideBar.style = `transform: translateX((${Math.floor(windowSize * 0.1)}%);`;
    }

    //TODO 유투브 영상 이전,다음버튼 동작 - 다음 영상으로 넘기는 슬라이드 구현 


  // }

})//end