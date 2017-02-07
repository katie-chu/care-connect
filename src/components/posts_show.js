import React, {Component, PropTypes} from 'react'; 
import {connect} from 'react-redux'; 
import {fetchPost, deletePost} from '../actions/index'; 
import {Link} from 'react-router'; 
class PostsShow extends Component{

	static contextTypes = {
		router: PropTypes.object 
	}; 

	componentWillMount(){
		this.props.fetchPost(this.props.params.id); 
	}
	onDeleteClick(){
		this.props.deletePost(this.props.params.id).then(() => {
			//blog post created, go back to index
			//this.context.router.push with new path to go to. 
			this.context.router.push('/'); 
		}); 'lo,'
	}
	render(){
		const post = this.props.post; 
	 	if(!post){
	 		return <div> Loading! </div> 
	 	}
		return(

			<div> 
				<Link to="/" className="btn btn-primary">Back to Index</Link> 
				<button className="btn btn-danger pull-xs-right"
						onClick={this.onDeleteClick.bind(this)}>
					Delete Post
				</button> 
				<h3>{post.title}</h3> 
				<h6>Tags: {post.categories}</h6> 
				<p>{post.content}</p> 
			</div> 

		); 
	}
}

function mapStateToProps(state){
	return {post: state.posts.post}; 
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow); 