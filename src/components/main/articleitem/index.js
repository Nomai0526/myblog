import React from 'react';
import styles from './index.module.scss'
import { Link } from 'gatsby';

const ArticleItem = ({ title, description, image , slug }) => {
    console.log(title);

    return (
        <Link to={slug} className={styles.articleLink}>
            <div className={styles.articleItem}>
                <div className={styles.itemContent}>
                    <div className={styles.itemTitle}>
                        {title}
                    </div>
                    <div className={styles.itemExcerpt}>
                        {description}
                    </div>
                </div>
                {image && <div className={styles.itemImage} style={
                    { backgroundImage: `url(${image})` }
                }>
                </div>}
            </div>
        </Link>
    )
}

export default ArticleItem;