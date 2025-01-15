import shirts from "../shirts"

function Grid() {
  const cells = shirts.map((shirt, index) => {
    const isImageFirst = Math.floor(index / 2) % 2 === 0;

    return (
      <div className="cell" key={index}>
        {isImageFirst && <img className="shirt-image" src={shirt.imageUrl} alt="" />}
        <div className="description">
          <span>{shirt.brand}</span>
          <span>{shirt.color}</span>
          <span>{shirt.year}</span>
        </div>
        {!isImageFirst && <img className="shirt-image" src={shirt.imageUrl} alt="" onMouseEnter={(e) => showDescription(e)} onMouseLeave={(e) => hideDescription(e)}/>}
      </div>
    );
  });

  return (
    <section>
      <div className="grid-container">
        {cells}
      </div>
    </section>
  )
}

function showDescription(e) {
  const description = e.previousElementSibling;
  if (description && description.classList.contains('description')) {
    description.style.visibility = 'visible';
  }
}

function hideDescription(e) {
  const description = e.previousElementSibling;
  if (description && description.classList.contains('description')) {
    description.style.visibility = 'hidden';
  }
}

export default Grid