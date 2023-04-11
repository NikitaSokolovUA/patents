const Card = ({ credentials }) => {
  console.log(credentials);
  return (
    <div>
      <p>
        адреса: <span>{credentials.address}</span>
      </p>
      <p>
        Name: <span>{credentials.name}</span>
      </p>
      <p>
        Number: <span>{credentials.number}</span>
      </p>
      <p>
        Owners: <span>{credentials.owners}</span>
      </p>
      <p>
        Address: <span>{credentials.registrationDate}</span>
      </p>
    </div>
  );
};

export default Card;
