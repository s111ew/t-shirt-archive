import shirt1 from '../assets/images/shirt-one.jpg'
import shirt2 from '../assets/images/shirt-two.jpg'
import shirt3 from '../assets/images/shirt-three.png'
import shirt4 from '../assets/images/shirt-four.png'

const shirts = [
  {
    id: "1",
    imageUrl: shirt1,
    brand: "misc",
    color: "off-white",
    year: "2024",
  },
  {
    id: "2",
    imageUrl: shirt2,
    brand: "queen",
    color: "off-white",
    year: "1983",
  },
  {
    id: "3",
    imageUrl: shirt3,
    brand: "rolling stones",
    color: "black",
    year: "2020",
  },
  {
    id: "4",
    imageUrl: shirt4,
    brand: "misc",
    color: "black",
    year: "2021",
  },
];

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