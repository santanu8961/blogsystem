import PostComponent from "./PostComponent";



var AllPostComponent =  (props)=>{

    let dispatch = props.dispatch;
    let state = props.state;
    let posts = props.state.posts;
    let searchResult = props.state.searchResult;

console.log(searchResult)
    //console.log('inallport',state);
    
    
        return(
            <div id='AllPostComponent'>
                {posts.length == 0 && (searchResult.length ==0) ? "Nothing to Show" :(searchResult.length ==0)?posts.map(post => <PostComponent  post={post} state={state} dispatch={dispatch} />):null}
                {searchResult.length ==0 ? null :searchResult.map(post => <PostComponent  post={post} state={state} dispatch={dispatch} />)}
            </div>
        )
    }
    
    export default AllPostComponent;