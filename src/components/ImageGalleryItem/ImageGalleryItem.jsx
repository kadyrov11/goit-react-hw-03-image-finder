import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags, showModal }) => {
    return (
        <li onClick={()=>showModal(largeImageURL)} className={styles.ImageGalleryItem}>
            <img src={webformatURL} alt={tags} className={styles.ImageGalleryItemImage} id={id}/>
        </li>
    )
};

export default ImageGalleryItem;