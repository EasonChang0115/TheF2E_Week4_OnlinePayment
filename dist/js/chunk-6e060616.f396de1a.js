(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e060616"],{"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0e01":function(t,e,a){"use strict";var n=a("5f05"),i=a.n(n);i.a},"11e9":function(t,e,a){var n=a("52a7"),i=a("4630"),r=a("6821"),s=a("6a99"),l=a("69a8"),c=a("c69a"),u=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?u:function(t,e){if(t=r(t),e=s(e,!0),c)try{return u(t,e)}catch(a){}if(l(t,e))return i(!n.f.call(t,e),t[e])}},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"5dbc":function(t,e,a){var n=a("d3f4"),i=a("8b97").set;t.exports=function(t,e,a){var r,s=e.constructor;return s!==a&&"function"==typeof s&&(r=s.prototype)!==a.prototype&&n(r)&&i&&i(t,r),t}},"5f05":function(t,e,a){},"6b54":function(t,e,a){"use strict";a("3846");var n=a("cb7c"),i=a("0bfb"),r=a("9e1e"),s="toString",l=/./[s],c=function(t){a("2aba")(RegExp.prototype,s,t,!0)};a("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)}):l.name!=s&&c(function(){return l.call(this)})},"8b97":function(t,e,a){var n=a("d3f4"),i=a("cb7c"),r=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,a){return r(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:r}},9093:function(t,e,a){var n=a("ce10"),i=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},aa77:function(t,e,a){var n=a("5ca1"),i=a("be13"),r=a("79e5"),s=a("fdef"),l="["+s+"]",c="​",u=RegExp("^"+l+l+"*"),o=RegExp(l+l+"*$"),d=function(t,e,a){var i={},l=r(function(){return!!s[t]()||c[t]()!=c}),u=i[t]=l?e(p):s[t];a&&(i[a]=u),n(n.P+n.F*l,"String",i)},p=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(o,"")),t};t.exports=d},b7f0:function(t,e,a){"use strict";var n=a("e3d5"),i=a.n(n);i.a},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("OrderInforPanel",{attrs:{paymentType:t.paymentType},on:{onChangePaymentType:t.changePaymentType}}),a("div",{staticClass:"payment_panel"},[a("transition",{attrs:{name:"slideIn"}},[a("keep-alive",[a(t.paymentTypeName[t.paymentType],{tag:"component"})],1)],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-infor-panel"},[a("div",{staticClass:"banner"},[a("img",{attrs:{src:t.publicPath+"images/banner.png",alt:""}})]),a("div",{staticClass:"order-information"},[a("h1",[t._v("訂單資訊")]),a("h3",[t._v("商店名稱")]),a("div",{staticClass:"store-name"},[t._v("Amazing 3C online Shop")]),a("h3",[t._v("訂單編號")]),a("div",{staticClass:"order-number"},[t._v("239234dwnd321")]),a("h3",{staticClass:"price-title"},[t._v("本筆訂單將支付")]),t._m(0),a("h3",[t._v("支付方式")]),a("ul",{staticClass:"payment-style-list"},[a("li",{staticClass:"pay-style",class:"credit_card"===t.paymentType?"active":"",on:{click:function(e){return t.$emit("onChangePaymentType","credit_card")}}},[t._v("\n          信用卡\n      ")]),a("li",{staticClass:"pay-style",class:"online_atm"===t.paymentType?"active":"",on:{click:function(e){return t.$emit("onChangePaymentType","online_atm")}}},[t._v("\n          網路ATM"),a("span",[t._v("(晶片讀卡機轉帳)")])]),a("li",{staticClass:"pay-style",class:"local_atm"===t.paymentType?"active":"",on:{click:function(e){return t.$emit("onChangePaymentType","local_atm")}}},[t._v("\n          ATM櫃員機"),a("span",[t._v("(實體ATM及網銀)")])])])]),t.innerWidth<=768?a("PayStylePanelOnPad"):t._e(),a("div",{staticClass:"store-logo"},[a("img",{attrs:{src:t.publicPath+"images/store.png",alt:""}})])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"price"},[t._v("1,250"),a("span",[t._v("元")])])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"payment-style-list-pad"},[a("li",{staticClass:"pay-style",class:"credit_card"===t.payType?"active":""},[a("div",{staticClass:"title",on:{click:function(e){t.payType="credit_card"}}},[t._v("信用卡"),a("span",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.payType=""}}})]),a("div",{staticClass:"clild-block"},[a("CreditCardPaymentPanel")],1)]),a("li",{staticClass:"pay-style",class:"online_atm"===t.payType?"active":""},[a("div",{staticClass:"title",on:{click:function(e){t.payType="online_atm"}}},[t._v("網路ATM"),a("span",{staticClass:"note"},[t._v("(晶片讀卡機轉帳)")]),a("span",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.payType=""}}})]),a("div",{staticClass:"clild-block"},[a("OnlineAtmPaymentPanel")],1)]),a("li",{staticClass:"pay-style",class:"local_atm"===t.payType?"active":""},[a("div",{staticClass:"title",on:{click:function(e){t.payType="local_atm"}}},[t._v("ATM櫃員機"),a("span",{staticClass:"note"},[t._v("(實體ATM及網銀)")]),a("span",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.payType=""}}})]),a("div",{staticClass:"clild-block"},[a("LocalAtmPaymentPanel")],1)])])},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paypage_panel"},[a("h1",[t._v("信用卡付款")]),a("ul",{staticClass:"card-image-list"},[a("li",{staticClass:"card-image visa",style:{backgroundImage:"url('"+t.publicPath+"images/VISA"+("visa"===t.cardType?"_active":"")+".svg')"}}),a("li",{staticClass:"card-image master",style:{backgroundImage:"url('"+t.publicPath+"images/master"+("master"===t.cardType?"_active":"")+".svg')"}}),a("li",{staticClass:"card-image jcb",style:{backgroundImage:"url('"+t.publicPath+"images/JCB"+("jcb"===t.cardType?"_active":"")+".svg')"}}),a("li",{staticClass:"card-image union",style:{backgroundImage:"url('"+t.publicPath+"images/UnionPay"+("union"===t.cardType?"_active":"")+".svg')"}})]),a("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("Input",{ref:"cardName",attrs:{label:"持卡人",refName:"cardNameInput",required:!0,placeholder:"請輸入持卡人姓名",errorMsg:"持卡人姓名需與信用卡面姓名一致",onValidation:t.invalidCardName,focus:t.cardNameFocus},model:{value:t.formData.cardName,callback:function(e){t.$set(t.formData,"cardName",e)},expression:"formData.cardName"}}),a("CreditCardInput",{ref:"creditCardNumber",attrs:{label:"信用卡號",refName:"creditCardNumberInput",required:!0,className:"mt-30",onValidation:t.invalidCreditCardNumber,errorMsg:"請提供正確的信用卡卡號"},on:{onCardNumberChange:t.cardNumberChange}}),a("div",{staticClass:"date-and-number mt-30"},[a("ValidDataInput",{ref:"creditCardDate",attrs:{label:"有效月年",required:!0,refName:"creditCardDateInput",errorMsg:"請輸入正確的有效月年",onValidation:t.invalidDate},on:{onCardDateChange:t.cardDateChange}}),a("ValidNumberInput",{ref:"creditCardValidNumber",attrs:{label:"信用卡背面末三碼",required:!0,refName:"creditCardValidNumberInput",errorMsg:"請輸入正確的末三碼",onValidation:t.invalidNumber},model:{value:t.formData.validNumber,callback:function(e){t.$set(t.formData,"validNumber",e)},expression:"formData.validNumber"}})],1),a("Input",{ref:"phoneNumber",attrs:{label:"手機號碼",className:"mt-30",refName:"phoneNumberInput",required:!0,errorMsg:"請輸入正確的電話號碼",onValidation:t.invalidPhoneNumber,focus:t.cardPhoneNumberFocus},model:{value:t.formData.phoneNumber,callback:function(e){t.$set(t.formData,"phoneNumber",e)},expression:"formData.phoneNumber"}}),t._m(0),t._m(1)],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert"},[t._v("\n      如非台灣手機號碼請加國碼，如香港為852，則輸入852123456789。"),a("br"),t._v("若刷卡驗證採簡訊驗證，簡訊將發送至您於發卡銀行留存的手機號碼。\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-group"},[a("button",{staticClass:"second"},[t._v("確認付款")])])}],d=(a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-input",class:t.className},[a("label",[t.required?a("span",[t._v("*")]):t._e(),t._v(t._s(t.label))]),a("div",{staticClass:"input-box",style:{borderBottomColor:t.invalid?"#FF521A":""}},[a("input",{ref:t.refName,attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{change:t.inputChange,focus:t.myfocus}})]),a("div",{staticClass:"error-msg",style:{visibility:t.required&&t.invalid?"visible":"hidden",opacity:t.required&&t.invalid?"1":"0"}},[t._v("\n    "+t._s(t.errorMsg)),a("span",[t._v("❗")])])])}),p=[],m={props:{refName:{type:String,default:""},className:{type:String,default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},errorMsg:{type:String,default:""},onValidation:{type:Function,default:function(){}},focus:{type:Function,default:function(){}},value:{type:String,default:""}},data:function(){return{invalid:!1}},methods:{validation:function(){return!!this.required&&(this.invalid=this.onValidation(),this.invalid)},inputChange:function(t){!0===this.invalid&&(this.invalid=!1),this.$emit("input",t.target.value)},myfocus:function(){this.focus()}}},f=m,v=a("2877"),b=Object(v["a"])(f,d,p,!1,null,null,null),h=b.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-input credit-card",class:t.className},[a("label",[t.required?a("span",[t._v("*")]):t._e(),t._v(t._s(t.label))]),a("div",{staticClass:"input-boxes"},[a("div",{staticClass:"input-box",style:{borderBottomColor:t.invalid?"#FF521A":""}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cardNumber.input1,expression:"cardNumber.input1",modifiers:{number:!0}}],ref:t.refName,attrs:{type:"text",id:"credit-card-input1",name:"input1",maxlength:"4",placeholder:"* * * *"},domProps:{value:t.cardNumber.input1},on:{keyup:function(e){t.setBlur(e,"credit-card-input2")},input:function(e){e.target.composing||t.$set(t.cardNumber,"input1",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"line"},[t._v("-")]),a("div",{staticClass:"input-box",style:{borderBottomColor:t.invalid?"#FF521A":""}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cardNumber.input2,expression:"cardNumber.input2",modifiers:{number:!0}}],attrs:{type:"text",id:"credit-card-input2",name:"input2",maxlength:"4",placeholder:"* * * *"},domProps:{value:t.cardNumber.input2},on:{keyup:[function(e){t.setBlur(e,"credit-card-input3")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:function(e){t.setBlurUp(e,"credit-card-input1")}(e)}],input:function(e){e.target.composing||t.$set(t.cardNumber,"input2",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"line"},[t._v("-")]),a("div",{staticClass:"input-box",style:{borderBottomColor:t.invalid?"#FF521A":""}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cardNumber.input3,expression:"cardNumber.input3",modifiers:{number:!0}}],attrs:{type:"text",id:"credit-card-input3",name:"input3",maxlength:"4",placeholder:"* * * *"},domProps:{value:t.cardNumber.input3},on:{keyup:[function(e){t.setBlur(e,"credit-card-input4")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:function(e){t.setBlurUp(e,"credit-card-input2")}(e)}],input:function(e){e.target.composing||t.$set(t.cardNumber,"input3",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"line"},[t._v("-")]),a("div",{staticClass:"input-box",style:{borderBottomColor:t.invalid?"#FF521A":""}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cardNumber.input4,expression:"cardNumber.input4",modifiers:{number:!0}}],attrs:{type:"text",id:"credit-card-input4",name:"input4",maxlength:"4",placeholder:"* * * *"},domProps:{value:t.cardNumber.input4},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:function(e){t.setBlurUp(e,"credit-card-input3")}(e)},input:function(e){e.target.composing||t.$set(t.cardNumber,"input4",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"error-msg",style:{visibility:t.required&&t.invalid?"visible":"hidden",opacity:t.required&&t.invalid?"1":"0"}},[t._v("\n    "+t._s(t.errorMsg)),a("span",[t._v("❗")])])])},g=[],_=(a("6b54"),{props:{refName:{type:String,default:""},className:{type:String,default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},errorMsg:{type:String,default:""},onValidation:{type:Function,default:function(){}}},data:function(){return{invalid:!1,cardNumber:{input1:"",input2:"",input3:"",input4:""}}},watch:{cardNumber:{deep:!0,handler:function(){var t=this.cardNumber.input1+""+this.cardNumber.input2+this.cardNumber.input3+this.cardNumber.input4;this.invalid=!1,this.$emit("onCardNumberChange",t)}}},methods:{validation:function(){return!!this.required&&(this.invalid=this.onValidation(),this.invalid)},setBlur:function(t,e){var a=document.getElementById(e);t.target.value.length.toString()===t.target.getAttribute("maxlength")&&a.focus()},setBlurUp:function(t,e){var a=document.getElementById(e);0===t.target.value.length&&a.focus()}}}),C=_,N=Object(v["a"])(C,y,g,!1,null,null,null),k=N.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-input width-init",class:t.className},[a("label",[t.required?a("span",[t._v("*")]):t._e(),t._v(t._s(t.label))]),a("div",{staticClass:"input-boxes"},[a("div",{staticClass:"input-box date",style:{borderBottomColor:t.invalid?"#FF521A":""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dateInput.month,expression:"dateInput.month"}],ref:t.refName,attrs:{type:"text",id:"credit-card-month",placeholder:"MM",maxlength:"2"},domProps:{value:t.dateInput.month},on:{keyup:function(e){t.setBlur(e,"credit-card-year")},input:function(e){e.target.composing||t.$set(t.dateInput,"month",e.target.value)}}})]),a("div",{staticClass:"line latic"},[t._v("/")]),a("div",{staticClass:"input-box date",style:{borderBottomColor:t.invalid?"#FF521A":""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dateInput.year,expression:"dateInput.year"}],attrs:{type:"text",id:"credit-card-year",placeholder:"YY",maxlength:"2"},domProps:{value:t.dateInput.year},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:function(e){t.setBlurUp(e,"credit-card-month")}(e)},input:function(e){e.target.composing||t.$set(t.dateInput,"year",e.target.value)}}})])]),a("div",{staticClass:"error-msg",style:{visibility:t.required&&t.invalid?"visible":"hidden",opacity:t.required&&t.invalid?"1":"0"}},[t._v("\n    "+t._s(t.errorMsg)),a("span",[t._v("❗")])])])},x=[],I={props:{refName:{type:String,default:""},className:{type:String,default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},errorMsg:{type:String,default:""},onValidation:{type:Function,default:function(){}},focus:{type:Function,default:function(){}},value:{type:String,default:""}},watch:{dateInput:{deep:!0,handler:function(){this.invalid=!1,this.$emit("onCardDateChange",this.dateInput)}}},data:function(){return{invalid:!1,dateInput:{month:"",year:""}}},methods:{validation:function(){return!!this.required&&(this.invalid=this.onValidation(),this.invalid)},setBlur:function(t,e){var a=document.getElementById(e);t.target.value.length.toString()===t.target.getAttribute("maxlength")&&a.focus()},setBlurUp:function(t,e){var a=document.getElementById(e);0===t.target.value.length&&a.focus()}}},T=I,$=Object(v["a"])(T,P,x,!1,null,null,null),D=$.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-input width-init",class:t.className},[a("label",[t.required?a("span",[t._v("*")]):t._e(),t._v(t._s(t.label))]),a("div",{staticClass:"input-box number",style:{borderBottomColor:t.invalid?"#FF521A":""}},[a("input",{ref:t.refName,staticClass:"number",attrs:{type:"text"},domProps:{value:t.value},on:{change:t.changeNumber}})]),a("div",{staticClass:"error-msg",style:{visibility:t.required&&t.invalid?"visible":"hidden",opacity:t.required&&t.invalid?"1":"0"}},[t._v("\n    "+t._s(t.errorMsg)),a("span",[t._v("❗")])])])},E=[],S={props:{refName:{type:String,default:""},className:{type:String,default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},errorMsg:{type:String,default:""},onValidation:{type:Function,default:function(){}},value:{type:String,default:""}},data:function(){return{invalid:!1}},methods:{validation:function(){return!!this.required&&(this.invalid=this.onValidation(),this.invalid)},changeNumber:function(t){this.invalid=!1,this.$emit("input",t.target.value)}}},F=S,B=Object(v["a"])(F,A,E,!1,null,null,null),O=B.exports,M={data:function(){return{publicPath:"/TheF2E_Week4_OnlinePayment/dist/",cardType:"",formData:{cardName:"",creditCardNumber:"",phoneNumber:"",date:{month:"",year:""},validNumber:""}}},watch:{"formData.creditCardNumber":{handler:function(){var t=this.formData.creditCardNumber;if(4===Number(t[0]))this.cardType="visa";else if(5===Number(t[0])){var e=Number(t[0]+t[1]);this.cardType=e>=51&&e<=55?"master":""}else if("1800"===t.slice(0,4)||"2131"===t.slice(0,4))this.cardType="jcb";else if("3"===t.slice(0,1)){var a=Number(t.slice(0,3));this.cardType=a>=300&&a<=399?"jcb":""}else"9"===t.slice(0,1)||"62"===t.slice(0,2)||"60"===t.slice(0,2)?this.cardType="union":this.cardType=""}}},components:{Input:h,CreditCardInput:k,ValidDataInput:D,ValidNumberInput:O},methods:{submit:function(t){this.$refs.cardName.validation()?this.$refs.cardName.$refs.cardNameInput.focus():this.$refs.creditCardNumber.validation()?this.$refs.creditCardNumber.$refs.creditCardNumberInput.focus():this.$refs.creditCardDate.validation()?this.$refs.creditCardDate.$refs.creditCardDateInput.focus():this.$refs.creditCardValidNumber.validation()?this.$refs.creditCardValidNumber.$refs.creditCardValidNumberInput.focus():this.$refs.phoneNumber.validation()?this.$refs.phoneNumber.$refs.phoneNumberInput.focus():this.$router.push({path:"end"})},invalidCardName:function(){return 0===this.formData.cardName.length},invalidPhoneNumber:function(){var t=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s.\/0-9]*$/g;return!t.test(this.formData.phoneNumber)},invalidCreditCardNumber:function(){var t=/^(?:4[0-9]{12}(?:[0-9]{3})?)$/,e=/^(?:5[1-5][0-9]{14})$/,a=/^35(2[8-9]|[3-8])\\d*$/,n=/^(622(1(2[6-9]|[3-9])|[3-8]|9([[0-1]|2[0-5]))|62[4-6]|628([2-8]))\\d*?$/,i=!0;switch(this.cardType){case"visa":i=!t.test(this.formData.creditCardNumber);break;case"master":i=!e.test(this.formData.creditCardNumber);break;case"jcb":i=!a.test(this.formData.creditCardNumber);break;case"union":i=!n.test(this.formData.creditCardNumber);break;default:break}return i},invalidDate:function(){return isNaN(this.formData.date.month)||isNaN(this.formData.date.year)},invalidNumber:function(){return isNaN(this.formData.validNumber)||0===this.formData.validNumber.length},cardNameFocus:function(){this.formData.cardName=""},cardPhoneNumberFocus:function(){this.formData.phoneNumber=""},cardNumberChange:function(t){this.formData.creditCardNumber=t},cardDateChange:function(t){this.formData.date.month=t.month,this.formData.date.year=t.year}}},w=M,V=Object(v["a"])(w,u,o,!1,null,null,null),q=V.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paypage_panel onlineAtm"},[a("h1",[t._v("網路ATM")]),a("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("h3",[t._v("請選擇以下網路銀行付款")]),a("ul",{staticClass:"bank-list"},t._l(t.bankList,function(e,n){return a("li",{key:n,staticClass:"bank",class:e===t.selectedBank?"active":"",on:{click:function(a){t.selectedBank=e}}},[t._v("\n        "+t._s(e)+"\n      ")])}),0),t._m(0),t._m(1)])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert onlinAtm"},[a("ol",[a("li",[t._v("\n          選擇以上任一銀行之金融卡並使用同銀行WebATM進行轉帳享0元手續費； 使用他行WebATM，則需支付跨行手續費15元。\n        ")]),a("li",[t._v("\n          若無以上任一家銀行之金融卡，可任意選擇或點選其他金融機構進行付款， 需支付跨行手續費15元。 例：玉山金融卡在玉山WebATM轉帳享0元手續費；玉山金融卡在非玉山 WebATM轉帳收取15元手續費。\n        ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-group"},[a("button",{staticClass:"second"},[t._v("確認付款")])])}],W={data:function(){return{bankList:["兆豐國際商銀","台灣土地銀行","永豐銀行","台灣銀行","國泰世華銀行","中國信託","玉山銀行","第一銀行","台北富邦","台新銀行","其他金融機構"],selectedBank:"兆豐國際商銀"}},methods:{submit:function(t){this.$router.push({path:"end"})}}},L=W,R=Object(v["a"])(L,j,U,!1,null,null,null),Y=R.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paypage_panel onlineAtm"},[a("h1",[t._v("ATM櫃員機")]),a("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("h3",[t._v("敬啟期待")]),a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.publicPath+"images/paymentshop.svg",alt:""}})]),t._m(0)])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-group"},[a("button",{staticClass:"second"},[t._v("確認付款")])])}],z={data:function(){return{publicPath:"/TheF2E_Week4_OnlinePayment/dist/"}},methods:{submit:function(t){this.$router.push({path:"end"})}}},X=z,H=Object(v["a"])(X,G,J,!1,null,null,null),K=H.exports,Q={data:function(){return{payType:""}},components:{CreditCardPaymentPanel:q,OnlineAtmPaymentPanel:Y,LocalAtmPaymentPanel:K}},Z=Q,tt=(a("bbce"),Object(v["a"])(Z,l,c,!1,null,"764bbe7a",null)),et=tt.exports,at={props:{paymentType:{type:String,default:"credit_card"}},mounted:function(){var t=this;this.innerWidth=window.innerWidth,window.addEventListener("resize",function(){t.innerWidth=window.innerWidth})},components:{PayStylePanelOnPad:et},data:function(){return{publicPath:"/TheF2E_Week4_OnlinePayment/dist/",innerWidth:0}}},nt=at,it=(a("0e01"),Object(v["a"])(nt,r,s,!1,null,"3ef4935c",null)),rt=it.exports,st={data:function(){return{paymentType:"credit_card",paymentTypeName:{credit_card:q,online_atm:Y,local_atm:K}}},components:{OrderInforPanel:rt,CreditCardPaymentPanel:q,OnlineAtmPaymentPanel:Y,LocalAtmPaymentPanel:K},methods:{changePaymentType:function(t){this.paymentType=t}}},lt=st,ct=(a("b7f0"),Object(v["a"])(lt,n,i,!1,null,"13e33fd2",null));e["default"]=ct.exports},bbce:function(t,e,a){"use strict";var n=a("ef39"),i=a.n(n);i.a},c5f6:function(t,e,a){"use strict";var n=a("7726"),i=a("69a8"),r=a("2d95"),s=a("5dbc"),l=a("6a99"),c=a("79e5"),u=a("9093").f,o=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,m="Number",f=n[m],v=f,b=f.prototype,h=r(a("2aeb")(b))==m,y="trim"in String.prototype,g=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var a,n,i,r=e.charCodeAt(0);if(43===r||45===r){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var s,c=e.slice(2),u=0,o=c.length;u<o;u++)if(s=c.charCodeAt(u),s<48||s>i)return NaN;return parseInt(c,n)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(h?c(function(){b.valueOf.call(a)}):r(a)!=m)?s(new v(g(e)),a,f):g(e)};for(var _,C=a("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;C.length>N;N++)i(v,_=C[N])&&!i(f,_)&&d(f,_,o(v,_));f.prototype=b,b.constructor=f,a("2aba")(n,m,f)}},e3d5:function(t,e,a){},ef39:function(t,e,a){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-6e060616.f396de1a.js.map