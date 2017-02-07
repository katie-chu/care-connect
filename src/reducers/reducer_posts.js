import {FETCH_POSTS, FETCH_POST} from '../actions/index'; 

//all is list of blog posts for index route, post
//is show action/single post 

const INITIAL_STATE = {all: [], post: null}; 

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_POSTS: 
			//take current state, and add all posts (data = all)
			return { ...state, all: action.payload.data}; 
		
		case FETCH_POST: 
			//use new fetched post but keep state
			return {...state, post: action.payload.data}
		default: 
			return state; 

	}
}