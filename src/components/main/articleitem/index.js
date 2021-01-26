import React from 'react';
import styles from './index.module.scss'
import { Link } from 'gatsby';

const ArticleItem = ({ title, description, image }) => {
    console.log(title);
    
    return (
        <Link to="#">
            <div className={styles.articleItem}>
                <div className={styles.itemContent}>
                    <div className={styles.itemTitle}>
                        {title}
                    </div>
                    <div className={styles.itemExcerpt}>
                        {description}
                    </div>
                </div>
                <div className={styles.itemImage} style={
                    { backgroundImage: `url(${image})` }
                }>
                </div>
            </div>
        </Link>
    )
}

export default ArticleItem;