import React, { Component } from "react";
import axios, { AxiosError } from "axios";
import { Data, OrganizationData, OrganizationWrap, RepositoryData, OrganizationProps } from "./github";

const axiosGihubGraphQL = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKE}`
  }
});
const TITLE = "React GraphQL Github Client";
const GET_REPOSITORY_OF_ORGANIZATION = `
	{
		organization(login: "the-road-to-learn-react"){
			name
            url
            repository(name: "the-road-to-learn-react"){
                name
                url
            }
		}
	}
`;
const Organization: React.SFC<OrganizationProps> =  (props) => {
  if (props.error) {
    return (
      <p>
        <strong>Something went wrong;</strong>
        {props.error}
      </p>
    );
  }
  return (
    <div>
      <p>
        <strong>Issues from Organization:</strong>
        <a href={props.organization.repository.url}>{props.organization.repository.name}</a>
      </p>
    </div>
  );
};
interface IState {
  path: string;
  organization?: OrganizationData | null;
  error: string | null;
}
interface IProps {}
class App extends Component<IProps, IState> {
  state = {
    path: "the-road-to-learn-react/the-road-to-learn-react",
    organization: null,
    error: null
  };
  componentDidMount() {
    // fetch data
    this.onFeatchFromGithub();
  }
  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ path: event.currentTarget.value });
  };
  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // fetch data
    this.onFeatchFromGithub();
    event.preventDefault();
  };
  onFeatchFromGithub = () => {
    axiosGihubGraphQL
      .post<Data<OrganizationWrap>>("", { query: GET_REPOSITORY_OF_ORGANIZATION })
      .then(result => {
        this.setState(() => ({
          organization: result.data.data.organization
        }));
      })
      .catch((error: AxiosError) => {
        this.setState(() => ({
          error: error.message
        }));
      });
  };
  render() {
    const { path, organization , error} = this.state;
    console.log(organization);
    return (
      <div>
        <h1>{TITLE}</h1>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">Show open issues for https://github.com/</label>
          <input
            id="url"
            type="text"
            value={path}
            onChange={this.onChange}
            style={{ width: "300px" }}
          />
          <button type="submit">Search</button>
        </form>
        <hr />
        {organization ? (
          <Organization {...({organization, error})} />
        ) : (
          <p>No infomation yet ...</p>
        )}
      </div>
    );
  }
}

export default App;
