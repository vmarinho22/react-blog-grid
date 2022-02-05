import "./styles.css";

import { Component } from "react/cjs/react.production.min";
import {loadPosts} from '../../utils/load-posts';
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 6
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
  render() {
    const { posts, page, postPerPage, allPosts } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;
    
    return (
      <section className="container">
        <Posts posts={posts}/>
        <div className="button-container">
          <Button 
            text="Ver mais artigos" 
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}

export default Home;
