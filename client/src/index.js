const { useState } = React;

function App() {
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({ description: '', pickup: '', dropoff: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests([...requests, form]);
    setForm({ description: '', pickup: '', dropoff: '' });
  };

  return (
    <div className="App">
      <h1>CUET Peer to Peer Delivery</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          placeholder="Package description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="pickup"
          placeholder="Pickup location"
          value={form.pickup}
          onChange={handleChange}
        />
        <input
          name="dropoff"
          placeholder="Drop-off location"
          value={form.dropoff}
          onChange={handleChange}
        />
        <button type="submit">Request Delivery</button>
      </form>
      <ul>
        {requests.map((req, index) => (
          <li key={index}>
            {req.description} from {req.pickup} to {req.dropoff}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
