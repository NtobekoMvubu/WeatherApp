import "./ConditionDetail.css"

function ConditionDetail(detailObj){
    console.log(detailObj.value?.current)
    return(
        <section className="condition-border">
            <article className="property-image">
            {detailObj.icon()}
            </article>
            <article className="condition-info">
                <h2 id="condition-title">{detailObj.title}</h2>
                <p id="condition-value">{detailObj.value}</p>
            </article>
        </section>
    )
}

export default ConditionDetail