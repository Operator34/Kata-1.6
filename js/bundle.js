!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";i.r(t);i(2);console.log("Works!");var r=window.matchMedia("(min-width: 320px) and (max-width: 767px)"),n=window.matchMedia("(min-width: 768px) and (max-width: 1120px)"),o=window.matchMedia("(min-width: 1121px)"),s=document.querySelector(".description-read-more__button-read-more"),d=document.querySelector(".description-read-more__button-hidden-more"),c=(document.querySelector(".description-read-more__for-all"),document.querySelector(".description-read-more__for-tablet")),l=document.querySelector(".description-read-more__for-desktop"),a=document.querySelector(".main-container");s.addEventListener("click",(function(e){console.log("buttonDescriptionReadMore"),c.classList.add("show"),l.classList.add("show"),s.classList.add("hidden"),d.classList.remove("hidden")})),d.addEventListener("click",(function(e){console.log("buttonDescriptionHiddenMore"),r&&(c.classList.remove("show"),l.classList.remove("show")),n&&l.classList.remove("show"),d.classList.add("hidden"),s.classList.remove("hidden")}));var u=function(e,t,i,r){e.addEventListener(r,(function(r){r.preventDefault(),e.classList.add("hidden"),t.classList.remove("hidden");for(var n=0;n<i.length;n++)i[n].classList.add("show")}))},p=function(e,t,i,r){e.addEventListener(r,(function(){e.classList.add("hidden"),t.classList.remove("hidden");for(var r=0;r<i.length;r++)i[r].classList.remove("show")}))},m=document.querySelector(".swiper-brands__read-more"),w=document.querySelector(".swiper-brands__hidden-more"),h=document.querySelectorAll(".swiper-brands__swiper-slide"),v=[],f=[];n.matches&&(v=document.querySelectorAll(".swiper-brands__swiper-slide:nth-last-child(-n+5)"),f=document.querySelectorAll(".swiper-other-technic__swiper-slide:nth-last-child(-n+7)")),o.matches&&(v=document.querySelectorAll(".swiper-brands__swiper-slide:nth-last-child(-n+3)"),f=document.querySelectorAll(".swiper-other-technic__swiper-slide:nth-last-child(-n+6)")),u(m,w,h,"click"),p(w,m,v,"click");var b=document.querySelector(".swiper-other-technic__read-more"),_=document.querySelector(".swiper-other-technic__hidden-more");u(b,_,document.querySelectorAll(".swiper-other-technic__swiper-slide"),"click"),p(_,b,f,"click"),window.addEventListener("DOMContentLoaded",(function(){var e=function(e,t,i,r){var n;e=window.matchMedia(e);var o=function(){return e.matches?(n=new Swiper(t,i),void(r&&r(n))):void(void 0!==n&&n.destroy(!0,!0))};e.addEventListener("change",o),o()};e("(max-width: 768px)",".swiper-brands",{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},loop:!0,freeMode:!0,slidesPerView:1.3,spaceBetween:16,breakpoints:{320:{slidesPerView:1.3},420:{slidesPerView:1.5},520:{slidesPerView:2},620:{slidesPerView:2.5},720:{slidesPerView:3}}}),e("(max-width: 768px)",".swiper-other-technic",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},loop:!0,freeMode:!0,slidesPerView:1.3,spaceBetween:16,breakpoints:{320:{slidesPerView:1.3},420:{slidesPerView:1.5},520:{slidesPerView:2},620:{slidesPerView:2.5},720:{slidesPerView:3}}}),e("(max-width: 768px)",".swiper-price",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},loop:!0,freeMode:!0,slidesPerView:1.2,spaceBetween:16,breakpoints:{320:{slidesPerView:1.2},420:{slidesPerView:1.5},520:{slidesPerView:1.8},620:{slidesPerView:2.2},720:{slidesPerView:2.6}}})}));var L=document.querySelector(".window-menu"),y=document.querySelector(".menu-logo__button-menu"),S=document.querySelector(".header-mobile-menu__button-close"),k=function(){L.classList.add("hidden"),a.classList.remove("blur"),document.removeEventListener("click",q)},q=function(e){L.contains(e.target)||y.contains(e.target)||k()};y.addEventListener("click",(function(){L.classList.remove("hidden"),a.classList.add("blur"),document.addEventListener("click",q)})),S.addEventListener("click",k);var g=document.querySelector(".modal-feedback"),x=document.querySelector(".modal-button-feedback"),P=document.querySelector(".header-button-feedback"),E=g.querySelector(".modal-header__button-close"),V=function(){g.classList.remove("hidden"),k(),T(),a.classList.add("blur")},M=function(){g.classList.add("hidden"),a.classList.remove("blur")};x.addEventListener("click",V),P.addEventListener("click",V),E.addEventListener("click",M);var O=document.querySelector(".modal-call"),j=O.querySelector(".modal-call-button-close"),A=L.querySelector(".call-chat-profile__button-call"),D=a.querySelector(".call-chat-profile__button-call"),B=function(){O.classList.remove("hidden"),k(),M(),a.classList.add("blur")},T=function(){O.classList.add("hidden"),a.classList.remove("blur")};D.addEventListener("click",B),A.addEventListener("click",B),j.addEventListener("click",T)},function(e,t,i){}]);
//# sourceMappingURL=bundle.js.map