import './ArticleElement.css';

export default function ArticleElement(props) {
    return (
        <div className="article-element">
            <h4>{props.title}</h4>
            <h5>{props.body}</h5>
        </div>
    )
}
