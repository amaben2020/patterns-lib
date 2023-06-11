// Card component
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// EditButton component
const EditButton = ({ onClick }) => {
  return <button onClick={onClick}>Edit</button>;
};

// Usage of components
const MyCard = () => {
  return (
    <Card title="My Card" description="This is my card component">
      <EditButton onClick={handleEdit} />
    </Card>
  );
};
