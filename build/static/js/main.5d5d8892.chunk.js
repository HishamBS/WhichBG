(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{139:function(e,t,a){e.exports=a(201)},144:function(e,t,a){},145:function(e,t,a){},166:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(31),r=a.n(o),i=(a(144),a(12)),l=a(13),c=a(16),m=a(15),d=a(20),u=a(7),p=(a(145),a(18)),h=a.n(p),f=a(207),g=a(208),v=a(209),b=a(6),E=a.n(b),k=a(53),_=a.n(k),w=a(93),y=a(97),N=a.n(y),S=void 0,j=function(){var e=Object(w.a)(_.a.mark((function e(t){var a,n,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=new Date,localStorage.usertoken){e.next=7;break}window.location.href="/login",h()({title:"You Need To Login First",icon:"warning",button:"ok"}),console.log("offline"),e.next=13;break;case 7:return n=localStorage.getItem("usertoken"),e.next=10,N()(n);case 10:s=e.sent,s.exp<a.getTime()/1e3&&h()({title:"You Need To sign in",icon:"warning",button:"ok"}).then((function(){S.props.history.push("/login")}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(a(166),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={img:e.props.post.post_image,title:e.props.post.post_title,id:e.props.post._id,likes:e.props.post.post_likes,desc:e.props.post.post_desc,comments:e.props.post.post_comments.length,owner:e.props.post.post_owner.nickname,user_id:localStorage.getItem("user_id"),userLiked:[]},e.getUserLiked=function(){E.a.get("/api/v1/users/".concat(localStorage.getItem("user_id"),"/likedposts")).then((function(t){e.setState({userLiked:t.data})}))},e.handleLikeButton=function(){localStorage.getItem("user_id")&&E.a.post("/api/v1/posts/like/".concat(e.state.id),{user_id:e.state.user_id}).then((function(t){e.setState({likes:t.data.post.post_likes})})).catch((function(e){return console.log(e)}));var t=!1;e.state.userLiked.forEach((function(a){e.state.id==a._id&&(t=!0)})),t?e.state.userLiked=e.state.userLiked.filter((function(t){return e.state.id!=t._id})):e.state.userLiked.push(e.props.post)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("usertoken")&&this.getUserLiked(),this.state.userLiked.find((function(t){return t._id==e.state.id}))&&this.setState({liked:!0})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"item",id:"card_".concat(this.state.id)},s.a.createElement("img",{className:"item-img",onClick:function(){return e.props.history.push("/comments/"+e.state.id)},id:"img_".concat(this.state.id),src:this.state.img}),s.a.createElement("span",{id:"title_".concat(this.state.id),className:"item-title"},this.state.title),s.a.createElement("div",{className:"item-footer"},s.a.createElement("span",{className:"item-supTitle",id:"desc_".concat(this.state.id)},this.state.desc),s.a.createElement("div",{className:"item-buttons"},s.a.createElement("button",{className:"item-button",id:"like_btn_".concat(this.state.id),onClick:function(t){j(),e.handleLikeButton(),window.location.reload(!0)}},this.state.userLiked.find((function(t){return t._id==e.state.id}))?"\u2764\ufe0f":"\ud83e\udd0d",this.state.likes),s.a.createElement("button",{className:"item-button",onClick:function(){return e.props.history.push("/comments/"+e.state.id)},id:"comment_btn_".concat(this.state.id)},"\ud83d\udcad",this.state.comments),s.a.createElement("button",{className:"item-button",id:"owner_btn_".concat(this.state.id)},"\ud83d\udcf7",this.state.owner)))))}}]),a}(s.a.Component)),x=Object(u.g)(O),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.allPosts.map((function(t){return s.a.createElement(f.a,{id:"post_".concat(e.props.allPosts.indexOf(t)),sm:4,className:"mb-3"},s.a.createElement(x,{post:t}))}));return s.a.createElement("div",{className:"mt-5 mb-5"},s.a.createElement(g.a,null,s.a.createElement(v.a,null,t)))}}]),a}(n.Component),P=a(23),L=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={allPosts:[]},e.getBGS=function(){E.a.get("/api/v1/posts").then((function(t){return e.setState({allPosts:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getBGS()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(P.a,null,s.a.createElement("title",null,"WhichBG? - Home")),s.a.createElement(C,{allPosts:this.state.allPosts}))}}]),a}(n.Component),I=a(211),B=a(212),A=a(210),U=(a(171),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"bla"},s.a.createElement("h1",null,"Whoops"),s.a.createElement("p",null,"Something Went Wrong"))}}]),a}(n.Component)),W=a(75),D=a(100),F=a.n(D),G=function(e){var t=Object(u.f)(),a=Object(n.useState)(""),o=Object(W.a)(a,2),r=o[0],i=o[1],l=Object(n.useState)(""),c=Object(W.a)(l,2),m=c[0],d=c[1],p=Object(n.useState)(""),f=Object(W.a)(p,2),g=f[0],v=f[1],b=Object(n.useState)(""),k=Object(W.a)(b,2),_=k[0],w=k[1];Object(n.useEffect)((function(){_&&E.a.post("/api/v1/posts/newpost",{post_title:r,post_desc:m,post_image:_,post_owner:localStorage.getItem("user_id")}).then((function(e){e.error?F.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(F.a.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"}),t.push("/"),window.location.reload(!0))})).catch((function(e){console.log(e)}))}),[_]);return j(),s.a.createElement("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},id:"upload_card"},s.a.createElement(P.a,null,s.a.createElement("title",null,"WhichBG? - Upload")),s.a.createElement("input",{type:"text",placeholder:"title",value:r,onChange:function(e){return i(e.target.value)},id:"upload_title",maxLength:"20"}),s.a.createElement("input",{type:"text",placeholder:"description",value:m,onChange:function(e){return d(e.target.value)},id:"upload_desc",maxLength:"55"}),s.a.createElement("div",{className:"file-field input-field"},s.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},s.a.createElement("span",{style:{color:"white"}},"Uplaod Image"),s.a.createElement("input",{id:"upload_selectimage",type:"file",accept:".gif,.jpg,.jpeg,.png",onChange:function(e){e.target.files[0].size>2097152?h()({title:"No!",text:"Image is larger than 2mb",icon:"error",button:"sorry"}):v(e.target.files[0])},maxSize:2097152})),s.a.createElement("div",{className:"file-path-wrapper"},s.a.createElement("input",{className:"file-path validate",type:"text"}))),s.a.createElement("button",{id:"upload_submit",style:{color:"white"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return function(){if(r&&m&&g){var e=new FormData;e.append("file",g),e.append("upload_preset","whichbg"),e.append("cloud_name","dfrj1nea2"),E.a.post("https://api.cloudinary.com/v1_1/dfrj1nea2/image/upload",e).then((function(e){w(e.data.url)})).catch((function(e){console.log(e)}))}else h()({title:"No!",text:"All Fields Must Be Filled",icon:"error",button:"ok"})}()}},"Submit post"),s.a.createElement("div",null,s.a.createElement("p",{style:{color:"red",fontSize:"12px"}},"2mb max size , only following formats (gif,jpg,jpeg,png)")))},T=(a(172),a(173),a(213)),z=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={img:e.props.post.post_image,title:e.props.post.post_title,id:e.props.post._id,likes:e.props.post.post_likes,desc:e.props.post.post_desc,comments:e.props.post.post_comments,comment:"",sender:localStorage.getItem("user_nickname"),user_id:localStorage.getItem("user_id")},e.handleChange=function(t){e.setState({comment:t.target.value})},e.handleSendButton=function(){E.a.post("/api/v1/posts/newcomment/".concat(e.state.id),{user_id:e.state.user_id,comment:e.state.comment,sender:e.state.sender}).then((function(t){e.refs.inputField.value="",e.setState({comments:t.data.post.post_comments})})).catch((function(e){return console.log(e)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return j(),s.a.createElement("div",{className:"comment-continer"},s.a.createElement(P.a,null,s.a.createElement("title",null,"WhichBG? - ".concat(this.state.title," Comments"))),s.a.createElement("h1",{className:"comment-title"},"Write Something About The Picture"),s.a.createElement("div",{className:"comment"},s.a.createElement("div",{className:"test"},s.a.createElement(T.a,{className:"comment-form",id:"typing_area",placeholder:"Write here , max chars 120 , click enter to send...","aria-describedby":"basic-addon2",onChange:this.handleChange,ref:"inputField",maxLength:"120",onKeyDown:function(t){13==t.keyCode&&e.handleSendButton()}}),s.a.createElement("table",{className:"comment-table",bordered:!0,id:"comments_table"},this.state.comments.reverse().map((function(t){return s.a.createElement("tr",{style:{textAlign:"left"}},s.a.createElement("td",{id:"sender_name_".concat(e.state.comments.indexOf(t)),style:{width:"10px"}},t.sender),s.a.createElement("td",{id:"comment_".concat(e.state.comments.indexOf(t))},t.comment))})))),s.a.createElement("div",{className:"backgroundImage",onClick:function(){window.open(e.state.img)},style:{backgroundImage:"url(".concat(this.props.post.post_image,")")}})),s.a.createElement("img",null))}}]),a}(n.Component),q=a(21),M=a(35),Z=a(214),Y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={data:{}},e}return Object(l.a)(a,[{key:"addDataToState",value:function(e){this.setState({data:e})}},{key:"render",value:function(){var e=this;return this.state?s.a.createElement("div",null,s.a.createElement(P.a,null,s.a.createElement("title",null,"WhichBG? - SignUp")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(q.d,{initialValues:{nickname:"",email:"",password:"",confirmPassword:""},validationSchema:M.a().shape({nickname:M.c().required("Nickname is required"),email:M.c().email("Email is invalid").required("Email is required"),password:M.c().min(8,"Password must be at least 8 numbers").matches(/[a-z]/,"at least one lowercase char").matches(/[A-Z]/,"at least one uppercase char").matches(/[a-zA-Z]+[^a-zA-Z\s]+/,"at least 1 number or special char (@,!,#, etc).").required("Password is required"),confirmPassword:M.c().oneOf([M.b("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(t){e.addDataToState(t);var a,n={nickname:e.state.data.nickname,email:e.state.data.email,password:e.state.data.password};(a=n,E.a.post("/api/v1/users/register",a).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(t){t?h()({title:"Your successfully Registered",text:"Welcome On Board",icon:"success",button:"ok"}).then((function(){e.props.history.push("/login")})):h()({title:"Check your fields",text:"something is not correct",icon:"error",button:"ok"})})).catch((function(e){console.log(e)}))},render:function(e){var t=e.errors,a=(e.status,e.touched);return s.a.createElement(v.a,{className:"justify-content-md-center"},s.a.createElement(Z.a,{style:{width:"27rem",height:"33rem"},id:"signup_card"},s.a.createElement(Z.a.Body,null,s.a.createElement(Z.a.Title,{id:"signup_title"},"Registeration Form "),s.a.createElement(q.c,null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"nickname"},"Nickname"),s.a.createElement(q.b,{name:"nickname",type:"text",className:"form-control"+(t.nickname&&a.nickname?" is-invalid":""),id:"signup_nickname"}),s.a.createElement(q.a,{name:"nickname",component:"div",className:"invalid-feedback",id:"signup_nickname_err"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement(q.b,{name:"email",type:"text",className:"form-control"+(t.email&&a.email?" is-invalid":""),id:"signup_email"}),s.a.createElement(q.a,{name:"email",component:"div",className:"invalid-feedback",id:"signup_email_err"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(q.b,{name:"password",type:"password",className:"form-control"+(t.password&&a.password?" is-invalid":""),id:"signup_password"}),s.a.createElement(q.a,{name:"password",component:"div",className:"invalid-feedback",id:"signup_password_err"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),s.a.createElement(q.b,{name:"confirmPassword",type:"password",className:"form-control"+(t.confirmPassword&&a.confirmPassword?" is-invalid":""),id:"signup_confirm_password"}),s.a.createElement(q.a,{name:"confirmPassword",component:"div",className:"invalid-feedback",id:"signup_confirm_password_err"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{id:"signup_submit",type:"submit",className:"btn btn-primary mr-2"},"Register"),s.a.createElement("button",{id:"signup_reset",type:"reset",className:"btn btn-secondary"},"Reset"))))))}}),s.a.createElement("h4",null," ",this.state.message)):null}}]),a}(n.Component),R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={data:{},user:"",message:"",isAuthenticated:!1},e}return Object(l.a)(a,[{key:"addDataToState",value:function(e){var t,a=this;this.setState({data:e}),(t=this.state.data,E.a.post("/api/v1/users/login",t).then(function(){var e=Object(w.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("usertoken",t.data.token),e.next=3,N()(t.data.token);case 3:return a=e.sent,localStorage.setItem("user_id",a.id),localStorage.setItem("user_nickname",a.nickname),e.abrupt("return",t.data.token);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))).then((function(e){e?h()({title:"Your successfully logged in",text:"Welcome Back ".concat(localStorage.getItem("user_nickname")),icon:"success",button:"ok"}).then((function(){a.props.history.push("/"),window.location.reload(!0)})):h()({title:"Check your credintials",text:"either your username or password is wrong",icon:"error",button:"ok"})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(P.a,null,s.a.createElement("title",null,"WhichBG? - Login")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(v.a,{className:"justify-content-md-center"},s.a.createElement(Z.a,{style:{width:"27rem",height:"30rem"},id:"login_card"},s.a.createElement(Z.a.Body,null,s.a.createElement(Z.a.Title,{id:"login_title"},"Login Form"),s.a.createElement(q.d,{initialValues:{email:"",password:""},validationSchema:M.a().shape({email:M.c().email("Email is invalid").required("Email is required"),password:M.c().min(8,"Password must be at least 8 numbers").matches(/[a-z]/,"at least one lowercase char").matches(/[A-Z]/,"at least one uppercase char").matches(/[a-zA-Z]+[^a-zA-Z\s]+/,"at least 1 number or special char (@,!,#, etc).")}),onSubmit:function(t){e.addDataToState(t)},render:function(e){var t=e.errors,a=(e.status,e.touched);return s.a.createElement(q.c,null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement(q.b,{name:"email",type:"text",className:"form-control"+(t.email&&a.email?" is-invalid":""),id:"login_email"}),s.a.createElement(q.a,{name:"email",component:"div",className:"invalid-feedback",id:"login_email_err"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(q.b,{name:"password",type:"password",className:"form-control"+(t.password&&a.password?" is-invalid":""),id:"login_password"}),s.a.createElement(q.a,{name:"password",component:"div",className:"invalid-feedback",id:"login_password_err"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{id:"login_submit",type:"submit",className:"btn btn-primary mr-2"},"Login")))}}),s.a.createElement(d.b,{to:"/signup",id:"login_signup"},"Don't have accoun? Signup")))))}}]),a}(n.Component),$=(a(54),a(195),a(138)),H=(a(196),function(e){var t=e.children,a=e.signInWithGoogle,n=e.inverted,o=Object($.a)(e,["children","signInWithGoogle","inverted"]);return s.a.createElement("button",Object.assign({className:" ".concat(n?"inverted":"","  ").concat(a?"google-signin":""," custom-button")},o),t)}),J=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={user_id:localStorage.getItem("user_id"),nickname:"",total_likes:"",total_comments:"",email:"",disabled:!0},e.handleUserInfo=function(){E.a.get("/api/v1/users/".concat(e.state.user_id)).then((function(t){t&&e.setState({nickname:t.data.nickname,total_comments:t.data.total_comments,total_likes:t.data.total_likes,email:t.data.email})}))},e.handleSavePassword=function(){/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e.state.password)?E.a.put("/api/v1/users/editpassword/".concat(e.state.user_id),{password:e.state.password}).then((function(e){"password edited successfully"==e.data.msg&&(localStorage.removeItem("usertoken"),localStorage.removeItem("user_id"),localStorage.removeItem("user_nickname"),h()({title:"Password Changed Successfully",text:"You need to loging again with the new password",icon:"success",button:"ok"}).then((function(){window.location.href="/login"})))})):h()({title:"Password Formation not correct",text:"8 chars , at least 1 small letter , 1 capital , 1 number , 1 special char",icon:"error",button:"ok"})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.handleUserInfo()}},{key:"render",value:function(){var e=this;return j(),s.a.createElement("div",{className:"profile"},s.a.createElement(P.a,null,s.a.createElement("title",null,"WhichBG? - Profile")),s.a.createElement("h1",{className:"myProfile"},"Personal Information"),s.a.createElement("span",{className:"profile-name"},s.a.createElement("span",null,"Email :"),s.a.createElement("span",{id:"email_value"},this.state.email)),s.a.createElement("span",{className:"profile-name"},s.a.createElement("span",null,"Nickname :"),s.a.createElement("span",{id:"nickname_value"},this.state.nickname)),s.a.createElement("span",{className:"profile-name"},s.a.createElement("span",null,"Total Likes :"),s.a.createElement("span",{id:"total_likes_value"},this.state.total_likes)),s.a.createElement("span",{className:"profile-name"},s.a.createElement("span",null,"Total Comments :"),s.a.createElement("span",{id:"total_comments_value"},this.state.total_comments)),s.a.createElement("span",{className:"profile-name"},s.a.createElement("span",null,"Password :"),s.a.createElement("input",{id:"password_input",type:"password",name:"password",placeholder:"click edit to enable typing , then click save to save new password",disabled:this.state.disabled,onChange:function(t){e.setState({password:t.target.value})}})),s.a.createElement("div",{className:"profile-button"},s.a.createElement(H,{id:"edit_password_btn",inverted:!0,onClick:function(){e.setState({disabled:!e.state.disabled})}},"Edit Password"),s.a.createElement(H,{id:"save_password_btn",inverted:!0,onClick:this.handleSavePassword},"Save Password")))}}]),a}(s.a.Component),V=(a(197),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={userLiked:[],userUploaded:[],user_id:localStorage.getItem("user_id")},e.handleDelete=function(e){E.a.delete("/api/v1/posts/".concat(e)).then((function(e){"deleted successfully"==e.data.msg&&h()({title:"Successfully Deleted",text:"\ud83d\ude14",icon:"success",button:"ok"}).then((function(){window.location.reload(!0)}))}))},e.handleUserLiked=function(){E.a.get("/api/v1/users/".concat(e.state.user_id,"/likedposts")).then((function(t){e.setState({userLiked:t.data})}))},e.handleUserUploaded=function(){E.a.get("/api/v1/users/".concat(e.state.user_id,"/uploadedposts")).then((function(t){console.log(t),e.setState({userUploaded:t.data})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.handleUserLiked(),this.handleUserUploaded()}},{key:"render",value:function(){var e=this;return j(),s.a.createElement("div",{className:"feed-page"},s.a.createElement(P.a,null,s.a.createElement("title",null,"WhichBG? - My Feed")),s.a.createElement("div",{className:"feed-likes"},s.a.createElement("h1",{className:"feed-title"},"Likes"),this.state.userLiked?this.state.userLiked.map((function(t){return s.a.createElement(x,{id:"post_".concat(e.state.userLiked.indexOf(t)),post:t})})):null),s.a.createElement("div",{className:"feed-uplode"},s.a.createElement("h1",{className:"feed-title"},"Upload"),this.state.userUploaded?this.state.userUploaded.map((function(t){return s.a.createElement("div",{style:{position:"right"}},s.a.createElement("button",{id:"delete_post_btn_".concat(e.state.userUploaded.indexOf(t)),onClick:function(){e.handleDelete(t._id)}},"\u274cDelete"),s.a.createElement(x,{id:"post_".concat(e.state.userUploaded.indexOf(t)),post:t}))})):null))}}]),a}(s.a.Component)),K=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={allPosts:[]},e.getBGS=function(){E.a.get("/api/v1/posts").then((function(t){return e.setState({allPosts:t.data})})).catch((function(e){return console.log(e)}))},e.handleClick=function(e){localStorage.removeItem("usertoken"),localStorage.removeItem("user_id"),localStorage.removeItem("user_nickname"),h()({title:"Logout successfully",icon:"success",showConfirmButton:!1,timer:2500}).then(window.location.href="/")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getBGS()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(d.a,null,localStorage.usertoken?s.a.createElement(I.a,{expand:"lg"},s.a.createElement(I.a.Brand,{href:"/"},"WhichBG?"),s.a.createElement(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(I.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(B.a,{className:"ml-auto"},s.a.createElement(d.c,{className:"nav-link",to:"/",id:"navbar_home"},"Home"),s.a.createElement(d.c,{className:"nav-link",to:"/profile",id:"navbar_profile"},"My Profile"),s.a.createElement(d.c,{className:"nav-link",to:"/myfeed",id:"navbar_myfeed"},"My Feed"),s.a.createElement(d.c,{className:"nav-link",to:"/upload",id:"navbar_upload"},"Upload"),s.a.createElement(d.c,{as:A.a,onClick:this.handleClick,className:"nav-link",to:"/",id:"navbar_logout"},"Logout")))):s.a.createElement(I.a,{expand:"lg"},s.a.createElement(I.a.Brand,{href:"/"},"WhichBG?"),s.a.createElement(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(I.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(B.a,{className:"ml-auto"},s.a.createElement(d.c,{className:"nav-link",to:"/",id:"navbar_home"},"Home"),s.a.createElement(d.c,{className:"nav-link",to:"/login",id:"navbar_login"},"Login"),s.a.createElement(d.c,{className:"nav-link",to:"/signup",id:"navbar_signup"},"SignUp")))),s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/",component:L}),s.a.createElement(u.a,{exact:!0,path:"/upload",component:G}),s.a.createElement(u.a,{path:"/signup",component:Y}),s.a.createElement(u.a,{path:"/login",component:R}),s.a.createElement(u.a,{path:"/profile",component:J}),s.a.createElement(u.a,{path:"/myfeed",component:V}),s.a.createElement(u.a,{path:"/comments/:id",render:function(t){var a=t.match;return e.state.allPosts?s.a.createElement(z,{post:e.state.allPosts.find((function(e){return e._id===a.params.id}))}):s.a.createElement(U,null)}}),s.a.createElement(u.a,{path:"*",component:U}))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(198),a(199),a(200);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.5d5d8892.chunk.js.map