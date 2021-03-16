


var HeaderComponent =  (props)=>{

let dispatch = props.dispatch;
let state = props.state;


    return(
        <div id='SearchComponent'>
            <input onChange={(e)=>{dispatch({search:e.target.value} )}} id="searchbox" placeholder='Search' />
            <button onClick={()=>{dispatch("");document.getElementById('searchbox').value= ''}} className="clear">Clear</button>

            <div className="navcomponents" style={{display:"flex"}}>
                <div onClick={()=>{dispatch({currentTab:"newpost"})}} className={state.currentTab=="newpost"?"component currenttab" :"component"}>New Post</div>
                <div onClick={()=>{dispatch({currentTab:"allposts"})}}  className={state.currentTab=="allposts"?"component currenttab" :"component"}>Published Posts</div>
            </div>
        </div>
    )
}

export default HeaderComponent;