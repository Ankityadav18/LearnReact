
/**
   * <div id="parent">
    * <div id="child">
    * <h1>Hi i am tag</h1>
    * <h1>Hi i am tag</h1>
    * </div>
   * </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const parent=React.createElement('div',{id:"parent"},
      React.createElement('div',{id:"child"},
        [React.createElement('h1',{id:"heading"}," hi i am h1 tag"),
          React.createElement('h1',{id:"heading"}," hi i am h2 tag")
        ]
      )
)





const  heading=React.createElement('h1',{id:"heading"},'Hello world from react' );
 const  root=ReactDOM.createRoot(document.getElementById('root'));


 console.log(parent);//objectreturnkarega.
 root.render(parent)

 //{}=thisistheplacewhereyougiveattributetoyourtag.