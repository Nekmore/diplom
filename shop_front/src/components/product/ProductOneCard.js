import '../../styles/product.css'

export default function ProductOneCard(props) {
    function flatMap(array, fn) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
          var mapping = fn(array[i]);
          result = result.concat(mapping);
        }
        return result;
      }
    const {
        id,
        name,
        description,
        detail,
        characteristics,
        image,
        price,
    } = props;
    const item = {id: id, name: name, description: description, detail: detail, characteristics: characteristics, image: image, price: price,}
    
    const result = flatMap(characteristics.split(';'), function (part) {
        return [part, <br/>];
      });
    
    return (
        <div id={"product-" + id} className="card_product">
            <h2>{name}</h2>
            <div className='image_description'>
                <img src={"/images/" + image}/>
                <div className='description'>
                    <div className='head'>
                        Описание товара
                    </div>
                    <p>{description}</p>
                    <a href="" className="border-button">Купить</a>
                </div>
            </div>
            <div className='characteristics_detail'>
                <div className='characteristics'>
                        <div className='head'>
                            Характеристики товара
                        </div>
                        <p>{result}</p>
                </div>
                <div className='detail'>
                        <div className='head'>
                            Подробное описание товара
                        </div>
                        <p>{detail}</p>
                </div>
            </div>
        </div>
    );
}