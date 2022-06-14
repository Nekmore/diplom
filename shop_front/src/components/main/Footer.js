import { Link } from "react-router-dom";
import '../../styles/footer.css'

export default function Footer(props) {
   return (
       <div className="footer">
           <hr />
           <div className="footer_content">
               <ul>
                    <li>
                        <Link to="/">О компании</Link>
                    </li>
                    <li>
                        <Link to="/">Пресс-центр</Link>
                    </li>
                    <li>
                        <Link to="/">Карьера</Link>
                    </li>
                    <li>
                        <Link to="/">Контакты</Link>
                    </li>
               </ul>
               <ul>
                    <li>
                        <Link to="/">Каталог</Link>
                    </li>
                    <li>
                        <Link to="/">Автомобильные компоненты</Link>
                    </li>
               </ul>
               <ul>
                    <li>
                        <Link to="/">Потребителям</Link>
                    </li>
                    <li>
                        <Link to="/">Схема работы</Link>
                    </li>
                    <li>
                        <Link to="/">Документы</Link>
                    </li>
                    <li>
                        <Link to="/">Реализуемая продукция</Link>
                    </li>
               </ul>
               <ul>
                    <li>
                        <Link to="/">Поставщикам</Link>
                    </li>
                    <li>
                        <Link to="/">Требования и стандарты</Link>
                    </li>
                    <li>
                        <Link to="/">Развитие поставок</Link>
                    </li>
                    <li>
                        <Link to="/">Схема работы</Link>
                    </li>
                    <li>
                        <Link to="/">Признание поставщика</Link>
                    </li>
                    <li>
                        <Link to="/">Документы</Link>
                    </li>
                    <li>
                        <Link to="/">Анкета поставщика</Link>
                    </li>
               </ul>
           </div>
           <hr />
           <p>© 2006—2022 ООО «Автокомпонент»</p>
       </div>
   )

}