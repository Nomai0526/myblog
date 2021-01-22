import React from 'react';
import SEO from '../seo/seo'
import style from './layout.module.scss'

const layout = ({ description, lang, meta, title,children}) => {
  return (
    <div className={style.layout}>
      <SEO
        description={description}
        lang={lang}
        meta={meta}
        title={title}
      ></SEO>
      {children}
    </div>
  )
}

export default layout