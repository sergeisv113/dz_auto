import s from './Loader.module.css'
import Img from './circles.svg'

export const Loader = () => <div className={s.loader}>
    <img src={Img}/>
</div>
