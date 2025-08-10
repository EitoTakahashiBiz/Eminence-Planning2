// JavaScript for modal and mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    // DOM要素の取得
    const openContactButtons = document.querySelectorAll('#openContactModal, #openContactModalMobile, #openContactModalHero');
    const modal = document.getElementById('contact-modal');
    const closeButton = document.querySelector('.close-button');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    /**
     * モーダルを開く関数
     */
    const openModal = () => {
        modal.style.display = 'block';
        // 遅延させてアニメーションを適用
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    };

    /**
     * モーダルを閉じる関数
     */
    const closeModal = () => {
        modal.classList.remove('active');
        // アニメーションが完了してから非表示にする
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };

    /**
     * モバイルメニューを閉じる関数
     */
    const closeMobileMenu = () => {
        mobileMenu.classList.add('hidden');
    };

    // お問い合わせボタンのクリックイベント（全ボタン共通）
    openContactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
            closeMobileMenu(); // モバイルメニューが開いている場合は閉じる
        });
    });
    
    // モーダル内の閉じるボタンのクリックイベント
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            closeModal();
        });
    }

    // モーダルの外側をクリックしたときのクローズイベント
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // モバイルメニューの開閉イベント
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // モバイルメニュー内のリンクをクリックしたときのクローズイベント
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // アンカーリンクのスムーズスクロールイベント
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
