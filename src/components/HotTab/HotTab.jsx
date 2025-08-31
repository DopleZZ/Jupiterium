import ArticleElement from "../ArticleElement/ArticleElement";
import './HotTab.css';

export default function HotTab(props){
    return (
        <div className="hot-tab">
            {props.post && props.post.slice(0, 3).map((item) => (
                <ArticleElement
                    key={item.id}
                    title={item.title}
                    body={item.body.length > 80 ? item.body.slice(0, 80) + '...' : item.body}
                />
            ))}
        </div>
    )
}