import React, {Component, PropTypes} from 'react'; 
import {reduxForm} from 'redux-form'; 
import {createPost} from '../actions/index'; 
import {Link} from 'react-router'; 
class PostsNew extends Component{
	static contextTypes = {
		router: PropTypes.object
	}; 

	onSubmit(props){
		this.props.createPost(props)
		.then(() => {
			//blog post created, go back to index
			//this.context.router.push with new path to go to. 
			this.context.router.push('/'); 
		}); 
	}
	render(){
		const { fields: { title, categories, content },  handleSubmit } = this.props; 
		//like const title = this.props.fields.title

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			<h3>Create a New Post</h3> 
			<div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
				<label>Title</label> 
				<input type="text" className="form-control" {...title}/>
				<div className="text-help">
					{/*<!-- use rdform prop touched to show blank or error --> */}
					{title.touched ? title.error : ''}
				</div> 
			</div>  

			<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`}>
				<label>Categories</label> 
				<input type="text" className="form-control" {...categories}/>
				<div className="text-help">
					{/*<!-- use rdform prop touched to show blank or error --> */}
					{categories.touched ? categories.error : ''}
				</div> 

			</div>  

			<div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>
				<label>Content</label> 
				<textarea type="text" className="form-control" {...content}/>
				<div className="text-help">
					{/*<!-- use rdform prop touched to show blank or error --> */}
					{content.touched ? content.error : ''}
				</div> 
			</div>  


			<div className="form-group">
				<label>Checks</label> 
			<label class="checkbox-inline" for="checkboxes-0">
      		<input type="checkbox" name="checkboxes" id="checkboxes-0" value="1"/>
      			1
    		</label>
    		<label class="checkbox-inline" for="checkboxes-1">
      			<input type="checkbox" name="checkboxes" id="checkboxes-1" value="2"/>
      				2
   			 </label>
			
			</div>  

		
    		
  				<div className="form-group">
				<label>Radio</label> 
					<div class="radio">
    		<label for="radios-0">
      		<input type="radio" name="radios" id="radios-0" value="1" checked="checked"/>
      			Option one
    		</label>
			</div>
  			<div class="radio">
    		<label for="radios-1">
      			<input type="radio" name="radios" id="radios-1" value="2"/>
      				Option two
    			</label>
				</div>
			
			</div>  





			<button type="submit" className="btn btn-primary">Submit</button>  
			<Link to="/" className="btn btn-danger">Cancel</Link> 
			</form> 
		); 
	}
}
function validate(values){
	const errors = {}; 
	if(!values.title){
		errors.title = "Enter a title"; 
	}
	if(!values.categories){
		errors.categories = "Enter tags"; 
	}
	if(!values.content){
		errors.content = "Enter content"; 
	}


	return errors; 
}
//reduxForm can be used like connect! (mapState, then mapDispatch) vs. (form config, mapState, mapDispatch)
export default reduxForm({
	//config for reduxForm
	form: 'PostsNew', 
	fields: ['title', 'categories', 'content'], 
	validate


}, null, {createPost})(PostsNew); 