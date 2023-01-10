function Cards() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="..." alt="Card image Kappa" />
      <div className="card-body">
        <h5 className="card-title">Card TItle</h5>
        <p className="card-text">PLease work and dont fail us</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">This is a group uitem</li>
        <li className="list-group-item">This is a group uitem</li>
        <li className="list-group-item">This is a group uitem</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default Cards;
