/*! Sorting Types - v1.0.0 - 2019-10-24
 * 
 * Copyright (c) 2019; */

jQuery("document").ready(function(){var t=$(".st-charts"),n=$("#st-chart"),a=$('.st-js[data-sorting-types="start"]'),e=($('.st-js[data-sorting-types="stop"]'),t.innerWidth()-40),i=t.innerHeight()-40,r=n[0].getContext("2d"),o=s(50,i);function s(t,n){for(var a=[],e=0;e<t;e++)a.push(Math.floor(Math.random()*Math.floor(n)+1));return a}function c(a){r.scale(1,1),barPadding=1,barWidth=(e-o.length*barPadding)/o.length,r.clearRect(0,0,e,i),$.each(o,function(t,n){r.save(),r.fillStyle=void 0!==a&&a===t?"#fa7252":"#6dcab7",r.fillRect(t*(barWidth+barPadding),i-n,barWidth,n),r.restore()})}r.canvas.width=e,r.canvas.height=i,c(),$('.st-js[data-sorting-types="generate"]').on("click",function(){o=s(50,i),c()}),a.on("click",function(){!function(){var a=o.length,e=0,i=function(t){if(o[t]>o[t+1]){var n=o[t];o[t]=o[t+1],o[t+1]=n,e++}if(c(t+1),t<a)setTimeout(function(){i(t+1)},5);else{if(0===e)return 0;e=0,setTimeout(function(){i(0)},10)}};i(0)}()})});