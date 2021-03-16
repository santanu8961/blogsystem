// import logo from './logo.svg';
import { useReducer } from 'react';
import './App.css';
import AllPostComponent from './components/AllPostComponent';
import HeaderComponent from './components/HeaderComponent';
import NewPostComponent from './components/NewPostComponent';

function App() {


  function reducer(state,action) {
    // console.log(state,action)
 //   console.log(action.search);
  if(action.currentTab){
     if(state.currentTab == 'allposts'){
         return ({...state,currentTab:"newpost"})
       }else if(state.currentTab == 'newpost'){
        return ({...state,currentTab:"allposts"});
       } 
      }
      else if(action.newpost){
        let posts = state.posts;
        console.log('post',action.newpost)
        if(action.newpost.title !="" && action.newpost.desc !=""){
          posts.push(
            {id:Math.random().toFixed(4)*10000,title:action.newpost.title,desc:action.newpost.desc}
          )
  
          // console.log('posts',posts)
          alert('post Uploaded Successfuly')
        }else{
          alert('please enter something and then try to publish that')
        }
        
        return({...state,posts:posts})
      }
      else if(action.search){
          let posts = state.posts;
          let searchresult=[];
          posts.forEach((post)=>{
            console.log(post.title.search(action.search))
            if(post.title.search(action.search)!= -1){
              searchresult.push(post);
            }
          });
          console.log(searchresult);
          return({...state,searchResult:searchresult})

      }
      return ({...state,searchResult:[]})
  
  }
 const [state, dispatch] = useReducer(reducer, {posts:[],currentTab:"allposts",searchResult:[]});



  return (
    <div className="App">
     <HeaderComponent state={state} dispatch={dispatch} />
     <div className="componentScreen">
     {state.currentTab =="newpost"  ? <NewPostComponent state={state} dispatch={dispatch}/> : null}
     {state.currentTab =="allposts"  ? <AllPostComponent state={state} dispatch={dispatch}/> : null}
     
     </div>
         </div>
  );
}

export default App;
