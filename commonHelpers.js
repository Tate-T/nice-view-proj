(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),c=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")};e.addEventListener("click",c),l.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const t={openMenuBtn:document.querySelector("[data-backdrop-open]"),closeMenuBtn:document.querySelector("[data-backdrop-close]"),menu:document.querySelector("[data-backdrop]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-apartment-open]"),closeModalBtn:document.querySelector("[data-modal-apartment-close]"),modal:document.querySelector("[data-modal-apartment]")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const t={openModalBtn:document.querySelector("[data-touch-open]"),closeModalBtn:document.querySelector("[data-touch-close]"),modal:document.querySelector("[data-touch]")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();
//# sourceMappingURL=commonHelpers.js.map
