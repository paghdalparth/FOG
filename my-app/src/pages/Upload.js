import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const Upload = () => {
  const [data, setData] = useState({
    name: "",
    title: "",
    category: ""
  }); 
  const [allCategory, setAllCategory] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const navigate = useNavigate();
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/delete/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setAllProduct(allProduct.filter((product) => product._id !== id));
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };

  const fetchAllProduct = () => {
    fetch(`http://localhost:3000/api/v1/get-data`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllProduct(data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(`http://localhost:3000/api/v1/add-data`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    console.log("dataApi", dataApi);

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, [allProduct]);

  return (
    <div class="content-wrapper">
      <div class="row">

        <div class="col-md-6 grid-margin stretch-card ">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-primary">Add Data</h4>
              <form class="forms-sample"  onSubmit={handleSubmit} >

                <div class="form-group">
                  <label for="exampleInputUsername1">Name</label>
                  <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleOnChange}
                      class="form-control"
                      id="name"
                      placeholder="Enter Name"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputUsername1">Title</label>
                  <input
                      type="text"
                      name="title"
                      value={data.title}
                      onChange={handleOnChange}
                      class="form-control"
                      id="title"
                      placeholder="Enter title"
                  />
                </div>

                <div class="form-group col-md-4">
                    <label for="exampleInputPassword1">Category</label>
                    <select
                      name="category"
                      id=""
                      className="form-control"
                      value={data.category}
                      onChange={handleOnChange}
                    >
                      <option value="" disabled selected hidden>
                        Select Category
                      </option>
                      <option value="Setting">Setting</option>
                      <option value="Rules">Rules</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                <button type="submit" class="btn btn-primary mr-2">
                  Submit
                </button>
                
                <button class="btn btn-light">Cancel</button>

              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-6 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Sr.No.</th>
                      <th>Name</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProduct?.map((el, index) => {
                      return (
                        <tr key={el._id}>
                          <td>{index+1}</td>
                          <td>{el?.name}</td>
                          <td>{el?.title}</td>
                          <td>{el?.category}</td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center">
                                <Link type="button" className="text-primary" state={{product:el}} to={`/edit-upload/${el._id}`}>
                                <MdModeEditOutline className="icon-large"/></Link>
                                <button type="button" className="btn text-primary mr-2" onClick={() => deleteProduct(el._id)}><MdDelete className="icon-large"/></button>
                            </div>   
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
