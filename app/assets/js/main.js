/*! Sorting Types - v1.0.0 - 2019-10-03
 * 
 * Copyright (c) 2019; */

jQuery("document").ready(function(){function t(){d3.select(".st-charts > *").remove();var t=d3.select(".st-charts").append("svg").attr("class","st-chart"),r=$(".st-chart"),n=r.innerHeight()-20,e=function(t,r){for(var n=[],e=0;e<t;e++)n.push(Math.floor(Math.random()*Math.floor(r)+1));return console.log(n),n}(20,n),a=(r.innerWidth()-20)/e.length;t.selectAll("rect").data(e).enter().append("rect").attr("class","st-chart__bar").attr("y",function(t){return n-t}).attr("height",function(t){return t}).attr("width",a-5).attr("transform",function(t,r){return"translate("+[a*r,0]+")"})}$('.st-js[data-sorting-types="generate"]').on("click",function(){t()}),t()});