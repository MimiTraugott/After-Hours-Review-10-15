import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display'

class App extends Component { 
  constructor () {
    super()
    this.state = {
      id: 1,
      title: '',
      imageUrl: '',
      content:'',
      posts: [{},{},{},{}]
    }
    this.change=this.change.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.deletePost=this.deletePost.bind(this)
  }

  change(e) {
    // console.log(e.target);
    let{value, name} = e.target
    this.setState({[name]: value})
  }
 
  deletePost(id){
    let filtered = this.state.posts.filter( post => post.id !==id)
    this.setState({posts: [...filtered] })

  }

  handleSubmit(){
    let {title, imageUrl, content, posts, id }=this.state
    this.setState({
      posts: [
        {
          id: id,
          title: title,
    imageUrl: imageUrl,
    content: content
    }, ...posts 
]
});
this.setState({ title:'', imageUrl:'', content:'', id: id++})

}


  render () {
    let {title, imageUrl, content, posts}=this.state;
    return (
      <div className="App">
        <input name='title' value={title} placeholder='add a title' onChange={(e)=> this.change(e)}/>
        <input name='imageUrl' value={imageUrl} placeholder='add a picture' onChange={(e)=> this.change(e)}/>
        <textarea name='content' value={content} placeholder='add content' onChange={(e)=> this.change(e)}/>
        <button onClick={()=> this.handleSubmit()}>Post!</button>
        <div>
          <h2>{title}</h2>
          <img style={{'width': '200px', 'height': '200px'}} src={imageUrl} alt=''/>
          <p>{content} </p>
        </div>
      
      <Display posts={posts} delete={this.deletePost}/>
        
      </div>
    );
  
    }
}

export default App;
