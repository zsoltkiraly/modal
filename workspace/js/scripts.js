'use strict';
/*
Modal - Code by Zsolt Király
v1.0.2 - 2019-05-09
*/

var modal = function() {

    function qS(pre, eLclass, all) {
        return all ? pre.querySelectorAll('' + eLclass +'') : pre.querySelector('' + eLclass +'');
    }

    function signatura() {
        if (window['console']) {
            const text = {
                black: '%c     ',
                blue: '%c   ',
                author: '%c  Zsolt Király  ',
                github: '%c  https://zsoltkiraly.com/'
            }

            const style = {
                black: 'background: #282c34',
                blue: 'background: #61dafb',
                author: 'background: black; color: white',
                github: ''
            }

            console.log(text.black + text.blue + text.author + text.github, style.black, style.blue, style.author, style.github);
        }
    }

    signatura();

    function createOverlayDOM() {
        var overlay = document.createElement('section');
        overlay.setAttribute('id', 'modal-overlay');
        document.body.insertBefore(overlay, document.body.firstChild);
    }

    function removeOverlayDOM() {
        document.body.removeChild(qS(document, '#modal-overlay', false));
    }

    function createModalDOM(c) {
        var modal = document.createElement('section');
        modal.setAttribute('id', 'modal');
        document.body.insertBefore(modal, document.body.firstChild);

        modal.style.WebkitAnimationDuration = c.animation.duration + 'ms';
        modal.style.animationDuration = c.animation.duration + 'ms';

        if(c.closeX == true) {
            modal.innerHTML = '<i class="close-icon"></i><div class="modal-content"><div class="content"></div></div>';

        } else {
            modal.innerHTML = '<div class="modal-content"><div class="content"></div></div>';
        }
    }

    function removeModalDOM() {
        document.body.removeChild(qS(document, 'section#modal', false));
    }

    function hasVerticalScrollbar(id) {
        var modalContent = qS(id, '.modal-content', false),
            hasVerticalScrollbar = modalContent.scrollHeight > modalContent.clientHeight;

        if(hasVerticalScrollbar) {
            id.classList.add('has-scrollbar');

        } else {
            id.classList.remove('has-scrollbar');
        }
    }

    function removeOpenModalClass() {
        document.body.classList.remove('open-modal');
    }

    function clickButton(c) {
        var boxContainer = qS(document, '#' + c.boxContainer +'', false);

        if(boxContainer) {
            var openModals = qS(boxContainer, '.modal-open', true);

            openModals.forEach((openModal)=> {
                openModal.addEventListener('click', function() {

                    createModalDOM(c);
                    createOverlayDOM();

                    var modal = qS(document, 'section#modal', false),
                        obj = this;

                    if(modal) {
                        var innerModals = qS(boxContainer, '.modal', true);

                        innerModals.forEach((innerModal)=> {

                            if(obj.getAttribute('data-id') == innerModal.getAttribute('data-id')) {
                                qS(document, '#modal-overlay', false).classList.add('show');
                                modal.classList.add('show', c.animation.type);
                                qS(modal, '.modal-content .content', false).innerHTML = innerModal.innerHTML;
                            }
                        });

                        hasVerticalScrollbar(modal);

                        window.addEventListener('resize', function() {
                            hasVerticalScrollbar(modal);
                        }, false);

                        document.body.classList.add('open-modal');
                    }
                }, false);
            });
        }
    }

    function clickOverlay(c) {
        if(c.closeOverlay == true) {
            window.addEventListener('click', function(e) {

                if (e.target == qS(document, '#modal-overlay', false)) {
                    removeOverlayDOM();
                    removeModalDOM();
                    removeOpenModalClass();
                }

            }, false);
        }
    }

    function keydownEsc(c) {
        if(c.closeEsc == true) {
            document.addEventListener('keydown', function(e) {
                var modal = qS(document, 'section#modal', false);

                if(e.keyCode == 27 && modal) {
                    removeOverlayDOM();
                    removeModalDOM();
                    removeOpenModalClass();
                }

            }, false);
        }
    }

    function clickCloseIcon(c) {
        if(c.closeX == true) {
            window.addEventListener('click', function(e) {

                if (e.target == qS(document, 'section#modal i.close-icon', false)) {
                    removeOverlayDOM();
                    removeModalDOM();
                    removeOpenModalClass();
                }

            }, false);
        }
    }

    function app(config) {
        clickButton(config);
        clickOverlay(config);
        keydownEsc(config);
        clickCloseIcon(config);
    }

    return {
        app: app
    }
}();