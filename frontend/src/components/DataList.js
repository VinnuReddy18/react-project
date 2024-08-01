import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DataList.css';
import { CSVLink } from "react-csv";
import DataVisualization from './DataVisualization';

const DataList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [sortBy, filterValue]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      if (Array.isArray(response.data)) {
        setData(response.data);
        setFilteredData(response.data);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...data];

    if (filterValue.trim() !== '') {
      filtered = filtered.filter(item =>
        Object.values(item).some(val =>
          val.toString().toLowerCase().includes(filterValue.toLowerCase())
        )
      );
    }

    if (sortBy) {
      filtered.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }

    setFilteredData(filtered);
  };

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div className="container mt-5">
      {loading && <div className="alert alert-info">Loading data...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row mb-3">
        <div className="col-md-6 d-flex align-items-center">
          <label className="mr-2">Search:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <div className="button-container">
            <button onClick={toggleModal} className="btn btn-secondary">
              Show Data Visualization
            </button>
            <CSVLink data={filteredData} filename={"filtered-data.csv"}>
              <button className="btn btn-primary">
                Export as CSV
              </button>
            </CSVLink>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <DataVisualization data={filteredData} />
          </div>
        </div>
      )}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>ID</th>
            <th>Bio</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No results found</td>
            </tr>
          ) : (
            filteredData.map((item, index) => (
              <tr key={`${item.id}-${index}`}>
                <td>{item.name}</td>
                <td>{item.language}</td>
                <td>{item.id}</td>
                <td>{item.bio}</td>
                <td>{item.version}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
