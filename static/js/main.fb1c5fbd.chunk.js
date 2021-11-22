(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=n(11),i=n(3),u=n(4),l=n(5),m=n(7),b=n(6),h=n(12),j=n(2),d=n.n(j),p=n(0),f=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.formSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit({name:a,number:c}),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.formSubmit,className:d.a.form,children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("h3",{children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.inputChange,value:this.state.name,className:d.a.input}),Object(p.jsx)("h3",{children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.inputChange,value:this.state.number,className:d.a.input})]}),Object(p.jsx)("button",{type:"submit",className:d.a.button,children:"Add contact"})]})}}]),n}(a.Component);function O(t){var e=t.onChange,n=t.value;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",onChange:e,value:n})]})}var C=n(8),g=n.n(C);function x(t){var e=t.contacts,n=t.onClick;return Object(p.jsx)("ul",{className:g.a.list,children:e.map((function(t){return Object(p.jsxs)("li",{id:t.id,className:g.a.item,children:[Object(p.jsxs)("p",{children:[t.name,": ",t.number]}),Object(p.jsx)("button",{onClick:n,className:g.a.button,children:"Delete"})]},t.id)}))})}var v=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.inputChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.formSubmit=function(e){if(t.state.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in cotacts"));t.setState((function(t){return{contacts:t.contacts.concat({id:Object(h.a)(),name:e.name,number:e.number})}}))},t.filterContacts=function(){return 0===t.state.filter.length?t.state.contacts:t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.deleteContact=function(e){var n=t.state.contacts.map((function(t){return t.id})).indexOf(e.target.parentElement.id),a=Object(o.a)(t.state.contacts);a.splice(n,1),t.setState({contacts:a})},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:this.formSubmit}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(O,{onChange:this.inputChange,value:this.state.filter}),Object(p.jsx)(x,{contacts:this.filterContacts(),onClick:this.deleteContact})]})}}]),n}(a.Component),_=v;s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__2ax3W",input:"ContactForm_input__1P-Vj",button:"ContactForm_button__3bEjB"}},8:function(t,e,n){t.exports={list:"ContactList_list__3u7_T",item:"ContactList_item__1qKaZ",button:"ContactList_button__2rwhq"}}},[[18,1,2]]]);
//# sourceMappingURL=main.fb1c5fbd.chunk.js.map