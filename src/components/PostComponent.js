import React from "react";



var PostComponent =  (props)=>{

    let dispatch = props.dispatch;
    let state = props.state;
    let post = props.post;


  //  console.log('inallport',state);
    
    
        return(
            <React.Fragment>
            <div id='PostComponent'>
               <div className="PostTitle ">{post.title}</div>
               <div className="PostBody">{post.desc}</div>
            </div>
            </React.Fragment>
        )
    }
    
    export default PostComponent;