chrome.browserAction.onLoad.addListener(function(tab) {


    chrome.tabs.executeScript({

        code: `setInterval(function() {
            let overlay=document.querySelector(".ytp-pause-overlay");
            let suggestAction=document.querySelector('.ytp-suggested-action');
            let coveringOverlay=document.querySelector('.ytp-ce-covering-overlay');
            let creditElement=document.querySelector('.ytp-ce-element');
            let ceExpandingOverlay=document.querySelector('.ytp-ce-expanding-overlay');
            let captionWindow=document.querySelector('.ytp-caption-window-container');
            let mdxPopupDlg=document.querySelector('.ytp-mdx-popup-dialog');
            let ytp_ce_shadow=document.querySelector('ytp-ce-shadow');
            let iframes=document.querySelectorAll('iframe');

            removeElement(ytp_ce_shadow,overlay,suggestAction,coveringOverlay,creditElement,ceExpandingOverlay,creditElement,ceExpandingOverlay,captionWindow,mdxPopupDlg) 
        },1);
        function removeElement() {
            let length =arguments.length;
            for(let i=0;i<length;i++){
                if (arguments[i]!=null) {
                    arguments[i].style.display="none";
                }
            }
        }
                    `
    });
});