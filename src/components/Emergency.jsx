import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import "../Style/Emergency.css";

function Emergency() {
  const [medicalKits, setMedicalKits] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    address: "",
    emergency_type: "",
    item_name: "",
    image: null,
  });

  // Fetch medical kits
  useEffect(() => {
    fetchMedicalKits();
  }, []);

  const fetchMedicalKits = async () => {
    try {
      const { data, error } = await supabase.from("medical_kits").select("*");
      if (error) throw error;
      setMedicalKits(data);
    } catch (error) {
      console.error("Error fetching medical kits:", error);
    }
  };

  // Fetch supplies
  useEffect(() => {
    fetchSupplies();
  }, []);

  const fetchSupplies = async () => {
    try {
      const { data, error } = await supabase.from("supplies").select("*");
      if (error) throw error;
      setSupplies(data);
    } catch (error) {
      console.error("Error fetching supplies:", error);
    }
  };

  
  const groupedKits = medicalKits.reduce((acc, kit) => {
    if (!acc[kit.disaster_type]) {
      acc[kit.disaster_type] = [];
    }
    acc[kit.disaster_type].push(kit);
    return acc;
  }, {});

  // Handle adding items to the selected list
  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

 
  const handleRemoveItem = (itemId) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  
    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }
  
   
    if (
      !formData.name ||
      !formData.email ||
      !formData.city ||
      !formData.address ||
      !formData.emergency_type
    ) {
      alert("Please fill out all required fields.");
      return;
    }
  
    try {
      let imageUrl = null;
  
      if (formData.image) {
        const { data: fileData, error: fileError } = await supabase.storage
          .from("order-images")
          .upload(`orders/${formData.image.name}`, formData.image);
        if (fileError) throw fileError;
  
        
        const { data: urlData } = supabase.storage
          .from("order-images")
          .getPublicUrl(`orders/${formData.image.name}`);
        imageUrl = urlData.publicUrl;
      }
  
      const { error } = await supabase.from('orders').insert({
        name: formData.name,
        email: formData.email,
        city: formData.city,
        address: formData.address,
        emergency_type: formData.emergency_type,
        item_name: selectedItems[0]?.Item || selectedItems[0]?.item_name, // Use your existing column
        image: formData.image
      });
      if (error) throw error;
  
      alert("Order Placed!");
      setSelectedItems([]);
      setFormData({
        name: "",
        email: "",
        city: "",
        address: "",
        emergency_type: "",
        item_name: "",
        image: null,
      });
    } catch (error) {
      console.error("Error placing order:", error);
      alert(`Failed to place order: ${error.message}`);
    }
  };

  return (
    <div className="emergency-container">
      <h2>Emergency Medical Supplies</h2>
      <table className="supplies-table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Item</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {supplies.map((item, index) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td>{item.Item}</td>
              <td>{item.Description}</td>
              <td>
                <button onClick={() => handleAddItem(item)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="medical-kits-container">
        {Object.keys(groupedKits).map((disasterType) => (
          <div key={disasterType}>
            <h2>{disasterType} Medical Kit</h2>
            <table className="supplies-table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {groupedKits[disasterType].map((kit, index) => (
                  <tr key={kit.id}>
                    <td>{index + 1}</td>
                    <td>{kit.item_name}</td>
                    <td>{kit.description}</td>
                    <td>{kit.quantity}</td>
                    <td>
                      <button onClick={() => handleAddItem(kit)}>Add</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="selected-items-box">
        <h3>Selected Items</h3>
        {selectedItems.length > 0 ? (
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>
                {item.Item || item.item_name} - {item.Description || item.description}
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items selected.</p>
        )}
      </div>

      <h1>Order Form</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
        />
        <p className="orderPara">Type the Location where incident happened</p>
        <input
          type="text"
          placeholder="Location"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          required
        />
        <select
          value={formData.emergency_type}
          onChange={(e) =>
            setFormData({ ...formData, emergency_type: e.target.value })
          }
          required
        >
          <option value="">Select Emergency Type</option>
          <option value="Accident">Accident</option>
          <option value="Fire Emergency">Fire Emergency</option>
          <option value="Flood Emergency">Flood Emergency</option>
          <option value="Earthquake Emergency">Earthquake Emergency</option>
        </select>
        <p className="orderPara">Take a picture of Incident</p>
        <input
          className="imageform"
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
        />
        <button  smooth="true" type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Emergency;