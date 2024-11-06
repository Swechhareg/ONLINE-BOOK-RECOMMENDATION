import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";



const Books = () => {
  const [searchTerm, setSearchTerm] = useState("gandhi");
  const [books, setBooks] = useState({ items: [] });
  
  useEffect(() => {
    fetchBooks()
    
  }, []);
  const onInputChange = e => {
   
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

 const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  };
  
  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const bookAuthors = authors => {
    if (authors.length <= 2) {
      authors = authors.join(" and ");
    } else if (authors.length > 2) {
      let lastAuthor = " and " + authors.slice(-1);
      authors.pop();
      authors = authors.join(", ");

     
    }
    return authors;
  };

 



  
    return (
      <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Hidden brand</a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form onSubmit={onSubmitHandler}>
          <label>
            <span>Search for books</span>
            <input
              type="search"
              class="form-control"
          
              value={searchTerm}
              onChange={onInputChange}
            />
            <button type="submit" class="btn btn-primary">
      <i class="fas fa-search">Search</i>
    </button>
          </label>
        </form>
    </div>
  </nav>
       
        <div class="container" style={{}} >
          <img src="http://127.0.0.1:3000/top.png"></img>
        <div class="row" style={{padding: "0%", marginLeft: "8%"}}>
                    
          {books.items.map((book, index) => {
            return (
              <>
               
                    <div class="col-md-4 px-0">
  
                      <figure class="figure" style={{margin: "auto",display:"block",height:"100%",width:"100%"}}>
                        <img  style={{display:"block",margin:"auto",marginTop:"30px"}} alt={`${book.volumeInfo.title} book`}
                          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} class="figure-img img-fluid rounded "></img>
  
                        <figcaption style={{color:"black", fontFamily:"cursive",margin:"auto",textAlign:"center"}} class="figure-caption text-right">{book.volumeInfo.title}</figcaption>
                      </figure>
                    </div>
  
  
        
  
  
                 
              </>
              
            );
          })}
        </div>
        </div>
      </div>
    );
  
  };

export default Books