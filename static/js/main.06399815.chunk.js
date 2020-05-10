(window.webpackJsonpweatherapp=window.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),l=a.n(c),o=(a(15),a(16),a(6)),i=a.n(o),m=a(9),s=a(1),u=a(2),h=a(4),p=a(3),d=a(5),v=(a(18),a(19),function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={brand:"OpenWeather",urlImg:"https://openweathermap.org/themes/openweathermap/assets/img/openweather-negative-logo-RGB.png",urlBrand:"#"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"row navbar"},n.a.createElement("div",{className:"navbar-header col-*-3"},n.a.createElement("a",{href:this.state.urlBrand,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:this.state.urlImg,alt:"openweather"}))),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("ul",{className:"menu"},n.a.createElement("li",{className:"menu-item"},n.a.createElement("a",{href:this.state.urlBrand},"Weather")),n.a.createElement("li",{className:"menu-item"},n.a.createElement("a",{href:this.state.urlBrand},"Map")),n.a.createElement("li",{className:"menu-item"},n.a.createElement("a",{href:this.state.urlBrand},"API")),n.a.createElement("li",{className:"menu-item"},n.a.createElement("a",{href:this.state.urlBrand},"Widgets")),n.a.createElement("li",{className:"menu-item"},n.a.createElement("a",{href:this.state.urlBrand},"Blog")))))}}]),t}(n.a.Component)),E=(a(20),function(e){return n.a.createElement("div",null,n.a.createElement("form",{className:"form",onSubmit:e.getWeatherInfo},n.a.createElement("input",{className:"form-item",type:"text",name:"city",placeholder:"City..."}),n.a.createElement("input",{className:"form-item",type:"text",name:"country",placeholder:"Country..."}),n.a.createElement("input",{className:"form-item btn btn-primary",type:"submit",value:"Search"})))}),y=(a(21),function(e){return n.a.createElement("div",{className:"weather-layout"},e.location.city&&e.location.country&&n.a.createElement("p",{className:"weather__key"},"City:",n.a.createElement("span",{className:"weather__value"},e.location.city,", ",e.location.country)),e.location.temperature&&n.a.createElement("p",{className:"weather__key"},"Temp:",n.a.createElement("span",{className:"weather__value"},e.location.temperature)),e.location.humidity&&n.a.createElement("p",{className:"weather__key"},"Humidity:",n.a.createElement("span",{className:"weather__value"},e.location.humidity)),e.location.error&&n.a.createElement("p",{className:"weather__key"},"Error:",n.a.createElement("span",{className:"weather__error"},e.location.error)))}),f=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"title-container__title"},e.title),n.a.createElement("h3",{className:"title-container__subtitle"},e.subtitle))},w="587b22a179e686349ea45a1e89040e3e",N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={location:{city:void 0,country:void 0,temperature:void 0,humidity:void 0,error:void 0}},a.getWeatherInfo=function(){var e=Object(m.a)(i.a.mark((function e(t){var r,n,c,l,o,m,s,u,h,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.city.value||"Ha Noi",n=t.target.country.value||"Viet Nam",e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&appid=").concat(w,"&units=metric"));case 5:return c=e.sent,e.next=8,c.json();case 8:l=e.sent,r&&n?(o=l.name,m=l.main,s=m.temp,u=m.humidity,h=l.sys.country,p={city:o,country:h,temperature:s,humidity:u,error:void 0},a.setState({location:p})):a.setState({location:{city:void 0,country:void 0,temperature:void 0,humidity:void 0,error:"Please enter the value."}}),console.log(a.state);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement(v,null)),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-5 col-md-5 col-lg-5 title-container"},n.a.createElement(f,{title:"Weather Finder",subtitle:"Find out temperature, humidity and more..."})),n.a.createElement("div",{className:"col-xs-7 col-md-7 col-lg-7 form-container"},n.a.createElement(E,{getWeatherInfo:this.getWeatherInfo}),n.a.createElement(y,{location:this.state.location})))))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.06399815.chunk.js.map