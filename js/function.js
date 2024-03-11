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

    let vid_oldidx;
    let vid_nowidx = 0;

    //For graph scroll action
    let graph_oldidx;
    let graph_nowidx = 0;

    var sideBar = true;
    init();
    
    function scrollEvent() {
        let 
    }
     
    // window.addEventListener('scroll', () => {
       
    //     }
      
    // });

  

    //TODO 유투브 영상 이전,다음버튼 동작 - 다음 영상으로 넘기는 슬라이드 구현 
    const $ytPrevBtn = document.querySelector('.vid_prevBtn > a');   //이전버튼
    const $ytNextBtn = document.querySelector('.vid_nextBtn > a');  //다음버튼
    const $ytViewWindow = document.querySelector('.yt_viewWindow'); //동영상 뭉치 윈도우
    
    const $ytVid1 = document.querySelector('.yt_viewWindow > #vid_1');
    const $ytVid2 = document.querySelector('.yt_viewWindow > #vid_2');
    const $ytVid3 = document.querySelector('.yt_viewWindow > #vid_3');



    $ytNextBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        // console.log(this.innerWidth);
        console.log($ytViewWindow.scrollLeft);
       
        if (Number($ytViewWindow.scrollLeft) == 1220 ) {
            $ytViewWindow.scrollBy({
                top: 0,
                left: -1220,
                behavior : "smooth",
            });
        } else {
        $ytViewWindow.scrollBy({
            top: 0,
            left: 610,
            behavior: "smooth",
          });
        }
    });// nextBtn action END

    $ytPrevBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        // console.log(this.innerWidth);
        console.log(Number($ytViewWindow.scrollLeft) == 0 );
        if (Number($ytViewWindow.scrollLeft) == 0) {
            $ytViewWindow.scrollBy({
                top: 0,
                left: 1220,
                behavior: "smooth",
              });
        }else {
        $ytViewWindow.scrollBy({
            top: 0,
            left: -610,
            behavior: "smooth",
          });
        }
    });// prevBtn action END


    const sideBar_toTop = document.querySelector('.top_arrow');
    sideBar_toTop.addEventListener('click',(e)=>{
        e.preventDefault();
        window.scrollBy({top: window.offsetTop, behavior: 'smooth'})
    },{ capture:false, passive : true});




    function init() {
        //For article-offsetY save
    let article_page_y = [];
    $articles_.forEach(($article) => {
        let article_Y = $article.offsetTop;
        article_page_y.push(article_Y);
    });// list save fin.

    console.log(article_page_y);
    //For video scroll action
    

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

    }

      
    //화면 스크롤에 따른 사이드바 표시 여부 결정
    
    function scrollAction(sideBar) {
        let scrollY = this.scrollY;
        console.log(this.scrollY);
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
            //TODO sideBar 위치 일정값 넘어가면 display none
            let HA2 = setTimeout({
                if(sideBar) {
                    $sideBar.style.display='none'
                }
            },3000);
            clearTimeout(HA2);
              //TODO sideBar 위치가 '숨김위치'로 이동한 후에 display:none; 처리 고민해보기
        // 잘 작동되는지 log 찍을 방법 고민하기  x 위치가 window.innerWidth를 넘어가면 display:none?
        }
    }

    //사이드바 표시액션 메서드
    function sideBar_ViewAction(winSize) {
        let windowSize = parseInt(winSize);  //현재 윈도우 사이즈 받아서 parseInt
        $sideBar.style = `display: block; transform: translateX(${Math.floor(windowSize * -0.1)}%);`;
        }
    
    function sideBar_HideAction(winSize) {
        let windowSize = parseInt(winSize);  //현재 윈도우 사이즈 받아서 parseInt
        $sideBar.style = `transform: translateX((${Math.floor(windowSize * 0.1)}%);`;

        // if($sideBar.offsetX)
    }

     //TODO: 스크립트로 리다이렉트 완성하기
   
     const form = document.querySelector('form');

    //Input tag realtime input text
    //  const testBtn = document.querySelector('#ittest_btn');
    //  testBtn.addEventListener('click',(e)=>{
    //      let ittest = document.getElementById('ittest').value;
    //      let keyword = document.querySelector('#keyword').value;
    //      console.log(ittest);
    //      console.log(keyword);
    //      ittest = keyword;
    //  })
    // function printVal() {
    //     let keyword = document.querySelector('#keyword').value;
    //     let ittest = document.getElementById('ittest').innerText= keyword;
    // }
 
 
     form.addEventListener('submit', (e) => {
         redirectOnSubmit(e);
     })
 
     function redirectOnSubmit(e) {
         e.preventDefault();
         // 입력된 값을 가져옵니다.
         var inputValue = document.querySelector('#keyword').value;
         // 새 URL을 구성합니다.
         var searchingUrl = "https://www.amd.com/ko/search/site-search.html#q="+ inputValue; // 입력된 값을 새 URL에 추가합니다.
 
         // 새 URL로 리다이렉트합니다.
         window.location.href = searchingUrl;
     }








})
//end