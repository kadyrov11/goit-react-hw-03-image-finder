(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1zWti",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__26rRP"}},13:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1af_S",modalContent:"Modal_modalContent__9iqiW"}},23:function(e,t,a){e.exports={App:"App_App__RRV7l"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__13IAM"}},25:function(e,t,a){e.exports={Button:"Button_Button__CdC0o"}},50:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(9),l=a.n(o),c=a(14),s=a(3),i=a(4),u=a(6),d=a(5),h=a(11),p=a.n(h),m=a(23),b=a.n(m),j=a(7),g=a.n(j),f=a(0),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state),e.reset()},e.reset=function(){e.setState({query:""})},e.handleChange=function(t){var a=t.target.value;e.setState({query:a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.handleSubmit,t=this.handleChange;return Object(f.jsx)("header",{className:g.a.Searchbar,children:Object(f.jsxs)("form",{className:g.a.SearchForm,onSubmit:e,children:[Object(f.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(f.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:t})]})})}}]),a}(n.Component),_=a(26),v=a(12),O=a.n(v),x=function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags,o=e.showModal;return Object(f.jsx)("li",{onClick:function(){return o(n)},className:O.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:a,alt:r,className:O.a.ImageGalleryItemImage,id:t})})},S=a(24),I=a.n(S),w=function(e){var t=e.list,a=e.showModal,n=t.map((function(e){return Object(f.jsx)(x,Object(_.a)({showModal:a},e),"".concat(e.id))}));return Object(f.jsx)("ul",{className:I.a.ImageGallery,children:n})},M=a(25),k=a.n(M),C=function(e){var t=e.title,a=e.onClick;return Object(f.jsx)("button",{onClick:a,className:k.a.Button,children:t})},R=a(8),q=a.n(R),F=function(){return Object(f.jsx)("div",{className:q.a.loader,children:Object(f.jsxs)("div",{className:q.a.ldsRipple,children:[Object(f.jsx)("div",{className:q.a.ldsRippleElem}),Object(f.jsx)("div",{className:q.a.ldsRippleElem})]})})},L=a(13),N=a.n(L),B=document.getElementById("modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onCloseModal=function(t){"Escape"===t.key&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.closeModal;return Object(o.createPortal)(Object(f.jsx)("div",{className:N.a.backdrop,onClick:a,children:Object(f.jsx)("div",{className:N.a.modalContent,children:t})}),B)}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={gallery:[],page:1,limit:12,query:"",loading:!1,showModal:!1,src:null},e.listRef=Object(n.createRef)(),e.handleLoadMore=function(){var t=e.state.page;e.setState((function(){return{page:t+1,loading:!0}}))},e.queryRequest=function(t){var a=t.query;e.setState({gallery:[],query:a,loading:!0})},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,src:t}}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.page,n=t.limit,r=t.query;p.a.get("https://pixabay.com/api/?q=".concat(r,"&page=").concat(a,"&key=20962845-be92ff9dd02a983b16d8c331e&per_page=").concat(n)).then((function(t){var a=t.data;e.setState((function(){return{gallery:a.hits}}))}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this,r=this.state,o=r.page,l=r.limit,s=r.query;r.loading&&p.a.get("https://pixabay.com/api/?q=".concat(s,"&page=").concat(o,"&key=20962845-be92ff9dd02a983b16d8c331e&per_page=").concat(l)).then((function(e){var t=e.data;n.setState((function(e){var a=e.gallery;return{gallery:[].concat(Object(c.a)(a),Object(c.a)(t.hits)),loading:!1}}))})),null!==a&&window.scrollTo({top:a,behavior:"smooth"})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return t.gallery.length<this.state.gallery.length?this.listRef.current.scrollHeight:null}},{key:"render",value:function(){var e=this.handleLoadMore,t=this.queryRequest,a=this.toggleModal,n=this.state,r=n.gallery,o=n.loading,l=n.showModal,c=n.src;return Object(f.jsxs)("div",{className:b.a.App,children:[Object(f.jsx)(y,{onSubmit:t}),Object(f.jsx)("div",{ref:this.listRef,children:Object(f.jsx)(w,{list:r,showModal:a})}),o&&Object(f.jsx)(F,{}),!o&&Object(f.jsx)(C,{onClick:e,title:"LoadMore"}),l&&Object(f.jsx)(G,{closeModal:a,children:Object(f.jsx)("img",{src:c,style:{height:"90vh",width:"70vw",borderRadius:"5px"}})})]})}}]),a}(n.Component);l.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__6LicC",SearchForm:"Searchbar_SearchForm__2hk18",SearchFormButton:"Searchbar_SearchFormButton__3z-BE",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3PAG9",SearchFormInput:"Searchbar_SearchFormInput__3w-5y",SearchForInput:"Searchbar_SearchForInput__2Wji3"}},8:function(e,t,a){e.exports={loader:"Loader_loader__2xIms",ldsRipple:"Loader_ldsRipple__B-DDi",ldsRippleElem:"Loader_ldsRippleElem__2t6Ti","lds-ripple":"Loader_lds-ripple__1F6XD",loaderText:"Loader_loaderText__272TG"}}},[[50,1,2]]]);
//# sourceMappingURL=main.d89a9d06.chunk.js.map