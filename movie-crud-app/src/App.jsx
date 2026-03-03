import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, addMovie, updateMovie, deleteMovie } from "./features/movies/movieSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.movies);
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    genre: "",
    rating: "",
  });

  const [editId, setEditId] = useState(null);
  const [error, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let err = {};
    if (!formData.title.trim()) {
      err.title = "Title Required...";
    }

    if (!formData.year.trim()) {
      err.year = "Year Required...";
    } else if (!/^\d{4}$/.test(formData.year)) {
      err.year = "Enter valid 4 digit Year...";
    }

    if (!formData.genre.trim()) {
      err.genre = "Genre Required...";
    }

    if (!formData.rating.trim()) {
      err.rating = "Rating Required...";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if(editId){
      dispatch(updateMovie(
          {
            id: editId,
            updatedMovie: formData,
          }
        )
      );
      setEditId(null);
    }
    else{
      dispatch(addMovie(formData));
    }
    setFormData({
        title: "",
        year: "",
        genre: "",
        rating: "",
    });
    setErrors({});
  };

  return (
    <>
      <div>
        <h1>Movie CRUD App</h1>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={8}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter Movie Title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {error.title && <div className="error">{error.title}</div>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="number"
                    name="year"
                    placeholder="Enter Movie Year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                  {error.year && <div className="error">{error.year}</div>}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Movie Genre</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    placeholder="Enter Movie Genre"
                    value={formData.genre}
                    onChange={handleChange}
                  />
                  {error.genre && <div className="error">{error.genre}</div>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type="number"
                    name="rating"
                    placeholder="Enter Movie Rating"
                    value={formData.rating}
                    onChange={handleChange}
                  />
                  {error.rating && <div className="error">{error.rating}</div>}
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                {editId ? "Update Movie" : "Add Movie"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div>
        <h1>Movies Data</h1>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={9}>
            {loading && <p>Loading...</p>}

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Movie ID</th>
                  <th>Movie Title</th>
                  <th>Movie Genre</th>
                  <th>Movie Rating</th>
                  <th>Movie Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((movie) => (
                    <tr key={movie.id}>
                      <td>{movie.id}</td>
                      <td>{movie.title}</td>
                      <td>{movie.genre}</td>
                      <td>{movie.rating}</td>
                      <td>{movie.year}</td>
                      <td>
                        <Button variant="warning" className="me-2" 
                          onClick={() => {
                              setFormData({
                                title: movie.title,
                                year: movie.year,
                                genre: movie.genre,
                                rating: movie.rating,
                              });
                            setEditId(movie.id);
                          }} 
                        >Edit</Button>

                        <Button variant="danger" onClick={() => {
                          if(window.confirm("Are you Sure to Delete this Movie...?")){
                            dispatch(deleteMovie(movie.id));
                          }
                        }}>Delete</Button>

                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
