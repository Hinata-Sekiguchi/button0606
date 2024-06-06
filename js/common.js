$(document).ready(function() {
    const currentPath = window.location.pathname;
    let progress = localStorage.getItem('progress');

    // 進捗が存在しない場合、デフォルトの値を設定
    if (progress === null) {
        progress = '0';
        localStorage.setItem('progress', progress);
    }

    let currentProgress = parseInt(progress) || 0;
    let requiredProgress = 0;

    if (currentPath.includes('/q1/')) {
        requiredProgress = 1;
    } else if (currentPath.includes('/q2/')) {
        requiredProgress = 2;
    } else if (currentPath.includes('/q3/')) {
        requiredProgress = 3;
    } else if (currentPath.includes('/complete/')) {
        requiredProgress = 4;
    }

    // console.log('currentProgress:', currentProgress);
    // console.log('requiredProgress:', requiredProgress);

    // 進捗が足りない場合、トップページにリダイレクト
    if (currentProgress < requiredProgress) {
        window.location.href = '../index.html';
    }

    //リセットボタンの表示・非表示
    const resetBtn = $(".reset-btn");
    if (1 <= currentProgress) {
        resetBtn.css({
            'display': 'block'
        });
    }

    //スタートボタン起動時のアクション
    $('#start-btn').on('click', function() {
        if (currentProgress === 0) {
            localStorage.setItem('progress', 1);
            window.location.href = './q1/index.html';
        } else if (currentProgress === 1) {
            window.location.href = './q1/index.html';
        } else if (currentProgress === 2) {
            window.location.href = './q2/index.html';
        } else if (currentProgress === 3) {
            window.location.href = './q3/index.html';
        } else if (currentProgress === 4) {
            window.location.href = './complete/index.html';
        } else {
            window.location.href = './index.html';
        }
    });

    //ネクストボタン起動時の進捗更新
    $('#next-btn').on('click', function() {
        if (currentPath.includes('/q1/')) {
            localStorage.setItem('progress', 2);
            window.location.href = '../q2/index.html';
        } else if (currentPath.includes('/q2/')) {
            localStorage.setItem('progress', 3);
            window.location.href = '../q3/index.html';
        } 
        // else if (currentPath.includes('/q3/')) {
        //     localStorage.setItem('progress', 4);
        //     window.location.href = '../complete/index.html';
        // }
    });

    // console.log('progress:', progress);
});