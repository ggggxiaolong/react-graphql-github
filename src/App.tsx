import React, { Component } from 'react'
import axios from 'axios'

const axiosGihubGraphQL = axios.create({
	baseURL: 'https://api.github.com.graphql',
	headers: {
		Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKE}`
	}
})
const TITLE = 'React GraphQL Github Client'
const GET_ORGANIZATION = `
	{
		ornazation(login: "the-road-to-learn-react"){
			name,
			url
		}
	}
`

class App extends Component {
  state = {path: 'the-road-to-learn-react/the-road-to-learn-react',}
  componentDidMount(){
	  // fetch data
      this.onFeatchFromGithub()
  }
  onChange = (event: React.FormEvent<HTMLInputElement>) => {
	  this.setState({ path: event.currentTarget.value})
  }
  onSubmit = (event:React.FormEvent<HTMLFormElement>)  => {
	  // fetch data
	  event.preventDefault()
  }
  onFeatchFromGithub = () => {
      axiosGihubGraphQL
        .post('', { query: GET_ORGANIZATION } )
        .then(result => console.log(result))
   }
  render() {
	const {path} = this.state
    return (
	    <div>
		    <h1>{TITLE}</h1>

			<form onSubmit={this.onSubmit}>
				<label htmlFor="url">
					Show open issues for https://github.com/
				</label>		
				<input
					id="url"
					type="text"
					value={path}
					onChange={this.onChange}
					style={{ width: '300px'}}
					/>
				<button type="submit">Search</button>
			</form>
			<hr/>
	    </div>
    )
 }
}

export default App;
