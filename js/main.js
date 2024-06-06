$(document).ready(function() {

const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close"); // 追記
const open = $("#js-open");
let isCustomScrolling = false;

//モーダル↓
open.on('click', function () { 
  modal.css({'display':'block'}); 
  overlay.css({'display':'block'}); 
});

// 追記
close.on('click', function () { 
    modal.css({'display':'none'}); 
    overlay.css({'display':'none'}); 
});
overlay.on('click', function () { 
    modal.css({'display':'none'}); 
    overlay.css({'display':'none'}); 
});

//モーダル↑


//Q2↓
    const upBtn = $("#up-btn");

    // up-btnをクリックしたときにトップ500pxにアニメーションスクロール
    upBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 500 }, 'slow');
    });
/*
    // スクロール速度制御(未使用)
    window.addEventListener('wheel', function(e) {
        let scrollTop = $(window).scrollTop();

        if (scrollTop <= 500 && !isCustomScrolling) {
            e.preventDefault(); // デフォルトのスクロール動作を防止
            isCustomScrolling = true;

            let delta = (e.deltaY || -e.wheelDelta || e.detail) / 20;
            let newScrollTop = scrollTop + delta;

            if (newScrollTop < 0) newScrollTop = 0;
            if (newScrollTop > 500) newScrollTop = 500;

            $('html, body').scrollTop(newScrollTop);

            setTimeout(function() {
                isCustomScrolling = false;
            }, 10); // 少し時間を置いてスクロールを再度許可する
        }
    }, { passive: false }); // イベントリスナーを passive: false で登録
    */
    
    //Q2↑

    //Q3↓
    const goBtn = $(".go-btn");
    const editBtn = $("#edit-btn");
    let isEditable = false;

    // 半角に変換し大文字にする関数
    function toHalfWidthAndUpperCase(str) {
        return str.replace(/[！-～]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        }).replace(/　/g, " ").replace(/／/g, "/").replace(/－/g, "-").toUpperCase();
    }

    // 編集ボタンがクリックされたときの処理
    editBtn.on('click', function () {
        isEditable = !isEditable; // 編集状態をトグルする

        if (isEditable) {
            // 編集可能な場合、ボタンのテキストを入力フィールドに変更
            const currentText = goBtn.text();
            goBtn.html(`<input type="text" id="btn-text" value="${currentText}">`);
            $(this).text('編集中');
            // ボタンが押せるようにする
            goBtn.prop('disabled', true);
        } else {
            // 編集終了の場合、入力フィールドの値をボタンのテキストに設定
            const newText = toHalfWidthAndUpperCase($("#btn-text").val());
            goBtn.text(newText);
            $(this).text('編集');
            // ボタンが押せるかどうかをチェックして設定
            goBtn.prop('disabled', false);
            if (newText === 'GO!') {
                goBtn.css({
                    'border-color': '#27acd9',
                    'color': '#27acd9'
                });
                goBtn.attr('id', 'next-btn');
            } else {
                goBtn.css({
                    'border-color': '#d92727',
                    'color': '#d92727'
                });
                goBtn.removeAttr('id', 'next-btn'); 
            }
        }
    });

    // ボタンが押されたときの処理
    goBtn.on('click', function () {
        const buttonText = $(this).text();
        // 条件を確認して、complete.htmlに移動
        if (buttonText === 'GO!') {
            localStorage.setItem('progress', 4);
            window.location.href = '../complete/index.html';
        } else {
            alert('ボタンがクリックされました！');
        }
    });
    //Q3↑
    
});