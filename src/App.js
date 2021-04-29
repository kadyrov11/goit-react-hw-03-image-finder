import { Component, createRef } from 'react';
import axios from 'axios'

import styles from './App.module.css'

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery'
import Button from './components/Button';
import Loader from './components/Loader'
import Modal from './components/Modal'



class App extends Component {
  state = {
    gallery: [],
    page: 1,
    limit: 12,
    query: '',
    loading: false,
    showModal: false,
    src: null,
  }
  
  componentDidMount() {
  const {page, limit, query} = this.state

  axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=20962845-be92ff9dd02a983b16d8c331e&per_page=${limit}`).then(
    ({ data }) => {
      this.setState(() => ({ gallery: data.hits }))
    }
  )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { page, limit, query, loading } = this.state  
    if (loading) {
      axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=20962845-be92ff9dd02a983b16d8c331e&per_page=${limit}`).then(
    ({ data }) => {
      this.setState(({gallery}) => ({ gallery: [...gallery, ...data.hits],  loading: false }))
    }
  )
    }
    if (snapshot !== null) {
      window.scrollTo({
          top: snapshot,
          behavior: 'smooth',
      });
    }
  
  }


  listRef = createRef()

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.gallery.length < this.state.gallery.length) {
      const { current } = this.listRef
      return current.scrollHeight
    }
    return null
  }

  handleLoadMore = () => {
    const { page} = this.state
    
    this.setState(() => ({page: page + 1, loading: true}))

    }

  queryRequest = ({query}) => {
    this.setState({
      gallery: [],
      query: query,
      loading: true
    })
  }

  toggleModal = (src) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      src
    }))
  }


  render() {
    const {handleLoadMore, queryRequest, toggleModal} = this
    const{gallery, loading, showModal, src} = this.state
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={queryRequest}/>
        <div ref={this.listRef}>
          <ImageGallery list={gallery} showModal={toggleModal}/>
        </div>
        {loading && <Loader/> }
        {!loading && <Button onClick={handleLoadMore} title='LoadMore'/>}
        {showModal && <Modal closeModal={toggleModal}>
          <img src={src} style={{
            height: '90vh',
            width: '70vw',
            borderRadius: "5px"
          }}/>
        </Modal>}
      </div>
    );
  }
}

export default App;
