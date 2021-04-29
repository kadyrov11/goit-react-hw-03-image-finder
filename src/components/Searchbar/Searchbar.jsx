import { Component } from 'react';

import styles from './Searchbar.module.css'


class Searchbar extends Component {
    state = {
        query: ''
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        const { onSubmit } = this.props
        onSubmit(this.state)
        this.reset()
    }
    reset = () => {
        this.setState({
            query: ''
        })
    }

    handleChange = ({ target }) => {
        const {value} = target
        this.setState({
            query: value
        })
    }

    render() {
        const {handleSubmit, handleChange} = this
        return (
            <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={styles.SearchFormButton}>
                <span className={styles.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                className={styles.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={this.state.query}
                onChange={handleChange}
                />
            </form>
            </header>
        );
    }
}

export default Searchbar;