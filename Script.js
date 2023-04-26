var card = React.createElement('div',{style : {
    // border:'2px solid red',
    width :'350px',
    width :'450px',
    heigth : "300px",
    padding : '20px',
    display:'flex',
@@ -16,20 +16,23 @@ var card = React.createElement('div',{style : {

}},
React.createElement('div',{style : {
    width : "300px",
    heigth : "300px",
    width : "400px",
    heigth : "250px",
    // border : "2px solid red",
    backgroundColor : "white",
    borderRadius : "8px"
}},[
React.createElement(
"img",
{src : "./profile.jpg",width : "100%",heigth : "100%"},null),
React.createElement('h1',null,"RISHAV JAIN"),
React.createElement('h1',null,"Ramesh"),
React.createElement('p',null,"UI/UX Deginer"),
React.createElement('div',{style : {
    // border : "2px solid red",
    width : "100%",
    fontSize:'1.5rem',
    // fontWeight:'800',

    display : "flex",
    justifyContent : "space-around",
    alignItems : "center",
@@ -42,10 +45,11 @@ React.createElement('p',null,"100k"),
]),
React.createElement('div',{style : {
    width : "100%",
    // heigth : "60px",
    heigth : "60px",
    display : "flex",
    fontSize:'1.3rem',
    justifyContent : "space-around",
    // border : "2px solid red",
    // border : "2px solid blue",
    alignItems : "center",
    // borderRadius : "8px"

