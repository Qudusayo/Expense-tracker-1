(this.webpackJsonpprojectone=this.webpackJsonpprojectone||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r);a(12),a(13);var c=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Expense Tracker"),l.a.createElement("p",{className:"header"},"A basic expense tracker Built by charliescript. Made with React"))},u=a(3),s=a(4),m=a(6),i=a(5);a(14),a(15);var d=function(e){var t=e.expense,a=t.amount,n=t.to,r=t.note,o=t.date;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"result"},l.a.createElement("div",{className:"resultTab"},l.a.createElement("p",null,"Amount:"),l.a.createElement("p",null,a)),l.a.createElement("div",{className:"resultTab"},l.a.createElement("p",null,"to:"),l.a.createElement("p",null,n)),l.a.createElement("div",{className:"resultTab"},l.a.createElement("p",null,"date:"),l.a.createElement("p",null,o)),l.a.createElement("div",{className:"resultTab"},l.a.createElement("p",null,"note:"),l.a.createElement("p",null,r)))))};var p,E,h={storeData:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getData:function(e){if(localStorage.getItem(e))return JSON.parse(localStorage.getItem(e),[]);console.log("empty data")},clearData:function(e){localStorage.getItem(e)?(localStorage.removeItem(e),console.log("data cleared")):console.log("empty data")}},v=[],g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleAmount=function(e){n.setState({amount:e.target.value})},n.handleTo=function(e){n.setState({to:e.target.value})},n.handleNote=function(e){n.setState({note:e.target.value})},n.handleDate=function(e){n.setState({date:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.amount,l=t.to,r=t.note,o=t.date;v.push({amount:parseInt(a),to:l,note:r,date:o}),n.setState({data:v,amount:"",to:"",note:"",date:""},h.storeData("expense",v)),n.getTotal()},n.getTotal=function(){var e=0;v.forEach((function(t){e+=t.amount})),n.setState({total:e},localStorage.setItem("total",e))},n.clearExp=function(){n.setState({data:[],total:""},h.clearData("expense"),localStorage.removeItem("total"))},n.state={data:[],amount:"",to:"",note:"",date:"",total:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){p=h.getData("expense"),E=h.getData("total"),this.setState({data:p,total:E})}},{key:"render",value:function(){var e=this.state.data?this.state.data.map((function(e,t){return l.a.createElement(d,{expense:e,key:t})})):null;return l.a.createElement("div",null,l.a.createElement("div",{className:"card"},l.a.createElement("section",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"amount"},"Amount"),l.a.createElement("input",{onChange:this.handleAmount,value:this.state.amount,type:"number",id:"amount",required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"to"},"To"),l.a.createElement("input",{type:"text",value:this.state.to,onChange:this.handleTo,id:"to",required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"note"},"Note"),l.a.createElement("textarea",{id:"note",onChange:this.handleNote,cols:"10",rows:"5",required:!0,value:this.state.note})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("input",{type:"date",value:this.state.date,onChange:this.handleDate,id:"date",required:!0})),l.a.createElement("input",{type:"submit",value:"Add expense"})),l.a.createElement("div",{className:"functions"},l.a.createElement("button",{onClick:this.clearExp,className:"clear"},"Clear Expense"))),l.a.createElement("aside",null,l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid grey"}},l.a.createElement("h3",null,"Expenses"),l.a.createElement("p",{className:"total"},"Total Amount: #",this.state.total," ")),e)))}}]),a}(n.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c,null),l.a.createElement(g,null))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.628581dd.chunk.js.map