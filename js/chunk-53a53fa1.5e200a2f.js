(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53a53fa1"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),i=n("5530"),r=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),s=n("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(n,a){return n[t+Object(s["s"])(a)]=e(),n}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},h=u("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){var a=y[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var x=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},h),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,i=e.data,r=e.children,s="";for(var l in n)s+=String(n[l]);var c=x.get(s);return c||function(){var t,e;for(e in c=[],m)m[e].forEach((function(t){var a=n[t],i=b(e,t,a);i&&c.push(i)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(s,c)}(),t(n.tag,Object(o["a"])(i,{staticClass:"row",class:c}),r)}})},"1aa9":function(t,e,n){"use strict";n("9919")},"1d4d":function(t,e,n){"use strict";n("a9e3"),n("c96a"),n("d81d"),n("696f");var a=n("9d26"),i=n("a9ad"),r=n("2b0e"),o=r["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var a=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},a)}}}),s=n("af2b"),l=n("5607"),c=r["a"].extend({name:"rippleable",directives:{ripple:l["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),u=n("7560"),d=n("80d2"),f=n("58df");e["a"]=Object(f["a"])(i["a"],o,c,s["a"],u["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,a=t.light,i=t.medium,r=t.small,o=t.size,s=t.xLarge,l=t.xSmall;return{dark:e,large:n,light:a,medium:i,size:o,small:r,xLarge:s,xSmall:l}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(t){var e=this;return function(n){if(!e.readonly){var a=e.genHoverIndex(n,t);e.clearable&&e.internalValue===a?e.internalValue=0:e.internalValue=a}}},createProps:function(t){var e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex:function(t,e){var n=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(n=!n),e+(n?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter:function(t,e){var n=this;this.runDelay("open",(function(){n.hoverIndex=n.genHoverIndex(t,e)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(t){var e=this,n=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(n);var i={click:n.click};return this.hover&&(i.mouseenter=function(n){return e.onMouseEnter(n,t)},i.mouseleave=this.onMouseLeave,this.halfIncrements&&(i.mousemove=function(n){return e.onMouseEnter(n,t)})),this.$createElement(a["a"],this.setTextColor(this.getColor(n),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,t+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:i}),[this.getIconName(n)])}},render:function(t){var e=this,n=Object(d["g"])(Number(this.length)).map((function(t){return e.genItem(t)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},"696f":function(t,e,n){},9919:function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l}));var a=n("b0af"),i=n("80d2"),r=Object(i["h"])("v-card__actions"),o=Object(i["h"])("v-card__subtitle"),s=Object(i["h"])("v-card__text"),l=Object(i["h"])("v-card__title");a["a"]},a523:function(t,e,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var a=n("2b0e");function i(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,i=n.data,r=n.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var o=i.attrs;if(o){i.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(i.staticClass+=" ".concat(s.join(" ")))}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,r)}})}var r=n("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,i=e.data,o=e.children,s=i.attrs;return s&&(i.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),o)}})},e206:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("contentseries")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"my-12"},[n("v-row",t._l(t.series,(function(e){return n("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[n("v-card",{attrs:{"max-width":"300",outlined:""},on:{click:t.gotoDetail}},[n("v-card-title",{staticClass:"pa-3"},[n("v-img",{attrs:{height:"300",src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"}})],1),n("v-card-text",{staticClass:"title text-truncate px-2 pt-1 pb-0 px-4"},[t._v(" "+t._s(e)+" ")]),n("v-card-actions",{staticClass:"pt-1 pb-3 px-3 body-2"},[n("v-rating",{attrs:{color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"$ratingFull","half-increments":"",hover:"",dense:"",readonly:"",size:"22"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),n("v-spacer"),n("div",{staticClass:"text-review"},[t._v("12 reviews")])],1)],1)],1)})),1)],1)},o=[],s=(n("ac1f"),n("5319"),{name:"contentseries",props:{items:Object,default:[]},data:function(){return{rating:4,series:["Nevertheless","Police University","Lovers of the Red Sky","Hometown Cha-Cha-Cha","River Where the Moon Rises","Vincenzo","Youth of May","Hospital Playlist Season 2","Sisyphus: The Myth","Taxi Driver","So I Married An Anti-Fan","Law School","Mine"]}},methods:{gotoDetail:function(){this.$router.replace({name:"detail"})}},mounted:function(){}}),l=s,c=(n("1aa9"),n("2877")),u=n("6544"),d=n.n(u),f=n("b0af"),v=n("99d9"),h=n("62ad"),p=n("a523"),g=n("adda"),m=n("1d4d"),y=n("0fd9"),b=n("2fa4"),x=Object(c["a"])(l,r,o,!1,null,"a6212916",null),C=x.exports;d()(x,{VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:h["a"],VContainer:p["a"],VImg:g["a"],VRating:m["a"],VRow:y["a"],VSpacer:b["a"]});var j={name:"koreaseries",components:{contentseries:C},data:function(){return{}},mounted:function(){},methods:{}},S=j,I=Object(c["a"])(S,a,i,!1,null,"2587f195",null);e["default"]=I.exports}}]);
//# sourceMappingURL=chunk-53a53fa1.5e200a2f.js.map