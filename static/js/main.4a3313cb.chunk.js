(this["webpackJsonpthe-small-world-of-twitter"]=this["webpackJsonpthe-small-world-of-twitter"]||[]).push([[0],{31:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var o=n(22),a=n(23),r=n(17),i=n(27),l=n(25),p=n(1),s=n.n(p),c=n(24),u=n.n(c),m=n(26),h=n(12),d=function(e){var t=e.setTooltipContent;return s.a.createElement("div",{style:{width:"90%","max-width":"1200px",margin:"auto","border-style":"solid"}},s.a.createElement(h.ComposableMap,{"data-tip":""},s.a.createElement(h.ZoomableGroup,null,s.a.createElement(h.Geographies,{geography:"https://raw.githubusercontent.com/chqr1y/twitter-locations-maps/master/ne_50m_admin_0_countries_and_twitter_woeid.json"},(function(e){return e.geographies.map((function(e){var n=-1!==e.properties.TW_WOEID;return s.a.createElement(h.Geography,{key:e.rsmKey,geography:e,fill:n?"#1DA1F2":"#BBBBBB",onMouseEnter:function(){var n=e.properties.NAME;t("".concat(n))},onMouseLeave:function(){t("")},style:{hover:{fill:"#F53",outline:"none"}}})}))})))))},T=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={mapToolTip:""},a.onChangeMapToolTip=a.onChangeMapToolTip.bind(Object(r.a)(a)),a}return Object(a.a)(n,[{key:"onChangeMapToolTip",value:function(e){this.setState({mapToolTip:e})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d,{setTooltipContent:this.onChangeMapToolTip}),s.a.createElement(m.a,null,this.state.mapToolTip))}}]),n}(s.a.Component);u.a.render(s.a.createElement(T,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4a3313cb.chunk.js.map