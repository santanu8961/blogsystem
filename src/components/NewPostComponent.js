


var NewPostComponent =  (props)=>{

    let dispatch = props.dispatch;
    let state = props.state;

    function clearvals(p1,p2) {
        p1.value="";
        p2.value=""
    }
    
    console.log('in newpost',state);
        return(
            <div id='NewPostComponent'>
                <input placeholder={"Enter Post Title Here"} id='newPostTitle' />
                <textarea placeholder={"Enter Post details Here"} id="newPostBody" />
                <button className="clear" onClick={()=>{dispatch({newpost:{title:document.getElementById(`newPostTitle`).value,desc:document.getElementById(`newPostBody`).value}});clearvals(document.getElementById(`newPostBody`),document.getElementById(`newPostTitle`))}}>Post</button>
            </div>
        )
    }
    
    export default NewPostComponent;