import React, {useState} from 'react'
import { translate } from '../../../../../translations/translate'

function ProductImage(props){
    const {image, lang} = props
    const [url, setUrl] = useState(image)
    return <>
        {image ? <img src={url} alt="product_image"/> : <p className="text_center">{translate({lang: lang, info: "error"})}</p>}
    </>
}

export default ProductImage