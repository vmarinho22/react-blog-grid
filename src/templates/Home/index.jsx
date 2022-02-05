import "./styles.css";

import { Component } from "react/cjs/react.production.min";
import {loadPosts} from '../../utils/load-posts';
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 6,
    searchValue: "",
  };

  // Quando um componente é montado, ele chama essa função do React.
  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    const {page, postPerPage} = this.state;
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;
    
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
  }

  // Quando o estado de um componente é atualizado, ele chama essa função do React.
  componentDidUpdate() {
    // this.handleTimeout();
  }

  // Quando um componente for desmontado, ele chama essa função do React.
  componentWillUnmount() {
  }

  handleChange = (event) => {
    const {value} = event.target;

    this.setState({ searchValue: value });
  }

  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    const filteredPosts = !!searchValue? 
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;


    
    return (
      <section className="container">
        
        <div className="search-container">
         
          <h1>Busca: {searchValue}</h1>
          
          <TextInput 
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
                 {filteredPosts.length === 0 && (
        <p>Nenhum post encontrado :c</p>
       )}
        </div>
       
       {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts}/>
       )}
       

        

        <div className="button-container">
          {!searchValue && ( 
            <Button 
            text="Ver mais artigos" 
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        )}
          
        </div>
      </section>
    );
  }
}

export default Home;
