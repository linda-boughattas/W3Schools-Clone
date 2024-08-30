export default [
    {
        id: 1,
        name: "HTML",
        description: "The language for building web pages",
        example:`
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
        &lt;title&gt;HTML Tutorial&lt;/title&gt;
        &lt;body&gt;

            &lt;h1&gt;This is a heading&lt;/h1&gt;
            &lt;p&gt;This is a paragraph.&lt;/p&gt;

        &lt;/body&gt;
    &lt;/html&gt;`,
        bgColor:'--color-gray-100',
        textColor:"--color-white",
        buttonColor:'white',
        learnLink:'https://www.w3schools.com/html/default.asp',
        referenceLink:'https://www.w3schools.com/tags/default.asp',
        tryLink:'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default_default'
},
    {
        id: 2,
        name: "CSS",
        description: "The language for styling web pages",
        example:`<br/>
    body {<br/>
    &nbsp;&nbsp;background-color: lightblue;<br/>
    }<br/>
    <br/>
    h1 {<br/>
    &nbsp;&nbsp;color: white;<br/>
    &nbsp;&nbsp;text-align: center;<br/>
    }<br/>

`,
        bgColor:'--color-mediumseagreen-50',
        textColor:"--color-black",
        buttonColor:'gray',
        learnLink:'https://www.w3schools.com/css/default.asp',
        referenceLink:'https://www.w3schools.com/cssref/index.php',
        tryLink:'https://www.w3schools.com/css/tryit.asp?filename=trycss_default'
},
    {
        id: 3,
        name: "JavaScript",
        description: "The language for programming web pages",
        example:`<br/>
    &lt;button onclick=&quot;myFunction()&quot;&gt;Click Me!&lt;/button&gt;
    ​
    &lt;script&gt;
    function myFunction() {
    let x = document.getElementById(&quot;demo&quot;);
    x.style.fontSize = &quot;25px&quot;;
    x.style.color = &quot;red&quot;;
    }
    &lt;/script&gt;<br/>

`,
        bgColor:'--color-khaki-100',
        textColor:"--color-black",
        buttonColor:'gray',
        learnLink:'https://www.w3schools.com/js/default.asp',
        referenceLink:'https://www.w3schools.com/jsref/default.asp',
        tryLink:'https://www.w3schools.com/js/tryit.asp?filename=tryjs_default'
},
    {
        id: 4,
        name: "Python",
        description: "A popular programming language",
        example:`<br/>
    if 5 &gt; 2:
    print(&quot;Five is greater than two!&quot;)<br/>

`,
        bgColor:'--color-gray-100',
        textColor:"--color-white",
        buttonColor:'white',
        learnLink:'https://www.w3schools.com/python/default.asp',
        referenceLink:'https://www.w3schools.com/python/python_reference.asp',
        tryLink:'https://www.w3schools.com/python/trypython.asp?filename=demo_indentation'
},
    {
        id: 5,
        name: "SQL",
        description: "A language for accessing databases",
        example:`<br/>
    if 5 &gt; 2:
    print(&quot;Five is greater than two!&quot;)<br/>

`,
        bgColor:'--color-white',
        textColor:"--color-black",
        buttonColor:'gray',
        learnLink:'https://www.w3schools.com/sql/default.asp',
        referenceLink:'https://www.w3schools.com/sql/sql_ref_keywords.asp',
        tryLink:'https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where'
}]