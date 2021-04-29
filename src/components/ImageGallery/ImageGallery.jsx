import ImageGalleryItem from '../ImageGalleryItem/'

import styles from './ImageGallery.module.css'


const ImageGallery = ({ list, showModal}) => {
    const newList = list.map(item => <ImageGalleryItem showModal={showModal} key={`${item.id}`} {...item}/>)
    return (
        <ul className={styles.ImageGallery}>
            {newList}
        </ul>
    )
};

export default ImageGallery;